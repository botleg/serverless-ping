'use strict';
const AWS = require('aws-sdk'),
      data = require('./data');

module.exports.handler = (event, context, callback) => {
  const split = context.invokedFunctionArn.split(':'),
        topic = `arn:aws:sns:${split[3]}:${split[4]}:${process.env.TOPIC_NAME}`,
        sns = new AWS.SNS();

  for (let item in data) {
    sns.publish({
      Message: JSON.stringify({
        region: item,
        url: data[item]
      }),
      TopicArn: topic
    }).promise().catch(err => console.log(err.stack));
  }

  callback(null);
};