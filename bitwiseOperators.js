//task Compare some numbers to see if they are less than another one.

function getMaxLessThanK(...args) {
    const [n, k] = args;
    // console.log('n ='+n+ ' k = '+k+'\n');
    let max = 0;
    var t=1, j;
    for (var i = 1; i < n; i++)
    {
        t++;
        for (j=t; j <= n; j++)
        {
            // console.log('i = ' + i + ' j = ' + j + '\n');
            if (((i & j) < k) && ((i & j) >= max))
                max = i & j;
        }
        
    }
    return max;
   

}
