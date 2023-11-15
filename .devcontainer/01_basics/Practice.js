


// // let n = 10

// // for ( let i =n ; i>0; i--){
// //     console.log(i)
// // }


// // factorial Number


// // let n = 7

// // fact =1;
// // for(let i =1 ; i<=n ; i++){
// //     fact = fact *i
// // }
// // console.log("Factorial of the given  number is : ", fact)


// // Factors of number

// let n = 125

// for(let i =1 ; i<=n ; i++){
//     if( n % i==0){
//         console.table(i)
        
//     }

// }


//Palindrome number

let n = 121

let temp =n
let res=0

while(n!=0){
    let rem = n%10
    res = res * 10 + rem
    console.log(res)
    n = Math.floor(n/10)
}
console.log(res)
if( temp == res){
    console.log('Palidrome')
}
else{
    console.log('Not a palindrome')
}

