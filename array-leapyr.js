function LeapYr(year)

{
    const leapyear=[]
    for(let i=0; i<year.length;i++)
    {
        // console.log(i);
        if(year[i]%4==0 && year[i]%100!=0 ||year[i]%400==0)
        {
            leapyear.push(year[i])
        }
       
    }
    return leapyear;
}
 const yearGiven=[2023,2024,2025,2028,2030];
 const newArrayLeapYr=LeapYr(yearGiven);
 console.log(newArrayLeapYr);