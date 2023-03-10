import 'source-map-support/register';
import { GuRootExperimental } from '@guardian/cdk/lib/experimental/constructs';
import { CloudqueryDemo } from '../lib/cloudquery-demo';

const app = new GuRootExperimental();

new CloudqueryDemo(app, 'CloudqueryDemo-INFRA', {
	stack: 'playground',
	stage: 'INFRA',
	env: {
		region: 'eu-west-1',
	},
});
