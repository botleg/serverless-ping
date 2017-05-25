'use strict';
const Promise = require('bluebird'),
      ping = Promise.promisify(require('tcp-ping').ping),
      AWS = require('aws-sdk');

module.exports.handler = (event, context, callback) => {
  if (event && 'Records' in event) {
    const body = JSON.parse(event.Records[0].Sns.Message);

    ping({ address: body.url }).then(data => {
      let s3 = new AWS.S3();
      s3.putObject({
        Bucket: process.env.BUCKET_NAME,
        Key: body.region,
        Body: JSON.stringify(data)
      }).promise().catch(err => console.log(err.stack));
    }).catch(err => console.log(err.stack));
  }
};