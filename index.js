//dollars in hryvnia
const dollarValue = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];

for ( let i = 0; i < dollarValue.length; i++ ) {

  dollarValue[i] *= 40;
  console.log(dollarValue[i])

}

// prime numbers

let anyNum = +prompt( 'What number you want to check?' );

let isPrimeNum = true;

let i = 2;

for (; i * i <= anyNum; i++) {
  if (anyNum % i === 0) {
    isPrimeNum = false;
    break;
  }
}

if ( !anyNum ) {
  alert('Error! Incorrect input value!');

} else if (anyNum < i || !isPrimeNum) {
  alert(anyNum + ' is not a prime number');
  
}else {
  alert(anyNum + ' is a prime number');
}




// //power of three

 let powerOfThree = +prompt( 'What number you want to check?' )

 let i = 3

 for (; i <= powerOfThree; i = i * 3 ){
  if (i === powerOfThree)
  break 
}

if (!powerOfThree){
  alert('Error! Incorrect input value!')

  }else if(powerOfThree < i ){
    alert(powerOfThree +' can not be elevated to the power of three')

  }else{
 alert(powerOfThree +' can be elevated to the power of three')
 }