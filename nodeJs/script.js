const fs = require("fs");
   

fs.readFile("data.json", function(err, data) {
      
    if (err) throw err;
   
    const users = JSON.parse(data);
      
    console.log(users); 
});


  

const users = require("./data.json");

let user = {
    id:902129,
    name:"DummyUSer",
    location:"DummyLocation",
    age:35,
    gender:"M",
    interest:"DUmmyInterest"
};

users.data.push(user);
   
fs.writeFile("users.json", JSON.stringify(users), err => {
     
    if (err) throw err; 
   
    console.log("Done writing"); // Success
});