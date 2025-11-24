//"https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(response => response.json())
    .then(data =>{
    console.log(data.joke);
    joke.textContent = data.joke; 
    })

    
    fetch("https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(response => response.json())
    .then(data =>{
    console.log(data.joke);
    joke.textContent = data.joke; 
    })

    fetch("https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(response => response.json())
    .then(data =>{
    console.log(data.joke);
    joke.textContent = data.joke; 
    })

    fetch("https://v2.jokeapi.dev/joke/Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(response => response.json())
    .then(data =>{
    console.log(data.joke);
    joke.textContent = data.joke; 
    })

    fetch("https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(response => response.json())
    .then(data =>{
    console.log(data.joke);
    joke.textContent = data.joke; 
    })
    

    
.catch(error =>{
    //what do we do if theres an API error?
console.error("error fetching joke", error)
fact.textContent = "joke appears here";
})


programming.addEventListener("click",function(){
    console.log("programming joke");
})
misc.addEventListener("click",function(){
    console.log("misc joke");
})
pun.addEventListener("click",function(){
    console.log("pun");
})
spooky.addEventListener("click",function(){
    console.log("spooky joke");
})
xmas.addEventListener("click",function(){
    console.log("xmas joke");
})

/*get a cat image
fetch("https://cataas.com/cat?width=600&json=true") //adding width=600& after the ? forces the img to be 600 px wide. does not work on all api's
.then(response=>response.json())
.then(data=>{
    console.log(data);
    catphoto.src = data.url;

})
    */