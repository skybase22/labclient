

var ar = 'civic'
var arc = ''
for(let i = 0 ; i < ar.length ; i++)
{
    var arc = arc+ar[ar.length-i-1]
}
    if(ar == arc)
    {
        console.log('palindrome')
    }
    else
    {
        console.log('not palindrome')
    }