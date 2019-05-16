import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');
import dynamodb = require('@aws-cdk/aws-dynamodb');


export interface HitCounterProps {
    /**The function that will count hits */
    downstream: lambda.IFunction;
}

export class HitCounter extends cdk.Construct {

    // allows access to the counter function
    public readonly handler: lambda.Function;

    // the hit counter table
    public readonly table: dynamodb.Table;

    constructor(scope: cdk.Construct, id: string, props: HitCounterProps){
        super(scope, id);

        const table = new dynamodb.Table(this, 'Hits');
        table.addPartitionKey({ name: 'path', type:dynamodb.AttributeType.String});
        this.table = table;

        this.handler = new lambda.Function(this, 'HitCounterHandler', {
            runtime: lambda.Runtime.NodeJS810,
            handler: `hitcounter.handler`,
            code: lambda.Code.asset('lambda'),
            environment: {
                DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
                HITS_TABLE_NAME: table.tableName
            }
        });

        //grant permissions to dynamodb
        table.grantReadWriteData(this.handler.role);

        // grant the lambda role invoke permissions to the downstream function
         props.downstream.grantInvoke(this.handler.role);
    }
}