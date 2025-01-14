// const ar1=[1,2,3,4.5,5.6];
// console.log("Int Array "+ar1);
// const ar2=[33,44,"hello"];
// console.log("Mix Array "+ar2);

// const ar3=new Array(1,33,44,"Dear Js",7.6,ar1);
// console.log("Multiple Array ele "+ar3);

// ar3.push(445);//Add element to end
// console.log("\nMultiple Array ele "+ar3);

// ar3.pop();//remove from End
// console.log("\n Array after POP "+ar3);

// ar3.unshift(2024);//add element to start
// console.log("Array After Adding 2024  "+ar3);

// ar3.shift();
// console.log("Array after shift "+ar3);

// var b=ar3.includes(ar1);
// console.log(b);

// console.log(ar3);
// console.log(ar3.indexOf(44));


// var ns=ar1.join(" ");
// console.log(ns);

// console.log(typeof(ar1.join(ar2)));

    let a1=[1,2,3,4,5];

// console.log(a1.slice(1,3));//this method fetch this excluding last index
// console.log(a1);

// console.log(a1.splice(1,3));//this method create new Array with element and remove from original array
// console.log(a1);

// console.log(a1.concat(22,33,44,55));

 let ba=[11,12,13,14,15];
const na=[...a1,...ba,...[4,5,6,9]]
console.log(na);

// ba=ba.concat(a1,[576,878]);
// console.log(ba);

// let str="GOOD MORNING"
// console.log(Array.isArray(str));
// let char=Array.from(str);
// console.log(char);
// console.log((Array.from({name:"ram",id:123})));

// let a=11;
// let b=12;
// let c=13;
// console.log(Array.of(a,b,c));


// let ara=[1,1.5,3,"dfdf",'d'];
// console.log(ara.at(2.5));
