exports.configuration = {
  "destinationPath": "y:\\sample",
  "definitions": {
    "Agency": {
      "actionType": "crud",
      "pluralWord" : "Agencies",
      "uniqueId" : "agencyId",
      "properties": [
        {
          "name": "agencyId",
          "display": "Id",
          "type": "integer",
          "required" : true
        },
        {
          "name": "name",
          "display": "Agency Name",
          "type": "string",
          "required" : true
        },
        {
          "name": "isActive",
          "display": "isActive",
          "type": "boolean",
          "required" : false
        }
      ]
     
    }
  }
}

