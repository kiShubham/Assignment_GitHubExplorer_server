const router = require("express").Router();

//import controller
const userController = require("../controller/user.controller");

router.get("/save-user/:username", userController.saveUser); //^^

router.get("/find-mutual-followers/:username", userController.findFollowers); //^^

router.get("/search-users", userController.searchUser); //^^

router.delete("/delete-user/:username", userController.deleteUser); //^^ changes availability as false ; soft_deletion

router.patch("/update-user/:username", userController.updateUser); //^^

router.get("/list-users", userController.listUser); //^^

module.exports = router;
