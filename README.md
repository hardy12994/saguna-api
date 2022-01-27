
# Associates Masters API's

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



# Specialization Masters API's

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
