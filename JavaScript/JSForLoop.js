//Iterations
//for loop 
//let array=[11,22,33,44,55,66,77];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

// for (let i=0;i<=10;i++)
// {
//     if((Math.round(i%2))==0)
//     {
//         console.log("Number is Even Number "+i);
//     }
//     else{
//         console.log(("Number is Odd "+i));
        
//     }
// }

// for(let i=0;i<=3;i++)
// {   console.log(`Outer Loop ${i}`);
//     for(let j=11;j<=14;j++)

//     {
//      console.log(`Inner Loop ${j} and Outer Loop ${i}`);
//     }
// }

// for(let i=0;i<=3;i++)
//     {   console.log(`A : Outer Loop ${i}`);
//         for(let j=11;j<=12;j++)
//         {
//          console.log(`B: Inner Loop ${j} and Outer Loop ${i}`);
//         for(let k=41;k<=44;k++)
//         {
//             if(i==2)
//             {
//                 break;
//             }
//          console.log(`C :Current Loop ${k} Grand Inner Loop ${j} and Parent Outer Loop ${i} `);
//         }
//         }
//     }


//continue

for (let index = 0; index < 10; index++) {
  if(index==5 || index==6)
    {
        console.log("Detected 5 or 6");
        
        continue;
    } 
    
    console.log(index);
    
}