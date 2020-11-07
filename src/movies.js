// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(list) {
  return list.map((movie) => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(list) {
  const spielbergMovie = list.filter((movie) => {
    return (
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    );
  });
  return spielbergMovie.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(list) {
  if (!list.length) {
    return 0;
  }
  let sum = list.reduce((total, movie) => {
    if (!movie.rate) {
      movie.rate = 0;
    }
    return total + movie.rate;
  }, 0);
  let averageRate = Math.round((sum / list.length) * 100) / 100;
  //let averageRate = Number((sum / 250).toFixed(2));
  console.log(averageRate);
  return averageRate;
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(list) {
  const dramaMovies = list.filter((movie) => movie.genre.includes('Drama'));
  // console.log(dramaMovies);
  return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(list) {
  const sorted = [...list];
  sorted.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sorted;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(list) {
  const clonedList = [...list];
  const orderedMorvies = clonedList.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const first20Movies =
    orderedMorvies.length > 20 ? orderedMorvies.splice(0, 20) : orderedMorvies;
  const listOfTitles = first20Movies.map((movie) => {
    return movie.title;
  });
  return listOfTitles;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(list) {
  const newList = list.map((movie) => {
    const durationArray = movie.duration.split(' ');
    const durationNumberArray = durationArray.map((string) => parseInt(string));
    const minutes = durationNumberArray[0] * 60 + durationNumberArray;
    movie.duration = minutes;
    return newList;
  });
  return newList;
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
