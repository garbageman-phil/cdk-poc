import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');
import dynamodb = require('@aws-cdk/aws-dynamodb');
export interface HitCounterProps {
    /**The function that will count hits */
    downstream: lambda.IFunction;
}
export declare class HitCounter extends cdk.Construct {
    readonly handler: lambda.Function;
    readonly table: dynamodb.Table;
    constructor(scope: cdk.Construct, id: string, props: HitCounterProps);
}
