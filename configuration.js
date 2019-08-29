exports.configuration = {
  "destinationPath": "y:\\sample",
  "pipeline":{
    name: '',
    environmentName: 'jcomet.reisystems.net',
    appName: 'agency-ui'
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
   
    "Retro": {
      "actionType": "crud",
      "pluralWord": "Retros",
      "uniqueId": "retrospectiveId",
      "properties": [
        {
          "name": "name",
          "display": "Name",
          "type": "string",
          "required": true
        },
        {
          "name": "teamId",
          "display": "Team Name",
          "type": "string",
          "required": true
        }
      ]

    }
  }
}

