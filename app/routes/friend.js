const express = require('express');
const router = express.Router();
const friendController = require("./../controllers/friendController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth');

let baseUrl = `${appConfig.apiVersion}/users`;

module.exports.setRouter = (app) =>{

    // params: userId
    app.get(`${baseUrl}/get-all-friends`, auth.isAuthorized, friendController.getAllFriends);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/get-all-friends api for Getting all friends details like sent request, received request and friend list.
     *
     * @apiParam {string} authToken of the user. (query/body/header params) (required)
     * @apiParam {string} userId of the user. (query params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All Friends Details Found",
            "status": 200,
            "data": [
            {
                "_id": "5c165a80d380de1098076b20",
                "userId": "kqdFThCqv",
                "requestSent": [],
                "friends": [
                {
                    "friendId": "JuJ8J1CuL",
                    "friendName": "Aryan Khan",
                    "_id": "5c2092e0cbd8c9404024fd21"
                },
                {
                    "friendId": "ddHvMnAIC",
                    "friendName": "Suhana Khan",
                    "_id": "5c2c4c8acb2d7e8a5463fdbb"
                }
            ],
            "requestReceived": [],
            "__v": 0
        }
    ]
        }
    */

    //params: all userId separted by comma which need to excluded from lsit
    app.get(`${baseUrl}/get-all-filter-users`, auth.isAuthorized, friendController.getAllFilterUsers);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/get-all-filter-users api for Getting selected users just mention the userid split by comma.
     *
     * @apiParam {string} authToken of the user. (query/body/header params) (required)
     * @apiParam {string} userIdArray. (query params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All User Details Found",
            "status": 200,
            "data": [
                {
                    "_id": "5c000cb369f0bd43881442bd",
                    "userId": "kqdFThCqv",
                    "firstName": "Ira",
                    "lastName": "Shrivastava",
                    "password": "$2b$10$RptFPRvbP2gDizPVSH6MsOLMmpU2IEyAOuYNpSiOuZoYsvtqEWTya",
                    "email": "irXXXXXXXXXXava0211@gmail.com",
                    "mobileNumber": "91 89XXXXXXX5",
                    "country": "India",
                    "verified": true,
                    "createdOn": "2020-05-27T15:58:43.000Z",
                    "__v": 0
                }
            ]
        }
    */

    app.post(`${baseUrl}/sent-friend-request`, auth.isAuthorized, friendController.sendRequestFunction);
    /**
     * @apiGroup friends
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/send-friend-request api for Sending Friend Request.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiParam {string} senderId Id of the Sender. (body params) (required)
     * @apiParam {string} senderName Name of the Sender. (body params) (required)
     * @apiParam {string} recieverId Id of the Reciever. (body params) (required)
     * @apiParam {string} recieverName Name of the Reciever. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Request has been sent Successful",
            "status": 200,
            "data": null
        }
    */

    app.post(`${baseUrl}/cancel-request`, auth.isAuthorized, friendController.cancelRequest );
    /**
  * @apiGroup friends
  * @apiVersion  1.0.0
  * @api {post} /api/v1/users/cancel-request api to Cancel Friend Request.
  *
  * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
  * @apiParam {string} senderId Id of the Sender(Login User). (body params) (required)
  * @apiParam {string} senderName Name of the Sender(Login User). (body params) (required)
  * @apiParam {string} recieverId Id of the Reciever. (body params) (required)
  * @apiParam {string} recieverName Name of the Reciever. (body params) (required)
  * @apiSuccess {object} myResponse shows error status, message, http status code, result.
  * 
  * @apiSuccessExample {object} Success-Response:
     {
         "error": false,
         "message": "A Request has been cancelled successfully",
         "status": 200,
         "data": null
     }
 */


    app.post(`${baseUrl}/reject-request`, auth.isAuthorized, friendController.rejectRequest );
    /**
   * @apiGroup friends
   * @apiVersion  1.0.0
   * @api {get} /api/v1/users/reject-request api for Rejecting Friend Request.
   *
   * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
   * @apiParam {string} senderId Id of the Sender. (body params) (required)
   * @apiParam {string} senderName Name of the Sender. (body params) (required)
   * @apiParam {string} recieverId Id of the Reciever(Login User). (body params) (required)
   * @apiParam {string} recieverName Name of the Reciever(Login User). (body params) (required)
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
      {
          "error": false,
          "message": "A Request has been Rejected successfully",
          "status": 200,
          "data": null
      }
  */

    app.post(`${baseUrl}/accept-request`, auth.isAuthorized, friendController.acceptRequestFunction );
    /**
    * @apiGroup friends
    * @apiVersion  1.0.0
    * @api {post} /api/v1/users/accept-request api for Accepting Friend Request.
    *
    * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
    * @apiParam {string} senderId Id of the Sender. (body params) (required)
    * @apiParam {string} senderName Name of the Sender. (body params) (required)
    * @apiParam {string} recieverId Id of the Reciever(Login User). (body params) (required)
    * @apiParam {string} recieverName Name of the Reciever(Login User). (body params) (required)
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
       {
           "error": false,
           "message": "A Friend has been added in your Friend list Successfully",
           "status": 200,
           "data": null
       }
   */

    app.post(`${baseUrl}/un-friend`, auth.isAuthorized, friendController.unFriend );
    /**
 * @apiGroup friends
 * @apiVersion  1.0.0
 * @api {get} /api/v1/users/un-friend api to Unfriend user.
 *
 * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
 * @apiParam {string} senderId Id of the Sender. (body params) (required)
 * @apiParam {string} senderName Name of the Sender. (body params) (required)
 * @apiParam {string} recieverId Id of the Reciever(Login User). (body params) (required)
 * @apiParam {string} recieverName Name of the Reciever(Login User). (body params) (required)
 * @apiSuccess {object} myResponse shows error status, message, http status code, result.
 * 
 * @apiSuccessExample {object} Success-Response:
    {
        "error": false,
        "message": "Cancelled Friend Request",
        "status": 200,
        "data": null
    }
*/


}