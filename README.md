# To Run this code

- Step 1: Clone the repository
- Open VSCode, Open the Cloned folder from VSCode
- Step 2: Open VSCode CMD, Run this command `npm install`
- Step 3: Now Run `npm start`


If you see your CMD with these lines, then it means your server is up. Cheers!!!

```
  [app] listening on 9000
  listening on 9000
  environment is LOCAL
  DB Connected
```

If you face any issues please connect with me, i will happy to help you!


# API's Docs

## Associates Masters API's

### Create Associates Masters API
URL 
`http://localhost:9000/api/associatesMasters/create`

Payload
```
{
  associateSpecializeInIds=[],
  associateName,
  associatePhone,
  associateAddress
}

```

### GET Associates Master API
URL 
`http://localhost:9000/api/associatesMasters/:associatesMasterId`
Params

```
associatesMasterId // it is mandatory
```

### Get Associates Masters or Search By Name API 
URL 
`http://localhost:9000/api/associatesMasters`

Query Params

```
associateName // default is ''
```



## Specialization Masters API's

### Create Specialization Masters API
URL 
`http://localhost:9000/api/specializationMasters/create`

Payload
```
{
  specializationName  // it is mandatory
}

```

### Get Specialization Masters Name API 
URL 
`http://localhost:9000/api/specializationMasters`
