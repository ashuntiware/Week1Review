//While loops
//Cheat Sheet: https://www.codeacademy.com/Learn/paths/introduction-to-javascript/tracks/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet

//write a loop to count downn to 0, starting anywhere between 5 & 10
//var i = 0

//while(i>=0) //as long as i is greater than 7 this while loop will execute
//console.log(i)// printing i to the console
//i -= // decrementing i by 1 

//while (i<7){
 //   console.log(i)
  //  i++
//}

//exercise 3

//let x= 0;

//while (x<=20){
 //   if(x % 2 === 0)

    //output x+3
//}

// Chase example on how to write a while loop (confident students)
// write while loop; DONE
// check if divisible by 5; DONE
// log i; DONE
// divide i by 2; DONE
// log half of i; DONE

//while (i < 200){
 // if (i % 5 ===0) {
 //   console.log(i);
 //   console.log(i/2)
  //}
 // i++:
//}

// Bonus question: WHAT TO DO

//create a loop

//convert to quarters

//subract

//log how many quarters






// Write a function that adds 3 in ESS
// function addThree(a,b,c){
//   return a + b + c
// }

// console.log(addThree(2,3,4))

//Write a function that adds 3 numbers and divides them up by 3 in ES5
function steps(d,e,f){
  return (d + e + f) / 3
}
// console.log(steps(2,3,4))

//Working with Gary Fizzbuzz Example

 for(var i = 0; i <=30; i++){
    if (i % 3 == 0 && i % 5 == 0){
      console.log( "fizzbuzz")
    }
    else if(i % 3 == 0){
      console.log("fizz")
    }
    else if(i % 5 == 0){
      console.log("buzz")
    }
  }