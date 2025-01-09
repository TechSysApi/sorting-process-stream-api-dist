var variables={
  "name": "@ch-post-logistics/sorting-process-stream-api",
  "version": "1.16.0-feature-PZS-9194-add-transfer-further-processing.1",
  "description": "Sorting Process Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix",
    "prepublishOnly": "npm test"
  },
  "author": "sort.software.solutions@post.ch",
  "license": "Apache-2.0",
  "dependencies": {
    "@ch-post-logistics/sorting-process-assignment-stream-api": "1.11.0",
    "@ch-post-logistics/sorting-process-submission-stream-api": "1.4.0",
    "@ch-post-logistics/sorting-process-discharge-stream-api": "1.4.0",
    "@ch-post-logistics/sorting-process-coding-stream-api": "5.11.0"
  },
  "devDependencies": {
    "apikana": "0.9.34",
    "apikana-defaults": "0.0.96",
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.8.8",
    "typescript": "^4.9.5"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "sort.software.solutions@post.ch",
    "namespace": "logistics.sorting.process",
    "shortName": "sorting-process",
    "projectName": "sorting-process-stream-api",
    "title": "Sorting Process Stream API",
    "plugins": [
      "maven",
      "dotnet",
      "readme"
    ],
    "javaPackage": "ch.post.logistics.sorting.process.v1",
    "mavenGroupId": "ch.post.logistics.sorting",
    "dotnetNamespace": "Ch.Post.Logistics.Sorting.Process.V1",
    "dotnetPackageId": "Ch.Post.Logistics.Sorting.Process.StreamApi",
    "mqs": "Kafka",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}