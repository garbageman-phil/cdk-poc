#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/cdk");
const cdk_intuit_poc_stack_1 = require("../lib/cdk-intuit-poc-stack");
const app = new cdk.App();
new cdk_intuit_poc_stack_1.CdkIntuitPocStack(app, 'CdkIntuitPocStack');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXYyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXYyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyxvQ0FBcUM7QUFDckMsc0VBQWdFO0FBRWhFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksd0NBQWlCLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgY2RrID0gcmVxdWlyZSgnQGF3cy1jZGsvY2RrJyk7XG5pbXBvcnQgeyBDZGtJbnR1aXRQb2NTdGFjayB9IGZyb20gJy4uL2xpYi9jZGstaW50dWl0LXBvYy1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5uZXcgQ2RrSW50dWl0UG9jU3RhY2soYXBwLCAnQ2RrSW50dWl0UG9jU3RhY2snKTtcbiJdfQ==