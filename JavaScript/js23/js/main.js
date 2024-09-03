const myArray = ["eat", "sleep", "code"];
const myObj = {
  name: "Derek",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));

console.log(mySessionData);

sessionStorage.setItem("mySessionStoreA", JSON.stringify(myArray));
const mySessionArray = JSON.parse(sessionStorage.getItem("mySessionStoreA"));


console.log(mySessionArray);

sessionStorage.removeItem("mySessionStore");

console.log(JSON.parse(sessionStorage.getItem("mySessionStore")));


sessionStorage.clear();

console.log(sessionStorage);
