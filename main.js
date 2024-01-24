//  __dirname : directory name
// common JS import : require
require("dotenv").config()

console.log("dirname :", __dirname);
console.log("filename :", __filename);

const DBPWD = process.env.DBPWD;


function connect(pwd) {
  return `You are connected`;
}
console.log(connect(DBPWD));
