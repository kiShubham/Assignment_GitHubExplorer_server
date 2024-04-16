const router = require("express").Router();

//import controller
const userController = require("../controller/user.controller");

//importmiddleware
const { validateUsername } = require("../middleware/validateUser");

router.get("/save-user/:username", validateUsername, userController.saveUser);

router.get(
  "/find-mutual-followers/:username",
  validateUsername,
  userController.findMutualFollowers
);

router.get("/search-users", userController.searchUser);

router.delete(
  "/delete-user/:username",
  validateUsername,
  userController.deleteUser
); //^^ changes availability as false ; soft_deletion

router.patch(
  "/update-user/:username",
  validateUsername,
  userController.updateUser
);

router.get("/list-users", userController.listUser);

module.exports = router;
