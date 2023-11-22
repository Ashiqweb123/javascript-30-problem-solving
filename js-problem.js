function inchToFeet (inch)
{
    const feet= inch/12;
    return feet;
}

const dadiInch= inchToFeet(60);
console.log(dadiInch);

const mamiInch=inchToFeet(120)
console.log(mamiInch);


function cmToMeter (cm)
{
    const meter=cm/100;
    return meter;
}
const meterRange=cmToMeter(700)
console.log(meterRange);


function isEven(number)
{
    const remainder=number%2;
    if(remainder==0)
    {
        return true
    }
    else{
        return false
    }
}

const myNumber=isEven(4)
console.log(myNumber)
const herNumber=isEven(9)
console.log(herNumber);








