let stdin = process.openStdin()
stdin.addListener("data", (d) => {
 var a = d.toString().trim()
 
 var arc = ''
for(let i = 0 ; i < a.length ; i++)
{
    var arc = arc+a[a.length-i-1]
}
    if(a == 'end')
    {
        process.exit()
    }
    else if(a == arc)
    {
        console.log('palindrome')
    }
    else
    {
        console.log('not palindrome')
    }

});

