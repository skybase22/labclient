var fyear = require('./year.js')

let stdin = process.openStdin()


console.log('Enter your want a or b')
stdin.addListener("data", (d) => {
    //var a = d.toString().trim()
   console.log(fyear.yearc(d[0]))
  
    

   
   process.exit()

})  
   

// var fyear = require('./year.js')

// let stdin = process.openStdin()
// let st2 =  process.openStdin()

// console.log('Enter your want a or b')
// stdin.addListener("data", (d) => {
//     var a = d.toString().trim()
//     console.log('aaaa',a)
//     g = fyear.yearc(a)
//     console.log('ggggggggg',g)
//     console.log('Enter your year')
// var aa = st2.addListener("data", (s) => {
        
//         var aa = s.toString().trim()
//         console.log('dddddddddddddd',aa)
   
//    process.exit()

// })  
//   console.log(g(aa)) 
// }) 