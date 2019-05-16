#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
//import { CdkPlaygroundStack } from '../lib/cdk-playground-stack';
import { CdkIntuitPocStack } from '../lib/foo';


const app = new cdk.App();
//new CdkPlaygroundStack(app, 'CdkPlaygroundStack');
new CdkIntuitPocStack(app, 'CdkIntuitPocStack');

app.run();
