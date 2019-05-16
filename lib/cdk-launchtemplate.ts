/*
import cdk = require('@aws-cdk/cdk');
import autoscaling = require('@aws-cdk/aws-autoscaling');
import ec2 = require('@aws-cdk/aws-ec2');


export class cdkLaunchTemplate extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      
      // define vpc the first way
      const vpc = ec2.VpcNetwork.import(this, 'vpc', {
        vpcId: 'vpc-08131ee958aa17c0a',
        availabilityZones: [ 'us-west2a', 'us-west2b', 'us-west2c' ],
        privateSubnetIds: [ 'subnet-0782311d4e0a6e7e9', 'subnet-04ff7e259cfe1c5c0', 'subnet-02d19c77f9d00276c' ],
        publicSubnetIds: [ 'subnet-0961ca00f94e69b91', 'subnet-0f5ff86750547fec0', 'subnet-0b9c6b1e8a7c4b010'],
      });
      
  
      // define asg 
      const asg = new autoscaling.AutoScalingGroup(this, 'ASG', { 
        vpc,
        instanceType: new ec2.InstanceTypePair(ec2.InstanceClass.Compute5,ec2.InstanceSize.Large),
        machineImage:  new ec2.AmazonLinuxImage()
      })

      const appLaunchTemplate = new ec2.CfnLaunchTemplate(this, 'AppLaunchTemplate', {
        launchTemplateName: "launchtemplatetest",
        launchTemplateData: {
        }
      })

    }
  }
  */