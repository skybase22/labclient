var de = require('./binary.js')

let stdin = process.openStdin()
console.log('Enter your decimal')
stdin.addListener("data", (d) => {
    
    console.log(de.bi(d))

})