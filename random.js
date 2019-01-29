var cnt = 1
var ran = x => {
   
    var random = Math.floor(Math.random() * Math.floor(5))
    console.log(random)
    if(x == random)
    {
        console.log("You Won!")
        
        return true
    }
    else if(cnt === 5)
    {
        console.log('You lose')
        return true
    }
    else{
        ++cnt
        console.log(cnt)
        console.log('Wrong')
    }
}



//console.log(randam)


exports.random= ran