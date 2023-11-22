const biriyaniHack=['abul', 'babul' ,'kabul','sabul','babul' ,'sabul','dabul']

// console.log(biriyaniHack)

function removeDuplicate(names)
{
    const uniqueArray=[]
    for(let i=0 ; i<names.length; i++)
    {
       const name=names[i]
       if(uniqueArray.includes(name)===false)
       {
        uniqueArray.push(name)
       }
       
    }
    return uniqueArray;
}
const removeItem=removeDuplicate(biriyaniHack)
console.log(removeItem)



//  remove  duplicate fruits in a bucket

const bucketFruits=['apple','orange','guava','banana','orange','watermelon','apple']

function removeDuplicateFruit(fruits)
{
    const emptyBucket=[]
    for (let i=0; i<fruits.length; i++)
    {
       const fruit=fruits[i];
      if(emptyBucket.includes(fruit)===false)
      {
        emptyBucket.push(fruit)
      }
    } 
    return emptyBucket;
}
const duplicateFruite=removeDuplicateFruit(bucketFruits)
console.log(duplicateFruite)