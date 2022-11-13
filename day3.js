

// create an array
let movies = ['Miracle at St. Anna' , 'Avatar' , 'Little Shop of Horror']

console.log(movies[1])

movies.push('Forrest Gump') // adding an item to the end of the array

console.log(movies)

movies.unshift('The Princess and the Frog') // adding an item to the beginning of the array

console.log(movies)

movies.pop() // remove last item in an array

movies.shift() // remove an item from the beginning of an array


// for each

let movies = ['Miracle at St. Anna' , 'Avatar' , 'Little Shop of Horror' , 'Hocus Pocus' , Cinderella] // 5 items in this array
(for let i=0; i < movies.length; i++){
    console.log(movies[i])
}
movies.forEach