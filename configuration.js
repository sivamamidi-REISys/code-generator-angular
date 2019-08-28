exports.configuration = {
  "destinationPath": "C:\\COMET\\COMET-CHALLENGE-UI_08262019\\src\\app",
  "pipeline":{
    name: '',
    environmentName: 'jcomet.reisystems.net',
    appName: 'agency-ui'
  },
  "definitions": {
    "Opportunity": {
      "actionType": "crud",
      "pluralWord": "Opportunities",
      "uniqueId": "opportunityId",
      "properties": [
        {
          "name": "opportunityName",
          "display": "Opportunity Name",
          "type": "string",
          "required": true
        },
        {
          "name": "publishedDate",
          "display": "Published Date",
          "type": "string",
          "required": true
        },
        {
          "name": "responseDate",
          "display": "Response Date",
          "type": "string",
          "required": true
        },
        {
          "name": "agencyName",
          "display": "Agency Name",
          "type": "string",
          "required": true
        },
        {
          "name": "office",
          "display": "Office",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "display": "Status",
          "type": "string",
          "required": true
        }
      ]
    }
  }
}

