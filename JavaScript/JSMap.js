// const map=new Map();
// map.set(1,"ABC");
// map.set(2,"BCD");
// map.set(3,"CDE");
// map.set(4,"DEF");
// map.set(5,"EFG");

// console.log(map);


const map=new Map();
map.set('a',"apple");
map.set('b',"ball");
map.set('c',"cat");
map.set('d',"doll");

//console.log(map);
for (const [key,value] of map) {
   console.log(key,':-',value);
   
}

// const mobj={
//     animal:"dog",
//     birds :"parrot"
// }
// for (const key in mobj) {
//     //console.log(mobj[key]);
//     console.log(`${key} ======> ${mobj[key]}`);
    
// }

// const languages=["c","c++","java","Python"]
// for (const key in languages) {
//     console.log(key,"==values are=====>",languages[key]);
// }