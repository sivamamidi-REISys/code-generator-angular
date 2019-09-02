exports.configuration = {
  "destinationPath": "y:\\sample",
  "pipeline":{
    name: '',
    environmentName: 'jcomet.reisystems.net',
    appName: 'agency-ui'
  },
  "definitions": {
    "Entity": {
      "actionType": "crud",
      "pluralWord": "entities",
      "uniqueId": "entityId",
      "properties": [
        {
          "name": "name",
          "display": "Name",
          "type": "string",
          "required": true
        },
        {
          "name": "excludedinSamGov",
          "display": "Excluded in Sam Gov",
          "type": "string",
          "required": true
        },
        {
          "name": "recommended",
          "display": "Recommended",
          "type": "string",
          "required": true
        },
        {
          "name": "flagged",
          "display": "Flagged",
          "type": "string",
          "required": true
        },
        {
          "name": "keyFindings",
          "display": "key Findings",
          "type": "string",
          "required": true
        },
        {
          "name": "reviewJustification",
          "display": "Review Justification",
          "type": "string",
          "required": true
        }
      ]

    }
  }
}

