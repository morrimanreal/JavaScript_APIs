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

//fetch the API based on users input when the user clicks the button
searchButton.addEventListener("click", () =>{
  fetch(`https://api.giphy.com/v1/gifs/translate?apiKey=MaZofcmPTA3qPriwyIz4fAer2CxwRS0K&s=${searchInput.value}`)

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

