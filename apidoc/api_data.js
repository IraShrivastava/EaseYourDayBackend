define({ "api": [
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/reject-request",
    "title": "api for Rejecting Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"A Request has been Rejected successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1UsersRejectRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/un-friend",
    "title": "api to Unfriend user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Cancelled Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1UsersUnFriend"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/accept-request",
    "title": "api for Accepting Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"A Friend has been added in your Friend list Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friend.js",
    "groupTitle": "friends",
    "name": "PostApiV1UsersAcceptRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/cancel-request",
    "title": "api to Cancel Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"A Request has been cancelled successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friend.js",
    "groupTitle": "friends",
    "name": "PostApiV1UsersCancelRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/send-friend-request",
    "title": "api for Sending Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Request has been sent Successful\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friend.js",
    "groupTitle": "friends",
    "name": "PostApiV1UsersSendFriendRequest"
  },
  {
    "group": "history",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/history/get-all-history",
    "title": "api for getting all history.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    {   \n        \"error\": false,\n        \"message\": \"All Item Details Found\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"_id\": \"5c2775e0f6982a6ca041ea22\",\n                \"listId\": \"t9gKa9Cf\",\n                \"historyId\": \"8vY3GW1fW\",\n                \"itemDetails\": [],\n                \"createdOn\": \"2018-12-29T13:25:52.000Z\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/history.js",
    "groupTitle": "history",
    "name": "GetApiV1HistoryGetAllHistory"
  },
  {
    "group": "history",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/history/create-history",
    "title": "api to Add history.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>Action of the history. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    {   \n        \"error\": false,\n        \"message\": \"New History Added\",\n        \"status\": 200,\n        \"data\":[\n                { listId: '9sTB6jHB',\n                historyId: 'HdNwy5gkJ',\n                itemDetails: [],\n                createdOn: 2019-01-02T07:40:10.000Z,\n                _id: 5c2c6ada3e249c383844911f,\n                __v: 0 } \n        ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/history.js",
    "groupTitle": "history",
    "name": "PostApiV1HistoryCreateHistory"
  },
  {
    "group": "history",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/history/delete-history",
    "title": "api to Delete history(Latest Object will be deleted).",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the List. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"History Deleted\",\n    \"status\": 200,\n    \"data\": [\n        {\n           \"_id\": \"5c2775e0f6982a6ca041ea22\",\n            \"listId\": \"t9gKa9Cf\",\n            \"historyId\": \"8vY3GW1fW\",\n            \"itemDetails\": [],\n            \"createdOn\": \"2018-12-29T13:25:52.000Z\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/history.js",
    "groupTitle": "history",
    "name": "PostApiV1HistoryDeleteHistory"
  },
  {
    "group": "history",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/history/update-history",
    "title": "api to update history.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the List. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"History Updated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/history.js",
    "groupTitle": "history",
    "name": "PostApiV1HistoryUpdateHistory"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/get-all-items",
    "title": "api for Getting all items of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the list. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Item Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5c2c4c60cb2d7e8a5463fdb7\",\n            \"listId\": \"5wZGUWcj\",\n            \"itemId\": \"LqtbT2TI\",\n            \"itemName\": \"H\",\n            \"done\": false,\n            \"createdOn\": \"2020-05-28T16:45:05.000Z\",\n            \"subItems\": [],\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item.js",
    "groupTitle": "items",
    "name": "GetApiV1UsersGetAllItems"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/add-item",
    "title": "api to Add item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemName",
            "description": "<p>Name of the item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the list in which item has to add. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>a unique id for the item. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"New Item Added\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"listId\": \"5wZGUWcj\",\n            \"itemId\": \"1565741\",\n            \"itemName\": \"check\",\n            \"done\": false,\n            \"createdOn\": \"2020-05-28T07:06:51.000Z\",\n            \"_id\": \"5c2c630b5d5c156bc0af7962\",\n            \"subItems\": [],\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item.js",
    "groupTitle": "items",
    "name": "PostApiV1UsersAddItem"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/add-sub-item",
    "title": "api to Add sub-item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemName",
            "description": "<p>Name of the Sub item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the Item in which sub item has to add. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemId",
            "description": "<p>a unique id for the item. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"A Subitem Added Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item.js",
    "groupTitle": "items",
    "name": "PostApiV1UsersAddSubItem"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/add-sub-item",
    "title": "api to edit sub-item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemName",
            "description": "<p>Name of the Sub item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the Item in which sub item has to add. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemId",
            "description": "<p>a unique id for the item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemDone",
            "description": "<p>to mark it done or undone. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"A Subitem Added Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item.js",
    "groupTitle": "items",
    "name": "PostApiV1UsersAddSubItem"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/add-sub-item",
    "title": "api to delete sub-item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the Item in which sub item has been added. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemId",
            "description": "<p>a id of the subitem which has to delete. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"A Subitem Added Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item.js",
    "groupTitle": "items",
    "name": "PostApiV1UsersAddSubItem"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/delete-item",
    "title": "api to Delete item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>of the Item to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the Item successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item.js",
    "groupTitle": "items",
    "name": "PostApiV1UsersDeleteItem"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/replace-item",
    "title": "api to replace sub-item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>of item in JSON Format. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"Item details Updated Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item.js",
    "groupTitle": "items",
    "name": "PostApiV1UsersReplaceItem"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/edit-item",
    "title": "api to Update item Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id of the item. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemName",
            "description": "<p>Name of the item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "done",
            "description": "<p>item status either true or false. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Item details Updated Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item.js",
    "groupTitle": "items",
    "name": "PutApiV1UsersEditItem"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/get-all-list:userId",
    "title": "api for Getting all Lists of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All List Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5c22301ffbbd3b3b543a9874\",\n            \"creatorId\": \"ddHvMnAIC\",\n            \"listId\": \"e-Y5b-cQd\",\n            \"listName\": \"sample list 1\",\n            \"creatorName\": \"Bidisha Chkraborty\",\n            \"modifierId\": \"kqdFThCqv\",\n            \"modifierName\": \"Ira Shrivastava\",\n            \"privacy\": true,\n            \"createdOn\": \"2020-05-27T13:26:55.000Z\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/list.js",
    "groupTitle": "lists",
    "name": "GetApiV1UsersGetAllListUserid"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/create-list",
    "title": "api to Add List.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>Name of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user creating ToDo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "creatorName",
            "description": "<p>User Name of the user creating ToDo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "modifierId",
            "description": "<p>User Id of the user modifying ToDo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "modifierName",
            "description": "<p>User Name of the user modifying ToDo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "privacy",
            "description": "<p>Mode of the ToDo either true or false. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>an unique id for list in ToDo. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"List Created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5bb87ee3625e5006d41f786d\",\n        \"createdOn\": \"2020-05-27T09:22:43.000Z\",\n        \"privacy\": true,\n        \"modifierName\": \"Aryan Khan\",\n        \"modifierId\": \"SkBEHfS97\",\n        \"creatorName\": \"Ira Shrivastava\",\n        \"listCreatorId\": \"kqdFThCqv\",\n        \"listName\": \"New\",\n        \"listId\": \"SknkJ-UcX\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/list.js",
    "groupTitle": "lists",
    "name": "PostApiV1UsersCreateList"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/delete-list",
    "title": "api to Delete List.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId of the List to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the List successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/list.js",
    "groupTitle": "lists",
    "name": "PostApiV1UsersDeleteList"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/edit-list",
    "title": "api to Update List Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the List. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>Name of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "modifierId",
            "description": "<p>User Id of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "modifierName",
            "description": "<p>User Name of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"List details Edited\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/list.js",
    "groupTitle": "lists",
    "name": "PutApiV1UsersEditList"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/get-all-filter-users",
    "title": "api for Getting selected users just mention the userid split by comma.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userIdArray.",
            "description": "<p>(query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5c000cb369f0bd43881442bd\",\n            \"userId\": \"kqdFThCqv\",\n            \"firstName\": \"Ira\",\n            \"lastName\": \"Shrivastava\",\n            \"password\": \"$2b$10$RptFPRvbP2gDizPVSH6MsOLMmpU2IEyAOuYNpSiOuZoYsvtqEWTya\",\n            \"email\": \"irXXXXXXXXXXava0211@gmail.com\",\n            \"mobileNumber\": \"91 89XXXXXXX5\",\n            \"country\": \"India\",\n            \"verified\": true,\n            \"createdOn\": \"2020-05-27T15:58:43.000Z\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friend.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersGetAllFilterUsers"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/get-all-friends",
    "title": "api for Getting all friends details like sent request, received request and friend list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n        \"error\": false,\n        \"message\": \"All Friends Details Found\",\n        \"status\": 200,\n        \"data\": [\n        {\n            \"_id\": \"5c165a80d380de1098076b20\",\n            \"userId\": \"kqdFThCqv\",\n            \"requestSent\": [],\n            \"friends\": [\n            {\n                \"friendId\": \"JuJ8J1CuL\",\n                \"friendName\": \"Aryan Khan\",\n                \"_id\": \"5c2092e0cbd8c9404024fd21\"\n            },\n            {\n                \"friendId\": \"ddHvMnAIC\",\n                \"friendName\": \"Suhana Khan\",\n                \"_id\": \"5c2c4c8acb2d7e8a5463fdbb\"\n            }\n        ],\n        \"requestReceived\": [],\n        \"__v\": 0\n    }\n]\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friend.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersGetAllFriends"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/getAllUsers",
    "title": "api for Getting all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2020-05-27T13:42:58.000Z\",\n            \"verified\": true,\n            \"email\": \"irXXXXXXXXXXava0211@gmail.com\",\n            \"mobileNumber\": \"91 89XXXXXXX5\",\n            \"countryName\": \"India\",\n            \"lastName\": \"Shrivastava\",\n            \"firstName\": \"Ira\",\n            \"userId\": \"kqdFThCqv\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersGetallusers"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/singleUser/:userId",
    "title": "api for getting user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2020-05-27T13:42:58.000Z\",\n        \"verified\": true,\n        \"email\": \"irXXXXXXXXXXava0211@gmail.com\",\n        \"mobileNumber\": \"91 89XXXXXXX5\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Shrivastava\",\n        \"firstName\": \"Ira\",\n        \"userId\": \"kqdFThCqv\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersSingleuserUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/deleteUser",
    "title": "api to Delete User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2020-05-27T13:42:58.000Z\",\n        \"verified\": true,\n        \"email\": \"irXXXXXXXXXXava0211@gmail.com\",\n        \"password\": \"$5a$18$XvGxf9JX76JvvIeqwd2CoOdxtCraX23nA5ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 89XXXXXXX5\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Shrivastava\",\n        \"firstName\": \"Ira\",\n        \"userId\": \"kqdFThCqv\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersDeleteuser"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgetPassword",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>email address. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "verified",
            "description": "<p>as true . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset link sent successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersForgetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkJKc0NubExxWCIsImlhdCI6MTUzODgxNzIzNDUzNCwiZXhwIjoxNTM4OTAzNjM0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJsZXRzTWVldEFwcCIsImRhdGEiOnsiZnJpZW5kUmVxdWVzdFNlbnQiOltdLCJmcmllbmRSZXF1ZXN0UmVjaWV2ZWQiOltdLCJmcmllbmRzIjpbXSwiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpxZDNScFpDSTZJa0o1ZFdaTFRWTTFOeUlzSW1saGRDSTZNVFV6T0RjMU9Ea3lOemszTWl3aVpYaHdJam94TlRNNE9EUTFNekkzTENKemRXSWlPaUpoZFhSb1ZHOXJaVzRpTENKcGMzTWlPaUpzWlhSelRXVmxkRUZ3Y0NJc0ltUmhkR0VpT25zaVgybGtJam9pTldKaU56azFNbVJtWWpVNFpXRXhNVGM0TWpBMU9UQTBJaXdpWDE5Mklqb3dMQ0pqY21WaGRHVmtUMjRpT2lJeU1ERTRMVEV3TFRBMVZERTJPalExT2pNekxqQXdNRm9pTENKbGJXRnBiRlpsY21sbWFXVmtJam9pV1dWeklpd2lkbUZzYVdSaGRHbHZibFJ2YTJWdUlqb2lJaXdpWlcxaGFXd2lPaUp6YUdGb2NuVnJhSE5oZVhsbFpDNTBaV05vUUdkdFlXbHNMbU52YlNJc0luQmhjM04zYjNKa0lqb2lKREpoSkRFd0pGWXpZbXRLVjBKbFZHOXphelYwTlM0d2VreEVaQzVJZUhoaVMzY3djSGxTUTBkNE5rVTFjMlJpTDBZNWVXdEZMekJGVmtwbElpd2ljM1JoZEhWeklqb2liMlptYkdsdVpTSXNJbWx6UVdSdGFXNGlPaUoxYm1SbFptbHVaV1FpTENKdGIySnBiR1ZPZFcxaVpYSWlPaUk1TVNBM09EUXdPVFl5T0RnM0lpd2lZMjkxYm5SeWVVNWhiV1VpT2lKSlRpSXNJblZ6WlhKT1lXMWxJam9pZFc1a1pXWnBibVZrSWl3aWJHRnpkRTVoYldVaU9pSlRZWGw1WldRaUxDSm1hWEp6ZEU1aGJXVWlPaUpUYUdGb2NuVnJhQ0lzSW5WelpYSkpaQ0k2SWxOclFrVklabE01TnlKOWZRLm1ocWs0Y2JzX1gyX2dieWtvUExydlJTU2drOHF4elRLLVBtU2V4ZGZ4V3ciLCJlbWFpbCI6InNoYWhydWtoc2F5eWVkLnRlY2hAZ21haWwuY29tIiwic3RhdHVzIjoib2ZmbGluZSIsImlzQWRtaW4iOiJ1bmRlZmluZWQiLCJtb2JpbGVOdW1iZXIiOiI5MSA3ODQwOTYyODg3IiwiY291bnRyeU5hbWUiOiJJTiIsInVzZXJOYW1lIjoidW5kZWZpbmVkIiwibGFzdE5hbWUiOiJTYXl5ZWQiLCJmaXJzdE5hbWUiOiJTaGFocnVraCIsInVzZXJJZCI6IlNrQkVIZlM5NyJ9fQ.-du1nE9FDeCDVf7fA7JjGVIPcYY7hb9TxvGLH6fYxd0\",\n        \"userDetails\": {\n            \"verified\": true,\n            \"email\": \"irXXXXXXXXXXava0211@gmail.com\",\n            \"mobileNumber\": \"91 89XXXXXXX5\",\n            \"countryName\": \"IN\",\n            \"lastName\": \"Shrivastava\",\n            \"firstName\": \"Ira\",\n            \"userId\": \"kqdFThCqv\",\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api to logout from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>Id. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "New",
            "description": "<p>Password . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password has been changed successfully!!\",\n    \"status\": 200,\n    \"data\": \"None\"\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for Registering User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Created\",\n\"status\": 200,\n\"data\": [\n    {\n        \"createdOn\": \"2020-05-27T13:42:58.000Z\",\n        \"emailVerified\": \"Yes\",\n        \"validationToken\": \"Null\",\n        \"email\": \"shrivasXXXXXXXXXan@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 89XXXXXXX5\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Shrivastava\",\n        \"firstName\": \"Ishan\",\n        \"userId\": \"kqdFThCqv\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/verifyEmail",
    "title": "api for Verifying User Email Id.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User email verified\",\n    \"status\": 200,\n    \"data\": \"None\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersVerifyemail"
  }
] });
