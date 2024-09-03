import UserClass from "./user.js";
import * as Guitars from "./guitars.js";

const obj = new UserClass("Derek", "dsmithnautel@ufl.edu");
console.log(obj.get_info());

console.log(Guitars.playGuitar());
console.log(Guitars.plucking());
console.log(Guitars.shredding());