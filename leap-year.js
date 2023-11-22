function isleapyear(year)
{
    if(year%4==0 && year%100!=0 || year%400==0)

    {
        return true;
    }
    return false;
}

const myYear=isleapyear(2020);
console.log('my year is leap-year', myYear);
const herYear=isleapyear(2023);
console.log('her year is leap-year',herYear)