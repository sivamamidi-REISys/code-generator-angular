exports.configuration = {
  "destinationPath": "y:\\sample",
  "pipeline":{
    name: '',
    environmentName: 'jcomet.reisystems.net',
    appName: 'agency-ui'
  },
  "definitions": {
    "TravelPlan": {
      "actionType": "crud",
      "isAuthenticated" : true,
      "pluralWord": "TravelPlans",
      "uniqueId": "planId",
      "properties": [
        {
          "name": "planId",
          "display": "Plan Id",
          "type": "string",
          "required": true,
          "isEdit": false,
          "isInList": false
        },
        {
          "name": "startDate",
          "display": "Start Date",
          "type": "string",
          "required": true,
          "isEdit": false,
          "isInList": true
        },
        {
          "name": "endDate",
          "display": "End Date",
          "type": "string",
          "required": true,
          "isEdit": false,
          "isInList": true
        },
        {
          "name": "recommendation",
          "display": "Recommendation",
          "type": "string",
          "required": true,
          "isEdit": true,
          "isInList": false
        },
        {
          "name": "status",
          "display": "Status",
          "type": "string",
          "required": true,
          "isEdit": false,
          "isInList": true
        },
        {
          "name": "approvedDestination",
          "display": "Approved Destination",
          "type": "string",
          "required": true,
          "isEdit": false,
          "isInList": true
        },
        
      ]
    }
  }
}

