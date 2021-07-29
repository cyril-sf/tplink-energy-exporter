#!/usr/bin/env node

async function main() {
    const { Client } = require('tplink-smarthome-api');

    const client = new Client();

    const plug = await client.getDevice({ host: '10.0.0.10'});

    const dailyStats = await plug.emeter.getDayStats(2021, 7);

    console.log(dailyStats);
}

main()