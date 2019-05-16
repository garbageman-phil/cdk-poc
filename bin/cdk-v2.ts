#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { CdkIntuitPocStack } from '../lib/cdk-intuit-poc-stack';

const app = new cdk.App();
new CdkIntuitPocStack(app, 'CdkIntuitPocStack');
