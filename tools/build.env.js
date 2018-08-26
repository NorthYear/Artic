const crypto = require("crypto");
const fs = require("fs");
const key = crypto.randomBytes(24).toString("base64");


function writeEnv(properties) {
    let output = "";
    for(let iterator in properties) {
        output += `${iterator}=${properties[iterator]}\n`
    }
    return output;
}

let properties = {
    "ENCRYPTION_KEY" : key
}

fs.writeFileSync(".env", writeEnv(properties), "utf8");
