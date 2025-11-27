//function
function getJoke(category) {
    fetch(`https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
        .then(response => response.json())
        .then(data => {
            const out = document.getElementById("output");

            if (data.type === "single") {
                out.textContent = data.joke;
            } else if (data.type === "twopart") {
                out.textContent = `${data.setup} - ${data.delivery}`;
            }
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            document.getElementById("output").textContent = "Failure";
        });
//this affects JUST the pun
    if (category=="Pun"){
        joketype.textContent = "A Random Pun"
        console.log("Pun clicked")
    }

    //category is going to catch everything else, its from the URL 
    else{
        joketype.textContent = "A Random " + category + " Joke"
        console.log("other clicked")
    }
    }



//button
const progBtn = document.getElementById("progBtn");
const miscBtn = document.getElementById("miscBtn");
const punBtn = document.getElementById("punBtn");
const spookyBtn = document.getElementById("spookyBtn");
const xmasBtn = document.getElementById("xmasBtn");


progBtn.addEventListener("click", function (){
    console.log("Programming clicked");
    getJoke("Programming");
});

miscBtn.addEventListener("click", function(){
    console.log("Miscellaneous clicked");
    getJoke("Miscellaneous");
});

punBtn.addEventListener("click", function(){
    console.log("Pun clicked");
    getJoke("Pun");
});

spookyBtn.addEventListener("click", function(){
    console.log("Spooky clicked");
    getJoke("Spooky");
});

xmasBtn.addEventListener("click", function(){
    console.log("xmas clicked");
    getJoke("Christmas");
});



