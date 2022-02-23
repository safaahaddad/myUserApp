const { verifySignUp, authJwt } = require("../middlewares");
const userController = require("../controllers/user.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup", verifySignUp.checkDuplicateUsernameOrEmail,userController.signup);
  app.post("/api/auth/signin", userController.signin);
  app.post("/api/auth/:id/updateuser", authJwt.verifyToken,userController.updateUser);

};