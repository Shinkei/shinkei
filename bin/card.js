#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
let chalk = require('chalk');
let boxen = require('boxen');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};
// Text + chalk definitions
const data = {
  name: chalk.white('Jorge Ramírez /'),
  handle: chalk.cyan('@shinkei'),
  work: chalk.white('Senior Javascript Developer'),
  twitter: chalk.cyan('https://twitter.com/shinkei1'),
  github: chalk.cyan('https://github.com/shinkei'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/jorgeivanramirezh/'),
  web: chalk.cyan('http://shinkei.github.io/'),
  npx: chalk.white('npx shinkei'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
};

// Actual strings we're going to output
let newline = '\n';
let heading = `${data.name} ${data.handle}`;
let working = `${data.labelWork}  ${data.work}`;
let twittering = `${data.labelTwitter}  ${data.twitter}`;
let githubing = `${data.labelGitHub}  ${data.github}`;
let linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
let webing = `${data.labelWeb}  ${data.web}`;
let carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding;

console.log(chalk.green(boxen(output, options)));
