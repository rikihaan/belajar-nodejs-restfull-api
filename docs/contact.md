# Contact API Spec

## Create Contact API
Endpoint : POST /api/constact

Headers :
- Authorization : token

Request Body:
```json
{
    "first_name":"Asep",
    "last_name":"Riki",
    "email" : "aseprki@gmail.com",
    "phone": "08586330211"
}
```

Response Body Success :
```json
{
    "data":{
            "id":1,
            "first_name":"Asep",
            "last_name":"Riki",
            "email" : "aseprki@gmail.com",
            "phone": "08586330211"
        }
}
```

Response Body Errors :
```json
{
    "errors":"Email is not valid format"
}
```



## Update Contact API
Endpoint : PUT /api/constact

Headers :
- Authorization : token

Request Body:
```json
{
    "first_name":"Asep",
    "last_name":"Riki",
    "email" : "aseprki@gmail.com",
    "phone": "08586330211"
}
```

Response Body Success :
```json
{
    "data":{
        "id":1,
        "first_name":"Asep",
        "last_name":"Riki",
        "email" : "aseprki@gmail.com",
        "phone": "08586330211"
    }
}
```

Response Body Errors :
```json
{
    "errors":"email is not valid format"
}
```


## Get Contact API
Endpoint : POST /api/constact/:id

Headers :
- Authorization : token

Response Body Success :
```json
{
    "data":{
        "id":1,
        "first_name":"Asep",
        "last_name":"Riki",
        "email" : "aseprki@gmail.com",
        "phone": "08586330211"
    }
}
```

Response Body Errors :

```json
{
    "errors":"contact is not found"
}
```

## Search Contact API
Endpoint : GET /api/constact

Headers :
- Authorization : token

Query Params:

- name : Search by first_name or last_name, using like,optional
- email : Search by email using like, optoinal
- phone : Search by phone using like, optional
- page : number of page, default 1
- size : size per page, default 10

Response Body Success :

```json
{
    "data":[
        {
        "id":1,
        "first_name":"Asep",
        "last_name":"Riki",
        "email" : "aseprki@gmail.com",
        "phone": "08586330211"
        },
        {
        "id":2,
        "first_name":"Askum",
        "last_name":"Joko",
        "email" : "askum@gmail.com",
        "phone": "08586333211"
        }
    ],
    "paging":{
        "page":1,
        "total_page":3,
        "total_item":30

    }
}
```

Response Body Errors :
```json
{
    "errors":""
}
```

## Remove Contact API
Endpoint : DELETE /api/constact/:id

Headers :
- Authorization : token


Response Body Success :
```json
{
    "data":"OK"
}
```
Response Body Errors :
```json
{
    "errors": "contact is not found"
}
```





