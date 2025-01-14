const mynums=[1,2,3]

// const mytotal=mynums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} currval:${currval}`);
//     return acc+currval
    
// },0)
const mytotal=mynums.reduce((acc,currval)=>acc+currval,0)
console.log(mytotal);


const shoppingcart=[
    {
        itemName:"js",
        price:990
    },

    {
        itemName:"java",
        price:1990
    },
    {
        itemName:"jc",
        price:490
    },
    {
        itemName:"cpp",
        price:590
    }
]

const cp=shoppingcart.reduce((acc,currval)=>acc+currval.price,10)
console.log(cp); 
