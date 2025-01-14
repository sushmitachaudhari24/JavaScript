const mynum=[1,2,3,4,5,6,7,8,9,10]

//const num=mynum.filter( (num) => num > 4  )
// const num=mynum.filter( (num) =>{
//     return  num > 4 
// } )
// console.log(num);

//above example withbfor Each
// const nnum=[]
// mynum.forEach( (item)=>{
//     if(item>5)
//     {
//         nnum.push(item);
//     }    
// } )
// console.log(nnum);

const book=[
     { title:'1',genre:'History',publish:1986,edition:1996},
     { title:'2',genre:'math',publish:1906,edition:1996},
     { title:'3',genre:'History',publish:2006,edition:1996},
     { title:'4',genre:'bio',publish:2016,edition:1996},
     { title:'5',genre:'History',publish:1996,edition:1996},
     { title:'6',genre:'bio',publish:2000,edition:1996},
     { title:'7',genre:'lang',publish:1916,edition:1996},
     { title:'8',genre:'History',publish:1986,edition:1996}
];
//return book of given genere
// const userBooks=book.filter( (bk) => bk.genre ==="bio")
// console.log(userBooks);


//return book as per published  after 2000

const ubooks=book.filter( (bk)=>{return  bk.publish>=1995  && bk.genre === 'History'} )

console.log(ubooks);
