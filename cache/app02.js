// Creating two instances of the Caché class

var cachedb = require('cache');
var user = new cachedb.Cache();
var samples = new cachedb.Cache();

user.open({ ip_address: "127.0.0.1",
            tcp_port: 1972,
            username: "_SYSTEM",
            password: "SYS",
            namespace: "USER",
         }
);

samples.open({ ip_address: "127.0.0.1",
               tcp_port: 1972,
               username: "_SYSTEM",
               password: "SYS",
               namespace: "SAMPLES",
            }
);

console.log("'user' instance in namespace: " + user.get_namespace());
console.log("'samples' instance in namespace: " + samples.get_namespace());

user.close();
samples.close();
