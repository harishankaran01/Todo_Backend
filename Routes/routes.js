const express=require("express");
const router=express.Router();
const controller=require("../Controllers/requestController")
router.route("/send_item").post(controller.postItem)
router.route("/get_items").get(controller.getItems);
router.route("/delete_item").post(controller.deleteItem);
module.exports=router;