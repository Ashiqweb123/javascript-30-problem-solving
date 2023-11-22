// problem-1

var a=9;
var b=8;
var c=9;

if(a==b||b==c||c==a)
{
    console.log('its an isosceles triangle')
}
else{
    console.log('its not an isosceles triangle')
}


// problem-1

// problem-2
var num1=13;
var num2=79;
var num3=45;

if(num1>num2)
{
    console.log('num1 is greater')
}
else if(num2>num3)
{
    console.log("num2 is greater")
}

else if(num3>num1){
    console.log("num3 is greater")
}
else{
    console.log('no one greater')
}

// problem-2

// problem-3
var fruits = ['Apple', 'Banana', 'Orange'];
 var bananaIndex=fruits.indexOf('Banana')
 console.log(bananaIndex)
 fruits[1]='mango'
 console.log(fruits)
 fruits.pop()
 console.log(fruits)
 fruits.push('watermelon')
 console.log(fruits)

 // problem-3

//  problem-4
var text=a
while(a<=39)
{
    console.log('ajk amr mon valo nei')
    a++
}
//  problem-4
 var num=58
 while(num<=98)
 {
    console.log(num);
    num++;
 }
// 

// problem-5
for(var num1=412; num1<=456;num1=num1+2)
{
    console.log(num1)
}
// problem-5

// problem-6
for(num1=581; num1<=623; num1=num1+2)
{
    console.log(num1)
}
// problem-6

// problem-7
var learnTopic=['html','css','tailwind','daisyUI','js']

for (i=0; i<=learnTopic.length;i++)
{
    var topic=learnTopic[i]
    console.log(topic);
}
// problem-7

// problem-8

var mobileUsing=['Nokia','Poco','motorola']
var i=0;
while(i<=mobileUsing.length)
{
    var mobile=mobileUsing[i]
    console.log(mobile);
    i++;
}
// problem-8

for (i=30; i<=86; i++)
{
    console.log(i)
    if(i>=44)
    {
        break;
    }
}

