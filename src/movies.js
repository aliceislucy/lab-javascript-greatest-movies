// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (array) {
  let newArray = [];
  array.filter(function (object) {
    newArray.push(object.director)
  })
  return newArray
}

console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const HowManyMovies = function (movies) {
  const sSpielbergMovies = movies.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
  });

  return sSpielbergMovies.length;
};

console.log(HowManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0)
    return 0;

  const sumOfRates =
    array.reduce((a, movie) => {
      return (movie.rate === undefined ? a : a += movie.rate); // parenthesis after return because the array is an array of objects
    }, 0);
return (Number((sumOfRates/array.length).toFixed(2)))
}

console.log(ratesAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = function (movies) {
  const dramaMovies = movies.filter((movie) => {
    return movie.genre.includes(“Drama”);
  });
  return ratesAverage(dramaMovies);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (array) {
  
  let newArray = [];

  array.sort(function (a, b){
    return a.year - b.year;
  })
  
  array.filter(function (object) {
    newArray.push({year: object.year});
  })

  return newArray
}

console.log(orderByYear (movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = function (moviesArray) {
  const movies2 = [...moviesArray];
  movies2.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);
  const titlesArray = movies2.map(function(movie) {
    return movie.title;
  });
   if (titlesArray.length < 20) {
    return titlesArray;
  } else {
    return titlesArray.slice(0, 20);
  }
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (){
  newArray = [];

  return newArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
