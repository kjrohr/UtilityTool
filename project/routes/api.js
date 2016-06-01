// whatever requires this file (server.js) this is going to bring all of this to server.js
module.exports = function(express){
  var router = express.Router();

  router.get('/', function(req,res){
    res.json({hello: 'world'})
  });

  router.get('/status', function(req,res){
    res.json({healthy: true})
  });


  // this is how you get information from the url to look up a product or user id
  router.get('/user/:id', function(req, res){
    res.json({user:{ id: req.params.id}});
  });
  return router;
}
