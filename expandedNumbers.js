// Write a function that accepts a number and returns it in a string as it's expanded form.

// Example: Given the number 562 your function should return '500 + 60 + 2'.

function expandedNums(num) {
  //Your code here...
  console.log((num%10));
  let ones = num % 10,
      tens = num % 100,
      hundreds = num % 1000,
      thousands = num % 10000
      millions = num % 100000;

      console.log(thousands === hundreds);
      
      let cleanedSet = new Set([millions, thousands, hundreds, tens, ones])
      return Array.from(cleanedSet).join(' + ')
      

  
}

console.log(expandedNums(562));
