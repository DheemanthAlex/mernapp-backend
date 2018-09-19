var router = require('express').Router();
var userRouter = require('./UserRouter');

router.use(function (req, res, next) {
	console.log("URL: " + req.path);
	next();
});

router.use('/user', userRouter);

module.exports = router;