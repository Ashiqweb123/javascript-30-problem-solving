const phones=[
{name:'oppo', camera:12, storage:'32gb',price:32000, color:'silver'},
{name:'samsung', camera:42, storage:'16gb',price:22000, color:'silver'},
{name:'HTC', camera:22, storage:'32gb',price:22000, color:'golden'},
{name:'I-phone', camera:32, storage:'64gb',price:82000, color:'white'},
{name:'MOTO-E', camera:8, storage:'32gb',price:12000, color:'black'}

]

function cheapestPhone(myPhones)
{
   let cheapPhone=myPhones[0]
    for(let i=0; i<myPhones.length;i++)
    {
       const phone=myPhones[i]
       if(phone.price<cheapPhone.price)
       {
        cheapPhone=phone;
       }
       
    }
    return cheapPhone;
}
const phonePrice=cheapestPhone(phones)
console.log(phonePrice)