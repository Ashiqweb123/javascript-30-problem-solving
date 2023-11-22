function itemCalc(eggQuatity,riceQuantity,oilQuanty)
{
     const perEggPrice=12;
     const eggPrice=eggQuatity*perEggPrice;
     const perKgRice=70;
     const ricePrice=riceQuantity*perKgRice;
     const perLitreOil=140;
     const oilPrice=oilQuanty*perLitreOil;

     const totalPrice=eggPrice+ricePrice+oilPrice;
     return totalPrice

}

const itemQuantity=itemCalc(1,1,1)
console.log(itemQuantity)