/*
 * @Author: Suraj Roy
 * @Date:   29 March 2017
 * @Source : https://jsonworld.com/
 * @Topic : memcached implementation in nodejs app...
 */        


var express    = require("express");
var Memcached = require('memcached');
var app = express();
 
// make connection with memcached server
var memcached = new Memcached();
 
memcached.connect( 'localhost:11211', function( err, conn ){
  if( err ) {
     console.log( conn.server,'error while memcached connection!!');
  }
});

// Object to store in the memcached.....
var user = {
              'userId':'iuytredcvb12345sdfgh',
               'userName':'testUser',
               'emailId':'demo.jsonworld@gmail.com',
               'phone' : 8287374553,
               'availableFor' : '2 hours',
               'createdOn':1543122402
            }

// saving information to user key.
memcached.set('user', user, 10000, function (err) { 
  if(err) throw new err;
});
 
 
// method to get saved data....
memcached.get('user', function (err, data) {
  console.log(data);
});
 
// method to delete the saved data
/*memcached.del('profile', function (err) { 
  if(err) throw new err;
 });*/
 

app.listen(3000,function(){
  console.log("Server running on port 3000");
});
