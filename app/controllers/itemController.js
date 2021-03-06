const mongoose = require('mongoose');
const shortId = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib');
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib');

const ItemModel = mongoose.model('NewItem');
const ListModel = mongoose.model('ListCreate');

/* Get all items */
let getAllItem = async (req, res) =>{
    const result = await ItemModel.find({listId : req.query.listId}).select().lean().exec()
    try {
        if (check.isEmpty(result)) {
            logger.captureInfo('No List Found', 'Item Controller: getAllItem')
            let apiResponse = response.generate(true, 'No List Found', 404, null)
            res.send(apiResponse)
        } else {

            let apiResponse = response.generate(false, 'All Item Details Found', 200, result)
            res.send(apiResponse)
        }
    } catch (err) {
        logger.captureError(err.message, 'Item Controller: getAllItem', 10)
        let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
        res.send(apiResponse)
    }
}/* end Get all items*/

/* add items */
let addItem = async ( req, res) =>{
    
    const result = await ListModel.find({'listId' : req.query.listId || req.params.listId  || req.body.listId}).select().lean().exec()
    try{
        console.log("RESULT  ");
        console.log(result)
        if(check.isEmpty(result)) {
            logger.captureInfo('No List Found', 'Item Controller: getAllItem')
            let apiResponse = response.generate(true, 'No List Found', 404, null)
            res.send(apiResponse)
        }
        else {
            let newItem = new ItemModel({
				listId : req.body.listId,
				itemName : req.body.itemName,
				itemId : req.body.itemId,
				createdOn : time.now() 
            })
            let item = await newItem.save()
            try{
                let apiResponse = response.generate(false, "New Item Added", 200, [item]); 
                res.send(apiResponse)
            }catch (err) {
                console.log("INSIDE INNER CATCH")
                logger.captureError(err.message, 'Item Controller:addItem', 10)
                let apiResponse = response.generate(true, "Failed to add new Item", 500, null);
                res.send(apiResponse)
            }
        }

    }catch (err){
        logger.captureError(err.message, 'Item Controller: addItem', 10)
        let apiResponse = response.generate(true, 'Failed To Add New Item', 500, null)
        res.send(apiResponse)
    }
}/* end add items */

/* delete items */
let deleteItem = async (req, res) => {

    const result = await ItemModel.findOneAndDelete({ itemId : req.body.itemId || req.params.itemId || req.query.itemId }).exec()
     
     try{
         if (check.isEmpty(result)) {
             logger.captureInfo('No Item Found', 'List Controller: deleteItem')
             let apiResponse = response.generate(true, 'No Item Found', 404, null)
             res.send(apiResponse)
         } else {
             let apiResponse = response.generate(false, 'Deleted the Item successfully', 200, result)
             console.log("RESPONSE  "+apiResponse.data)
             res.send(apiResponse)
         }
     } catch(err){
         console.log(err)
             logger.captureError(err.message, 'Item Controller: deleteItem', 10)
             let apiResponse = response.generate(true, 'Failed To delete Item', 500, null)
             res.send(apiResponse)
     }
}/* end delete items */

/* edit item */
let updateItem = async (req, res) => {
    const {itemName, done} = req.body; 
    let options = {
        itemName,
        done
    }
 //   let options = req.body;
    const result = await ItemModel.update({ itemId: req.body.itemId || req.params.itemId || req.query.itemId}, options).exec()
     try{
        if (check.isEmpty(result)) {
            logger.captureInfo('No Item Found', 'Item Controller: updateItem')
            let apiResponse = response.generate(true, 'No item Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Item details Updated Successfully', 200, result)
            res.send(apiResponse)
        }
    } catch(err){
        console.log(err)
            logger.captureError(err.message, 'Item Controller:updateItem', 10)
            let apiResponse = response.generate(true, 'Failed To edit Item details', 500, null)
            res.send(apiResponse)
    }
}/* end edit item */

/* replace item */
let replaceItem = async (req, res)=>{
    let data = req.body.data;
    let newData = JSON.parse(data)
    let options = {
        listId : newData.listId,
        itemId : newData.itemId,
        itemName: newData.itemName,
        done: newData.done,
        subItems: newData.subItems,
        createdOn: newData.createdOn
    }
    const result = await ItemModel.replaceOne({ itemId: newData.itemId }, options).exec()
    console.log(result)
     try{
        if (check.isEmpty(result)) {
            logger.captureInfo('No Item Found', 'Item Controller: updateItem')
            let apiResponse = response.generate(true, 'No item Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Item details Updated Successfully', 200, result)
            res.send(apiResponse)
        }
    } catch(err){
        console.log(err)
            logger.captureError(err.message, 'Item Controller:updateItem', 10)
            let apiResponse = response.generate(true, 'Failed To edit Item details', 500, null)
            res.send(apiResponse)
    }
}/* end replace item */

/* add sub item */
let addSubItems = async (req, res) =>{
    let options = {
        $push: {
            subItems: {
                $each: [{
                    subItemId: req.body.subItemId,
                    subItemName: req.body.subItemName,
                }]
            }
        }
    }
    const result = await ItemModel.updateOne({ itemId: req.body.itemId }, options).exec()
     try{
        if (check.isEmpty(result)) {
            logger.captureInfo('No Item Found', 'Item Controller: addSubItems')
            let apiResponse = response.generate(true, 'No Item Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'A Subitem Added Successfully', 200, result)
            res.send(apiResponse)
        }
    } catch(err){
        console.log(err)
            logger.captureError(err.message, 'Item Controller:addSubItems', 10)
            let apiResponse = response.generate(true, 'Failed To Add Item details', 500, null)
            res.send(apiResponse)
    }
}/* end add sub item */

/* delete sub item */
let deleteSubItem = async (req, res) => {
    let options = {
        $pull: {
            subItems: {
                subItemId: req.body.subItemId
            }
        }
    }
    const result = await ItemModel.update({ itemId : req.body.itemId }, options).exec()
     
     try{
         if (check.isEmpty(result)) {
             logger.captureInfo('No Item Found', 'List Controller: deletesubItem')
             let apiResponse = response.generate(true, 'No Item Found', 404, null)
             res.send(apiResponse)
         } else {
             let apiResponse = response.generate(false, 'Deleted the Item successfully', 200, result)
             res.send(apiResponse)
         }
     } catch(err){
         console.log(err)
             logger.captureError(err.message, 'Item Controller: deleteSubItem', 10)
             let apiResponse = response.generate(true, 'Failed To delete Item', 500, null)
             res.send(apiResponse)
     }

}/* end delete sub item */

/* edit sub item */
let editSubItem = async (req, res) => {
    let options = {
        $set: {
            "subItems.$.subItemName": req.body.subItemName,
            "subItems.$.subItemDone": req.body.subItemDone,
        }
    }
    const result = await ItemModel.update({ 'itemId': req.body.itemId, 'subItems.subItemId': req.body.subItemId }, options).exec()
     try{
         if (check.isEmpty(result)) {
             logger.captureInfo('No Item Found', 'List Controller: editSubitem')
             let apiResponse = response.generate(true, 'No Item Found', 404, null)
             res.send(apiResponse)
         } else {
             let apiResponse = response.generate(false, 'Updated the Item successfully', 200, result)
             res.send(apiResponse)
         }
     } catch(err){
         console.log(err)
             logger.captureError(err.message, 'Item Controller: editSubitem', 10)
             let apiResponse = response.generate(true, 'Failed To delete Item', 500, null)
             res.send(apiResponse)
     }
}/* end edit sub item */

module.exports = {
    getAllItem : getAllItem,
    addItem : addItem,
    updateItem : updateItem,
    deleteItem : deleteItem,
    addSubItems : addSubItems,
    editSubItem : editSubItem,
    deleteSubItem : deleteSubItem, 
    replaceItem: replaceItem
}