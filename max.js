const jim=77;
const della=98;
const chinku=85;
// if(jim>della && jim>chinku)
// {
//     console.log('jim wil get highest number')
// }
// else if(della>jim && della>chinku)
// {
//     console.log('della will  get the higshest number')
// }
//  else{
//     console.log('chinku will get the hisghest number')
//  }

function getHighest(jim,della,chinku)
{   
    const maximum =Math.max(jim,della,chinku)
  if(maximum==jim)

  {
    return jim;
  }
  else if (maximum==della)
  {
    return della;
  }
  else 
  {
    return chinku;
  }
}


const highetsInput= getHighest(77,98,85);
console.log(highetsInput);