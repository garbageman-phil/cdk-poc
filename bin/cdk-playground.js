#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/cdk");
//import { CdkPlaygroundStack } from '../lib/cdk-playground-stack';
const foo_1 = require("../lib/foo");
const app = new cdk.App();
//new CdkPlaygroundStack(app, 'CdkPlaygroundStack');
new foo_1.CdkIntuitPocStack(app, 'CdkIntuitPocStack');
app.run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXlncm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstcGxheWdyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxvQ0FBcUM7QUFDckMsbUVBQW1FO0FBQ25FLG9DQUErQztBQUcvQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixvREFBb0Q7QUFDcEQsSUFBSSx1QkFBaUIsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUVoRCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgY2RrID0gcmVxdWlyZSgnQGF3cy1jZGsvY2RrJyk7XG4vL2ltcG9ydCB7IENka1BsYXlncm91bmRTdGFjayB9IGZyb20gJy4uL2xpYi9jZGstcGxheWdyb3VuZC1zdGFjayc7XG5pbXBvcnQgeyBDZGtJbnR1aXRQb2NTdGFjayB9IGZyb20gJy4uL2xpYi9mb28nO1xuXG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4vL25ldyBDZGtQbGF5Z3JvdW5kU3RhY2soYXBwLCAnQ2RrUGxheWdyb3VuZFN0YWNrJyk7XG5uZXcgQ2RrSW50dWl0UG9jU3RhY2soYXBwLCAnQ2RrSW50dWl0UG9jU3RhY2snKTtcblxuYXBwLnJ1bigpO1xuIl19