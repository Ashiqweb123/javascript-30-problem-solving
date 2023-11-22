function maxArray(height)
{
    let largest=height[0];
    for(let i=0; i<height.length;i++)
    {
       const index=i;
       const element=height[index];
       if(element>largest)
       {
        largest=element;
       }
    }
return largest;
}

 const heightArray=maxArray([167,165,168,162])
 console.log(heightArray);