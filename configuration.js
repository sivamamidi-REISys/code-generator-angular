exports.configuration = {
  "destinationPath": "y:\\sample",
  "pipeline":{
    name: '',
    environmentName: 'jcomet'
  },
  "definitions": {
    "User": {
      "actionType": "crud",
      "pluralWord": "Users",
      "uniqueId": "userId",
      "properties": [
        {
          "name": "firstName",
          "display": "First Name",
          "type": "string",
          "required": true
        },
        {
          "name": "lastName",
          "display": "Last Name",
          "type": "string",
          "required": true
        },
        {
          "name": "email",
          "display": "Email",
          "type": "string",
          "required": true
        },
        {
          "name": "roles",
          "display": "Roles",
          "type": "string",
          "required": true
        }
      ]

    },
   
    "Team": {
      "actionType": "crud",
      "pluralWord": "Teams",
      "uniqueId": "teamId",
      "properties": [
        {
          "name": "name",
          "display": "Team Name",
          "type": "string",
          "required": true
        }
      ]

    }
  }
}

