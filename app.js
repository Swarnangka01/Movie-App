// let title = document.getElementById('title');
// let collection = document.getElementById('collection');
// let genre = document.getElementById('genre');
// let desc = document.getElementById('desc');
// let date = document.getElementById('date');
// let director = document.getElementById('director');
// let actors = document.getElementById('actors');
// let awards = document.getElementById('awards');
// let ratings = document.getElementById('ratings');
// let poster = document.getElementById('poster');
// let writer = document.getElementById('Writer');

// let api='https://www.omdbapi.com/?apikey=b9a7a0a9&t=';

// function searchMovie(){
// let movieName = document.getElementById('movieName')
// let url = api+movieName.value;   
// fetch(url).then((data)=>{
//     return data.json()
// }).then((data)=>{
//    title.innertext = data.title;
//    date.innertext = data.released;
//    director.innertext = data.director;
//    actors.innertext = data.actor;
//    awards.innertext = data.awards;
//    desc.innertext = data.plot;
//    ratings.innertext = data.imdbrating;
//    writer.innertext = data.Writer;
   // poster.innertext = data.poster;
//    .innertext = data.;
//    .innertext = data.;
//    .innertext = data.;
// console.log(data);
// })
// }
let api ="https://www.omdbapi.com/?apikey=b9a7a0a9&t="
let title = document.getElementById('title')
let director = document.getElementById('director')
let actors = document.getElementById('actors')
let collection = document.getElementById('collection')
let desc = document.getElementById('desc')
let awards = document.getElementById('awards')
let writer = document.getElementById('writer')
let ratings = document.getElementById('ratings')
let genre = document.getElementById('genre')
let date = document.getElementById('date')
let poster = document.getElementById('poster')


function searchMovie(){
   let movieName = document.getElementById('movieName')
   let query = api+movieName.value
   fetch(query).then((data)=>{
      return data.json()
   }).then((data)=>{
      title.innerText = data.Title;
      director.innerText = data.Director;
      actors.innerText = data.Actors;
      collection.innerText = data.BoxOffice;
      desc.innerText = data.Plot;
      awards.innerText = data.Awards;
      writer.innerText = data.Writer;
      ratings.innerText = data.imdbRating;
      genre.innerText = data.Genre;
      date.innerText = data.Released;
      poster.src = data.Poster;
   })
}






