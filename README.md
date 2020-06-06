# Gitlab Project Info

Get information about dev and master branch of all repositories in a Gitlab project

## Clone repository

```
git clone git@github.com:melops-hh/gitlab-project-status-info.git
```

## Install dependencies

```
npm i
```

## Set env var's

```
cp .env-dist .env
```

.env should look something like this:

```
GITLAB_TOKEN=jY04hO6izwNOpQiwlCSLQ
GITLAB_PROJECT_ID=123456
```

## Run local

```
npm start
```

## Deploy to Google Cloud Functions

```
cp .env-gcp-dist .env-gcp
```

.env-gcp should look somthing like this:

```
GITLAB_TOKEN:jY04hO6izwNOpQiwlCSLQ
GITLAB_PROJECT_ID:123456
SECRET:wlvUKQF24JcfoPrKxXpquRMPBCxvhj7E
```

Replace PROJECT with your google cloud project id and REGION the region you want the function to deploy to

```
gcloud functions deploy gitlabRepos --runtime nodejs10 --trigger-http --project PROJECT --region REGION --env-vars-file .env-gcp
```

Again peplace REGION and PROJECT or just look the url up in your cloud functions

https://REGION-PROJECT.cloudfunctions.net/gitlabRepos?secret=7nktocljen67ihhewda2ikgjxljvjrqr
