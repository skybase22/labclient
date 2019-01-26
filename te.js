var mul = require('./xmuly.js')
   
    let stdin = process.openStdin()
    let st2 =  process.openStdin()
    console.log('Enter your X')
    stdin.addListener("data", (d) => {
        var a = d.toString().trim()
      
        g = mul.mul(a)
        console.log('Enter your Y')
        st2.addListener("data", (s) => {
            
            var aa = s.toString().trim()
        console.log('result = ',g(aa))
       process.exit()

    })    
}) 
// var mul = require('./xmuly.js')
   
//     let stdin = process.openStdin()
//     let st2 =  process.openStdin()
//     console.log('Enter your X')
//     stdin.addListener("data", (d) => {
//         var a = d.toString().trim()
      
//         g = mul.mul(a)
//         console.log('Enter your Y')
//         st2.addListener("data", (s) => {
            
//             var aa = s.toString().trim()
//         console.log('result = ',g(aa))
//        process.exit()

//     })    
// }) 