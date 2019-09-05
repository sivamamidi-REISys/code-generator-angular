exports.configuration = {
  "destinationPath": "y:\\sample",
  "pipeline":{
    name: '',
    environmentName: 'jcomet.reisystems.net',
    appName: 'agency-ui'
  },
  "definitions": {
    "Announcement": {
      "actionType": "crud",
      "isAuthenticated" : true,
      "pluralWord": "Announcements",
      "uniqueId": "announcementId",
      "properties": [
        {
          "name": "announcementId",
          "display": "id",
          "type": "string",
          "required": true,
          "isEdit": false,
          "isInList": false
        },
        {
          "name": "announcementName",
          "display": "Announcement Name",
          "type": "string",
          "required": true,
          "isEdit": true,
          "isInList": true
        },
        {
          "name": "publishedDate",
          "display": "Published Date",
          "type": "string",
          "required": true,
          "isEdit": true,
          "isInList": true
        },
        {
          "name": "responseDate",
          "display": "Response Date",
          "type": "string",
          "required": true,
          "isEdit": true,
          "isInList": true
        },
        {
          "name": "agencyName",
          "display": "Agency Name",
          "type": "string",
          "required": true,
          "isEdit": false,
          "isInList": true
        },
        {
          "name": "office",
          "display": "Office",
          "type": "string",
          "required": true,
          "isEdit": false,
          "isInList": true
        },
        {
          "name": "status",
          "display": "Status",
          "type": "string",
          "required": true,
          "isEdit": false,
          "isInList": false
        }
      ]
    }
  }
}

