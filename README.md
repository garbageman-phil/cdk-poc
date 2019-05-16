# CDK Eval for large enterprise adoption

## Goal
Test and POC [AWS CDK](https://github.com/awslabs/aws-cdk) to determine if it is a more appropriate technology to adopt for the CG SRE team vs current use of CloudFormation.  This is potentially valuable to the SRE team because today the CFN templates are often cut / paste from one another leading to many copies of the same standards.  Or better said, CloudFormation is _VERY_ _WET_.  The result is that anytime there is a new standard, each team has to make same / similar edits, has to manually  onboard them, teams have to track via different jiras etc.  

## Success Criteria

* Less duplication of code.  
* Ability to create shared libraries that are easy to consume update for multiple apps.
* Easy to implement and adoption for non-SRE teams.
* Ability to onboard new AWS technologies.
* Ability to reproduce current Cloud Formation functionality.

## Results

* Was able to setup a stack with Dynamodb, lambda, aipgw, and other resources successfully.
* Was able to setup a stack with EC2, ALB, autoscaling, cloudwatch successfully. 
* Ran into problems with customizing deployments to match existing parameters.

## Conclusion

There are probably some use cases where CDK makes a lot of sense.  Primarly those are cases where its a complete stack that is being deployed with limited AWS resources relied on outside of the stack (i.e. vpc).  Probably the ideal type would be LAMBDA.  We may also find other types like IKS based apps fit well also.  EC2 based apps will probably have a hard time obtaining like for like functionality, especially as they diverge from default (i.e. different disk types, etc).  In cases like this, most likely teams will find it time consuming and difficult to modify their stacks using CDK to get the desired output.

The notion of using shared libs could be possible, but it opens a new door with how to manage and onboard new libraries without impact to production code bases.  The contract between app deployer and library creator would need to be well thought out to reduce risk to production assets.  During the POC I ran into a case where my node_modules and package.json file got into a case of incompatible cross dependencies.  This was a hard problem to work out and I could see that this would be larger problem if adopted widely.

Simple cases of AWS stacks (like Lambda) are pretty easy to use with CDK.  There is some up front time teams would need to invest in to setup and understand CDK, but after that, developing Cloudformation Templates with CDK vs traditional means would probably be even.  In cases where there is new AWS resources, more advanced requirements, or larger cross stack dependencies, CDK becomes much harder to use vs our existing way o managing Cloud Formation.

CDK is still in development mode and will naturally lag behind CF with new features.  This will play out even more so than what we have seen in the past with regional rollouts of things like WAF.  

Overall, the ability to reproduce our current CF stack for a simple app failed.  Many of the components are there, but fine tuning the details proved to be too hard.  For example, its fairly easy to get an EC2 instance up and behind an ALB, however, now getting that ALB on the exact right network in the VPC, with the exact right ssl cert, tags, etc was hard.  Same thing for the EC2 instance.  It is easy to spin up an EC2 instance, but getting it setup with the right disk, size of disk, etc was hard.  Also, at the end of this, there would need to be additional work to setup correct properties files that are injested by libs to control what is deployed where would need to be created.  

In general, I found that I really liked CDK, I like the idea of it, where it is going, etc.  However, I wouldnt want to support it in a large scale enviornment as it sits today.

### CDK Positive Results

* CDK has some really cool tools, like `cdk synth` and `cdk diff`.  
* CDK is fun and forces a cool level of application maturity.
* The potential to deliver on the objectives is there for CDK.

### CDK Drawbacks

* Documentation is lacking.  Lots of dead links in Google from where they used to have documents listed at.  In  some cases, docs are inconsistent with implementation.
* Some key functionality missing or not fully impemented (i.e. comparrison operators in alarms).
* CDK uses changesets which really wants to define your infrastructure as code and as a complete deployable block.  This is fundamentally different than what we have today with app-deploy and env-shell.  This represents a significant change where potentially increase the risk at deploy time.
* CDK doesnt do well with sharing resources across stacks.
* The TS compiler and IDE functionality can be buggy at times.  Ran into cases multiple times where the `npm run build` would throw errors saying a resource wasnt used, no error in the IDE, but if a simple `console.log()` is added, then everything builds, deploys, etc and the resource is created in AWS.
* Keeping track of node_modules sucks. 

# Things learned

* Changesets are cool.
* CDK utilities are awesome!
* Maybe carrot garden isnt that bad.
* It is probably worth doing a POC on chainsets in general as well as AWS Service Catalog.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

# Useful links

* [AWS CDK Reference](https://docs.aws.amazon.com/cdk/latest/guide/reference.html)
* [AWS CDK Use CFN](https://docs.aws.amazon.com/cdk/latest/guide/use_cfn_template.html)
* [AWS CDK Sample](https://github.com/aws-samples/aws-cdk-examples/blob/master/typescript/application-load-balancer/index.ts)
* [AWS CDK Workshop](https://cdkworkshop.com/20-create-project/200-watch.html)
* [AWS CDK TS Reference](https://docs.aws.amazon.com/cdk/api/latest/typescript/api/index.html)

