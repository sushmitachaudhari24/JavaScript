var num=123;
var str="fdb";
var s="";
var b=true;
var c=null;
var n1=String(num);
console.log(typeof n1+"..."+n1);

var n2=Number(str);
console.log(typeof n2+"..."+n2);

var n3=Number(s);
console.log(typeof n3+"   "+n3);

var n4=Boolean(s);
console.log(typeof n4 +"  "+n4)

var n5=Boolean(str);
console.log(typeof n5+" .."+n5)

var n6=Number(c);
console.log(typeof n6+"..."+n6)

var n7=String(c);
console.log(typeof n7+"..."+n7)

num++;
console.log(num);

++num;
console.log(num);


///String memory Management

let st="Sushmita Chaudhari";

let st1=st;
st1="erdd";
console.log(st);
console.log(st1);


let user={
    email:"sushmitachaudhari8711@gmail.com",
    pass:"Sush@98"
}
let usert=user;
usert.pass="Sushmita@12";
console.log(user.email);
console.log(user.pass);
console.log(usert.pass);
