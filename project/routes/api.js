// whatever requires this file (server.js) this is going to bring all of this to server.js
module.exports = function(express){
  var router = express.Router();

  router.get('/', function(req,res){
    res.json({hello: 'world'})
  });

  router.get('/status', function(req,res){
    res.json({healthy: true})  
  });

  return router;
}
