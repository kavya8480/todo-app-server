 async function login(req,res){
console.log("Inside login controller.");
console.log("Got the request body for the api call",req.body);
console.log("Got the request header for the api call",req.headers['content-type']);
res.send(req.body);
}

module.exports = login;