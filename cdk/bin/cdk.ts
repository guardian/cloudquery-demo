import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { CloudqueryDemo } from "../lib/cloudquery-demo";

const app = new App();
new CloudqueryDemo(app, "CloudqueryDemo-INFRA", { stack: "playground", stage: "INFRA" });
