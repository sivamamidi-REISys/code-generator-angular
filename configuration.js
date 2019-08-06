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

    }
  }
}

