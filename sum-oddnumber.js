// for(let i=0; i<50; i++){
//     if(i%3===0||i%5===0){
//         console.log(i)
//     }
// }
let sum=0;
for(let i=1; i<100; i++){
    if(i%3===0 && i%5===0){
        console.log(i)
        sum=sum+i;
        console.log('sum is:',sum)
    }
   
}

 console.log('sum of the numbers is:',sum)

 //give me the sum of numbers from 1 to 20 that are divisible by 3.
 let total=0;
 for(i=1; i<20; i++){
    if(i%3===0){
        console.log(i)
        total=total+i
        console.log('total',total)
    }
 }
 console.log('sum of the numbers is:',total)