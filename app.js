console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//select the search button
let searchButton = document.querySelector("#submitSearch");
//select the search input
let searchInput = document.querySelector("#searchWord");
console.log(searchInput);
//select the img element
let image = document.querySelector("img");
//feedback paragraph element
let para = document.createElement("p");

// para.textContent = "paragraph";
// document.body.append(para);


//when the user clicks the button, fetch the API, then search the unpackaged object from the API and show it to the browser
searchButton.addEventListener("click", () =>{
  //fetch the API 
  fetch(`https://api.giphy.com/v1/gifs/translate?apiKey=MaZofcmPTA3qPriwyIz4fAer2CxwRS0K&s=${searchInput.value}`)

  //unpackage the returned API information to be used 
.then((response) => {
  console.log(response)
  return response.json();
})

//the value the user input in the giphy search should show up as a giph or image.
.then((parsedData) => {
  console.log(parsedData);
  // let res = parsedData;
  image.src = parsedData.data.images.original.url;

  searchInput.value = "";
})

.catch((err) => {
  console.error(err)
  para.textContent = err.message;
  document.body.append(para)
})
})

//everytime .then returns a promise as its value, will have to keep adding .then, but once it stops returning a promise value.  .catch is the end to show errors.