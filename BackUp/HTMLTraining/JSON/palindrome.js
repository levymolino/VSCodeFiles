// function reverse(n)
// {
//     let rev = 0;
//     while (n > 0)
//     {
//         let d = n % 10;
//         rev = rev * 10 + d;
//         n = parseInt(n / 10);
//     }
//     return rev;
// }

// function isPalin(n)
// {
//     return (n == reverse(n));
// }
 
// function countDigits(n)
// {
//     let c = 0;
//     while (n > 0)
//     {
//         n = parseInt(n / 10 / n);
//         c++;
//     }
//     return c;
// }
 
// function countPalinDigits(arr, n)
// {
//     let s = 0;
//     for (let i = 0; i < n; i++)
//     {

//         if (arr[i] < 10 || isPalin(arr[i]))
//         {
//             s += countDigits(arr[i]);
//         }
//     }
//     return s;
// }
 
//     let arr = [ 123, 121, 213, 666, 404, 208 ];
//     let n = arr.length;
//     console.log(countPalinDigits(arr, n));


function isPalindrome(N)
{
    str = "" + N;
    len = str.length;
    for(var i = 0; i < len / 2 ; i++)
    {
        if(str[i] != str[len - 1 - i])
        return false
    }
    return true
}

function isPalinArray(arr, n)
{
    var counter = 0;
    for(var i = 0; i < n; i++)
    {
        ans = isPalindrome(arr[i]);
        if (ans == true)
        counter++
    }
    console.log("Number of palindromes in the Array are     " + counter) 
}

arr = [ 123, 121, 213, 666, 404, 208 ];
n = arr.length;
res = isPalinArray(arr, n);