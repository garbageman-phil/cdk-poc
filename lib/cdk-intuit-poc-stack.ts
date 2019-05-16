import cdk = require('@aws-cdk/cdk');
import autoscaling = require('@aws-cdk/aws-autoscaling');
import ec2 = require('@aws-cdk/aws-ec2');
import alb = require('@aws-cdk/aws-elasticloadbalancingv2');
import cloudwatch = require('@aws-cdk/aws-cloudwatch');

export class CdkIntuitPocStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    // define ami
    const linux = new ec2.GenericLinuxImage({
      'us-west-2': 'ami-0848f6434c8e6ba4b'
    });

    // define vpc the first way
    const vpc = ec2.VpcNetwork.import(this, 'VPC', {
      vpcId: 'vpc-08131ee958aa17c0a',
      availabilityZones: [ 'us-west2a', 'us-west2b', 'us-west2c' ],
      privateSubnetIds: [ 'subnet-0782311d4e0a6e7e9', 'subnet-04ff7e259cfe1c5c0', 'subnet-02d19c77f9d00276c' ],
      publicSubnetIds: [ 'subnet-0961ca00f94e69b91', 'subnet-0f5ff86750547fec0', 'subnet-0b9c6b1e8a7c4b010'],
    });
    
    //define vpc 
    //const bigvpc = ec2.VpcNetwork.importFromContext(this, 'ExistingVPC', {
    //  vpcName: 'vpc-1',
    //});
    
    //const vpc = new  ec2.VpcNetwork(this, 'myvpc');

    
    // define asg 
    const asg = new autoscaling.AutoScalingGroup(this, 'ASG', { 
      vpc,
      instanceType: new ec2.InstanceTypePair(ec2.InstanceClass.Compute5,ec2.InstanceSize.Large),
      machineImage: linux,
      maxCapacity: 30,
      minCapacity: 2,
    });

    // define CPUUtilization for  alarm and asg scale out policy
    const cpuMetric = new cloudwatch.Metric({
      namespace: `AWS/EC2`,
      metricName: 'CPUUtilization',
    })

    const scaleOut = new autoscaling.StepScalingPolicy(this, 'SCALEOUTPOLICY', {
      autoScalingGroup: asg,
      metric: cpuMetric,
      scalingSteps: [
        { upper:15, change: -1},
        { upper:10, change: -1},
        { lower:50, change: +1},
        { lower:60, change: +2},
      ],
      adjustmentType: autoscaling.AdjustmentType.ChangeInCapacity,
      
    })
    console.log(scaleOut);


    // setup alarm
    const cpuAlarm  = new cloudwatch.Alarm(this, 'ALARM',{
      metric: cpuMetric,
      threshold: 30,
      evaluationPeriods: 3,
      datapointsToAlarm: 2,
      //comparisonOperator: "GreaterThanThreshold",
    })
    console.log(cpuAlarm);

    // define the load balancer
    const lb = new alb.ApplicationLoadBalancer(this, 'LB', {
      vpc,
      http2Enabled: true,
      internetFacing: false,

    });

    // define the alb listener
    const listener = lb.addListener('Listener', {
      port: 80,
    });

    listener.addTargets('Target', {
      port: 80,
      targets: [asg]
    });

    listener.connections.allowDefaultPortFromAnyIpv4('Open to the world');

    /*
    // define the asg scale policy
    asg.scaleOnRequestCount('AModestLoad', {
      targetRequestsPerSecond: 1
    });

    asg.scaleOnCpuUtilization('ScaleOut', {
      targetUtilizationPercent: 30,
      cooldownSeconds: 300,
    })
    */

  }
}