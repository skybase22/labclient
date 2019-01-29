var mul = require('./xmuly.js')
   
    let stdin = process.openStdin()
    console.log('Enter your X')
    var values1 = ''
    var values2 = ''
    var cnt = 1
    stdin.addListener("data", (d) => {
        if(cnt === 1)
        {
            values1 = d.toString().trim()
            cnt++
            console.log('Enter your Y')
        }
        else if(cnt === 2)
        {
            values2 = d.toString().trim()
            console.log(mul.mul(values1,values2))
            stdin.destroy()
        }
        
      
       
     
}) 
