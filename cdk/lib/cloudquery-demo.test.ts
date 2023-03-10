import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { CloudqueryDemo } from "./cloudquery-demo";

describe("The CloudqueryDemo stack", () => {
  it("matches the snapshot", () => {
    const app = new App();
    const stack = new CloudqueryDemo(app, "CloudqueryDemo", { stack: "playground", stage: "TEST" });
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
