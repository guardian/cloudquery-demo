> **Note**
> This repository has been archived, in favour of https://github.com/guardian/service-catalogue.

# CloudQuery Demo
Experimenting with [CloudQuery](https://www.cloudquery.io/).

## What's being tested?
This repository uses the following CQ sources:
1. [AWS](https://www.cloudquery.io/docs/plugins/sources/aws/overview)
2. [GitHub](https://www.cloudquery.io/docs/plugins/sources/github/overview)
3. [Snyk](https://www.cloudquery.io/docs/plugins/sources/snyk/overview)

This is to compare it to [guardian/service-catalogue](https://github.com/guardian/service-catalogue).

This demo uses [Elasticsearch as the destination](https://www.cloudquery.io/docs/plugins/destinations/elasticsearch/overview). 
This is mostly as we can use Kibana to add a simple data exploration UI.

## How to use
1. Install Docker
2. Create a `.env` file:
   
   ```sh
   cp .env-example .env
   ```
3. Add a [GitHub Personal Access Token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to `.env` with the [following permissions](https://www.cloudquery.io/blog/introducing-the-github-cloudquery-provider):
   
   ```
   read:org
   read:project
   public_repo
   ```
4. Add a [Snyk Token](https://docs.snyk.io/snyk-api-info/authentication-for-api) to `.env`
5. Get `developerPlayground` AWS credentials from Janus
6. (optional) Add more AWS accounts to [config/cloudquery/aws.yml](config/cloudquery/aws.yml)
7. Start things:
   
   ```sh
   docker compose up -d
   ```
8. (one off) [Create some index patterns](http://localhost:5601/app/management/kibana/indexPatterns), the simplest being:
   - aws_*
   - github_*
   - snyk_*
9. [View the data](http://localhost:5601/app/discover#/)
