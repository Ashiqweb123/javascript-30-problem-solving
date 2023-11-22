function cubeNumber(number) {
    if( typeof number!= 'number')
    {
        return 'your number is not valid'
    }
    const result=number*number*number;
    return result;
   
}

const cubicNumber=cubeNumber(3)
console.log(cubicNumber);

function matchFinder(string1, string2) {
    if( typeof string1!= 'string'|| typeof string2!= 'string')
    {
        return 'your string is not valid'
    }
    if(string1.includes(string2))
    {
        return true;
    }
    else{
        return false;
    }
}
const doubleString=matchFinder('rabiul','rab')
console.log(doubleString);


const arrayElement=[4,2]
function sortMaker(arr) {
    
    for(let i=0; i<arr.length;i++)
    {
       
       if(arr[0]==arr[1])
       {
        return "equal"
       }
       else if(arr[0]>0 && arr[1]>0){
       const result= arr.sort()
       return result;
       }
       else if(arr[0]<0|| arr[1]<0){
       return 'invalid input'
    }
    }
}
 const elementArray=sortMaker(arrayElement)
 console.log(elementArray)


 const ArrayTaka=[1,2,5]
 function canPay(changeArray, totalDue) 
 {
    let sum=0;
    for (let i=0 ; i<changeArray.length; i++)
    {
       sum=sum+changeArray[i]
     
    }

    if (changeArray.length === 0) 
    
    { 
        return 'array is empty'
 }
   
    if(sum>=totalDue)
       {
        return true;
       }
       else
       {
        return false;
       }
}

const taka=canPay(ArrayTaka,8)
console.log(taka)



function findAddress(obj) {
    let street, house, society;
  
    if (obj.street !== undefined) {
      street = obj.street;
    } else {
      street = '__';
    }
  
    if (obj.house !== undefined) {
      house = obj.house;
    } else {
      house = '__';
    }
  
    if (obj.society !== undefined) {
      society = obj.society;
    } else {
      society = '__';
    }
  
    return street + ',' + house + ',' + society;
  }
const fullAddress={ street: 10, house: '15A', society: 'Earth Perfect' }
const Address1=findAddress(fullAddress)
console.log(Address1); 
const halfAdress={ street: 10, society: 'Earth Perfect'}
const Address2=findAddress(halfAdress)
console.log(Address2);  
const singleAddress={street: 10}
const Adress3=findAddress(singleAddress)
console.log(Adress3); 