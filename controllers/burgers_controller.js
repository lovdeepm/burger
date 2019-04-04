var express = require("express");
var router = express.Router();
// Import the model to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res)
 {
    res.render("/index");
    });
// Index Page
router.get("/index", function(req, res)
    { burger.selectAll(function(data) {
        var hbsObject = {burgers: data};
        console.log(hbsObject)
       res.render("/index", hbsObject);
    });
    });
// create a burger
router.post("/burger/create", function(req, res) 
{
    burger.insertOne(
      req.body.burger_name, function() {
      // Send back the ID of the new quote
      res.redirect('/index');
    });
  });
  //Eat a Burger
  router.put("/burgers/devour/:id", function(req, res) 
  {
    burger.updateOne({
      devoured: req.body.devoured
    }, function() {
      
        res.redirect('/index');
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;