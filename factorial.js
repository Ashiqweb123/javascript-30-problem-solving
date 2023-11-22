function factorial(number)

{
    let result=1;
    for(i=number; i>=1; i--)
    {
        result=result*number;
    }
    return result;
}

const fact =factorial(5);
console.log(fact);