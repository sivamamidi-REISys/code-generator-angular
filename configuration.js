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
     
    },
       "Announcement": {
      "actionType": "crud",
      "pluralWord" : "Announcements",
      "uniqueId" : "announcementId",
      "properties": [
        {
          "name": "announcementId",
          "display": "Id",
          "type": "integer",
          "required" : true
        },
        {
          "name": "title",
          "display": "Announcement Title",
          "type": "string",
          "required" : true
        },
        {
          "name": "description",
          "display": "Description",
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

