# User API Spec

## Regiter User API
Endpoint: POST /api/users

Request Body :
```json
{
    "username":"asep",
    "password":"rahasiah",
    "name":"Asep Riki"
}
```
Response body success :
```json
{
    "data":{
        "username":"asep",
        "name":"Asep Riki"
    }
}
```

Response body Error
```json
{
    "errors":"username already registered",
    
}
```

## Login User API
Endpoint: POST /api/users/login

Request body :
```json
{
    "username":"asep",
    "password":"rahasiah"
}
```
Response Body Success :
```json
{
    "data":{
        "token":"uniq token"
    }
}
```

Respose Body Error:
```json
{
    "errors":"username or password wrog"
}
```


## Update User API
Endpoint: PATH /api/users/current

Headers :
Authorizatio : token

Request Body:
```json
{
    "name":"Asep Rik Lagi" ,// optional
    "password":"new password" // Optional
}
```
Response Body Success:
```json
{
    "data":{
        "username":"asep",
        "name":"Asep Riki Lagi"
    }
}
```

Response Body Error :
```json
{
    "errora":"name lenght max 100"
}
```

## Get User API
Endpoint: GET api/users/current

Headers :
Authorizatio : token

Response Body Success :

```JSON
{
    "data":{
        "username": "asep",
        "name":"Asep Riki"
    }
}
```

Response Body Errors

```JSON
{

    "Errors" : "Unauthorization"
}
```

## Logout User API

Endpoint :DELETE /api/users/logout
Headers :
Authorizatio : token

Response Body Success :

```json
{
    "data":"OK"
}
```

Response Body Errors

```json
{
    "errors":"Unauthorize"
}
```


