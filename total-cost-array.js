 const product=[
    {name:'shoe' ,price: 1200,quantity:5},
    {name:'bag', price: 700,quantity:2},
    {name:'shirt', price:2000,quantity:3}
 ]

 function productPrice(item)
 { 
    let sum=0;
    for(let i=0; i<item.length; i++)
    {
        const element=item[i]    
        const totalProductCost=element.price*element.quantity 
        sum=sum+totalProductCost;
    
    }
    return sum;
 }
  const productList=productPrice(product)
  console.log(productList);