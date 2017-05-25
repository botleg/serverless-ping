# AWS Ping Serverless Function

This project uses [serverless](https://serverless.com) framework to create Lambda functions that pings various AWS endpoints and writes the results to s3 bucket.

## Run Instructions

* Install `serverless` framework with `npm install -g serverless`.
* Checkout [here](https://serverless.com/framework/docs/providers/aws/guide/credentials/) to connect serverless with your AWS account.
* Install node dependencies with `npm install`.
* Create a file `env.yml`, for environment variables, with following contents:

```yaml
TOPIC_NAME:     # Name for SNS Topic
BUCKET_NAME:    # Name for S3 Bucket
```

* Deploy lambda function with `serverless deploy`.