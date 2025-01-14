const JSuser={
      Fname:"Sushmita",
      Lname:"Chaudhari",
      City:"Pune",
      IsGraduate:true,
      Email:"smc123@gmail.com",
      Skills:["c","c++","Java","UI"],
      contact:"78686886",
      totalSkills:function(){
    return this.Skills.length
      }
}
//Object.freeze(JSuser)
JSuser.Email="sushmitachaudhari1111@gmail.com"

JSuser["Marks"]=986543;
// delete JSuser.contact;
// console.log(JSuser);
// console.log(JSuser.totalSkills());

const jsobj={
       pet:["dog","cat"],
       animal:["Tiger","Lion"]
}
console.log(Object.assign(JSuser,jsobj));
//console.log(Object.keys(JSuser));
//console.log(Object.values(JSuser));
//console.log(Object.entries(JSuser));

console.log(JSuser.hasOwnProperty('isLoggedIn'));
