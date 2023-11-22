var priceElement=[45,23,78,55,98]
console.log(priceElement.length);
var indexElement=priceElement[4]
priceElement[3]=44
console.log(priceElement);

var positionElement=priceElement.indexOf(100)
console.log(positionElement)
//==========push-pop=========== /////

var fruits=['apple','banana','mango']
fruits.push('jackfruit')
fruits.pop()
fruits.unshift('lemon')
var removeItem=fruits.shift()
console.log(removeItem)
console.log(fruits);