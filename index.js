
//promises async and await:

// Write one example explaining how you can write a callback function ?

// function printAlphabet(name){
//    return new Promise((resolve,reject)=>{
//             // console.log("hi everyone");
//             resolve("good afternoon")
//    })
// }
// printAlphabet(name).then((data)=>{console.log(data)})

// function cb(){
//     setTimeout(() => {
//         console.log("hello everyone");
//     }, 2000);
// }
// cb();  

// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

// function cb(){
//    setTimeout(()=>{
//        console.log("1");
//        setTimeout(()=>{
//            console.log("2");
//            setTimeout(()=>{
//                console.log("3");
//                setTimeout(()=>{
//                    console.log("4");
//                    setTimeout(()=>{
//                        console.log("5");
//                        setTimeout(()=>{
//                            console.log("6");
//                            setTimeout(()=>{
//                                console.log("7");
//                            },7000)
//                        },6000)
//                    },5000)
//                },4000)
//            },3000)
//        },2000)
//    },1000)
// }
// cb()

//"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6


// function print(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//                resolve()
//         },1000)
//     })
// }
// print("1").then(()=>print("2"))
//        .then(() => print("3"))
//        .then(() => print("4"))
//        .then(() => print("5"))
//        .then(() => print("6"))
//        .then(() => print("7"));

// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

// function cb(num){
//     return new Promise((resolve,reject)=>{
//         if(num % 2 ==0){
//             resolve("promise resolved")
//         }
//         else{
//             reject("promise rejected")
//         }
//     })
// }
// cb(49).then((data)=>console.log(data)).catch((data) =>console.log(data))


// Create examples to explain callback function

// function cb (data){
//     setTimeout(()=>{
//         console.log("hello everyone");
//     },1000)
// }
// cb();


// Create examples to explain promises function

// let pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("good morning")
//     },2000)
// })
// pr.then((data)=>console.log(data))

// Create examples to explain async await function

function printletter(alpha){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(alpha);
            resolve(alpha)
        },2000)
            
    })

}
async function printvariables(){
    await printletter("1")
    await printletter("2")
    await printletter("3")
    await printletter("4")
    await printletter("5")

}
printvariables()