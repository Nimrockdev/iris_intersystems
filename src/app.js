// first, load the Cache connector module inside node_modules
let cacheModule = require('cache');
// instantiate a Cache connector object in JavaScript
let db = new cacheModule.Cache();
console.log('Caché database object instance: ', db);

// Open the connection to the Caché database (adjust parameters for your Cache system):
let ok = db.open({
  path: 'C:\\InterSystems\\Cache\\Mgr',
  username: '_SYSTEM',
  password: 'SYS',
  namespace: 'USER'
});

console.log('Open result: ', ok);
console.log('Version: ', db.version());

let d = new Date();
// construct a JavaScript global node object to set a test global in the USER namespace
let node = {
  global: 'nodeTest',
  subscripts: [1],
  data: 'At ' + d.toUTCString() + ': global set from Node.js'
};
// set the global in the database
db.set(node);
// retrieve the global contents back from Cache
let result = db.get(node);
// show it on the console
console.log('Set global ^nodeTest(1) result: ', result);
// close the database connection
db.close();