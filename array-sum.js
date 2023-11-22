function arrayOfSum(numbers)
{
    let sum=0;
   for(let i=0; i<numbers.length; i++)
   {
    
     sum=sum+numbers[i];
    // console.log(sum)
   }
   return sum;
}
// const myNumbers=[1,2,3,4,5];
// const sumTotal=arrayOfSum(myNumbers)
// console.log(sumTotal)


function oddNumberSum(numbers)
{
    const oddNumbers=[]
    for(i=0; i<numbers.length; i++)
    {
        const index=i;
        const element=numbers[index]
        if (element%2!=0)
        {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers=[1,2,3,4,5];
const oddNumber=oddNumberSum(myNumbers);
console.log(oddNumber)
const sumOdd=arrayOfSum(oddNumber)
console.log(sumOdd)