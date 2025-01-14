//const coding=["c","c++","java","JavaScript"]
// coding.forEach( function (item) {
//     console.log(item);
    
// } )   // CallBack Function

// coding.forEach( (item)=>{
// console.log(item);

// } )

// function printMe(item){
//     console.log(item);
// }


// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
    
// } )


//for Each with Object

const marr=[{
    language:"C",
     Ext:".c"
},
{
  language:"C++",
     Ext:".cpp"
},
{
  language:"Java",
     Ext:".java"
}
];
// console.log(marr);
 
//console.log(arr[0].tac);

marr.forEach( (item,index)=>{
    if(index==1)
    {
        console.log(item);
    }
    
} )