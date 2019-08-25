exports.configuration = {
  "destinationPath": "y:\\sample",
  "definitions": {
    "Announcement": {
      "actionType": "crud",
      "pluralWord": "Announcements",
      "uniqueId": "announcementId",
      "properties": [
        {
          "name": "announcementId",
          "display": "Id",
          "type": "integer",
          "required": true
        },
        {
          "name": "title",
          "display": "Announcement Title",
          "type": "string",
          "required": true
        },
        {
          "name": "description",
          "display": "Description",
          "type": "string",
          "required": true
        },
        {
          "name": "isActive",
          "display": "isActive",
          "type": "boolean",
          "required": false
        }
      ]

    },
    "Agency": {
      "actionType": "crud",
      "pluralWord": "Agencies",
      "uniqueId": "agencyId",
      "properties": [
        {
          "name": "title",
          "display": "Agency Title",
          "type": "string",
          "required": true
        },
        {
          "name": "description",
          "display": "Description",
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
        },
        {
          "name": "description",
          "display": "Description",
          "type": "string",
          "required": true
        },
        {
          "name": "comments",
          "display": "Comments",
          "type": "string",
          "required": true
        }
        
      ]

    }
  }
}

