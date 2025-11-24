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
}

//button
const progBtn = document.getElementById("progBtn");
const miscBtn = document.getElementById("miscBtn");
const punBtn = document.getElementById("punBtn");
const spookyBtn = document.getElementById("spookyBtn");
const xmasBtn = document.getElementById("xmasBtn");

//event listeners
progBtn.addEventListener("click", () => getJoke("Programming"));
miscBtn.addEventListener("click", () => getJoke("Miscellaneous"));
punBtn.addEventListener("click", () => getJoke("Pun"));
spookyBtn.addEventListener("click", () => getJoke("Spooky"));
xmasBtn.addEventListener("click", () => getJoke("Christmas"));