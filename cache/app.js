var cachedb = require('cache');

var mydata = new cachedb.Cache();

// mydata.open({  path:"/cache20151/mgr",
// username: "_SYSTEM",
// password: "SYS",
// namespace: "USER"
// }
// [, function(error, result){}]
// );


mydata.open({  path: '/opt/cache20151/mgr',
username: "_system",
password: "SYS",
namespace: "user",
input_device: "stdin",
output_device: "stdout"}
[, function(error, result){}]
);

mydata.update([
    {   global: "Customer",
    subscripts: [1],
    data: "Jane K. White"
 }
    {   global: "Customer",
    subscripts: [1, "Address", 1],
    data: "London"
    }
    {   global: "Customer", subscripts: [1, "Address", 2],
    data: "UK"
    }
    {   global: "Customer",
    subscripts: [1, "DateOfRegistration],
    data: "1 May 2010"
    }
    ],
    "array",
    function(error, result) {
       if (error) {
          // error   (see result.ErrorMessage
          //       and result.ErrorCode)
       }
       else {
          // success
       }
    }
 );


 mydata.update(node, "array", function(error, result){});

 mydata.close();