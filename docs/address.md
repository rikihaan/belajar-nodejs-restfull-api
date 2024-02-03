# Address API Spec

## Create Address API
Endpoint : POST /api/contacts/:contactId/address

Headers: 
- Authorization : token

Request Body :
```json
{
    "street":"jalan apa",
    "city": "kota apa",
    "province" : "provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "kode pos"
}
```

Response Body Success :

```json
{
    "data" : {
        "id":1,
        "street":"jalan apa",
        "city": "kota apa",
        "province" : "provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "kode pos"
    }
}
```

Response Body Error :
```json
{
    "errors":"country is required"
}
```

## Update Address API
Endpoint : PUT /api/contacts/:contactId/address/:addressId

Headers: 
- Authorization : token

Request Body :
```json
{
    "street":"jalan apa",
    "city": "kota apa",
    "province" : "provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "kode pos"
}
```

Response Body Success :
```json
{
    "data" :{
        "id" : 1,
        "street":"jalan apa",
        "city": "kota apa",
        "province" : "provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "kode pos"
    }
}
```

Response Body Error :
```json
{
    "errors" :"country id required"
}
```
## Get Address API
Endpoint : GET /api/contacts/:contactId/address/:addressId

Headers: 
- Authorization : token


Response Body Success :
```json
{
    "data" :{
        "id" : 1,
        "street":"jalan apa",
        "city": "kota apa",
        "province" : "provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "kode pos"
    }
}
```

Response Body Error :
```json
{
    "errors" : "contact is not found"
}
```

## List Addresses API
Endpoint : GET /api/contacts/:contactId/address

Headers: 
- Authorization : token

Response Body Success :
```json
{
    "data":[
        {
        "id" : 1,
        "street":"jalan apa",
        "city": "kota apa",
        "province" : "provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "kode pos"
        },
        {
        "id" : 2,
        "street":"jalan apa",
        "city": "kota apa",
        "province" : "provinsi apa",
        "country" : "Negara apa",
        "postal_code" : "kode pos"
        }
    ]
}
```

Response Body Error :
```json
{
    "errors" : "contact is not found"
}
```

## Remove Address API
Endpoint : DELETE /api/contacts/:contactId/address/:addressId

Headers: 
- Authorization : token


Response Body Success :
```json
{
    "data" : "OK"
}
```
Response Body Error :
```json
{
    "errors": "address is not found"
}
```


