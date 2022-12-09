// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for OnEventFunction
 */
export interface OnEventFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/ecs-deployment-provider/on-event.
 */
export class OnEventFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: OnEventFunctionProps) {
    super(scope, id, {
      description: 'src/ecs-deployment-provider/on-event.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs16.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/ecs-deployment-provider/on-event.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}