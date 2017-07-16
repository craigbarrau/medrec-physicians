# MedRec Physicians

This is an example NodeJS microservice. 
The RESTful API is defined using OpenAPI/Swagger specification.

The automated build, test and deploy steps are performed using Wercker.

[![wercker status](https://app.wercker.com/status/2689b7a8a0209ac46624e6748a172ab5/s/master "wercker status")](https://app.wercker.com/project/byKey/2689b7a8a0209ac46624e6748a172ab5)

## Build, Run and Test natively

```
npm install
node app.js
curl http://localhost:10010/physicians
```

## Build, Run and Test with Docker

```
docker-compose up -d
curl http://localhost:10010/physicians
```