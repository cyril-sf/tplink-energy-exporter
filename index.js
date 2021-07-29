#!/usr/bin/env node

const { ArgumentParser } = require('argparse');
const { description, version } = require('./package.json');

async function main({device, year, month}) {
    const { Client } = require('tplink-smarthome-api');

    const client = new Client();

    const plug = await client.getDevice({ host: device});

    const dailyStats = await plug.emeter.getDayStats(parseInt(year), parseInt(month));

    console.log(dailyStats);
}

const parser = new ArgumentParser({
    description
  });
   
parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('-d', '--device', { help: 'IP of host' });
parser.add_argument('-y', '--year', { help: 'Year' });
parser.add_argument('-m', '--month', { help: 'Month' });
  

main(parser.parse_args())