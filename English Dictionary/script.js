const getInput = document.getElementById("input");
const infoTextEl = document.getElementById("infotext");
const meaningcontainerEl = document.getElementById("meaning-container");
const titleEl =document.getElementById("title");
const meaningEl =document.getElementById("meaning");
const audioEl = document.getElementById("audio");
async function fetchAPI(word) {
    try {
        infoTextEl.style.display = "block";
        meaningcontainerEl.style.display = "none";
        infoTextEl.innerText = `Searching the meaning of "${word}"`;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());
        infoTextEl.style.display = "none";
        meaningcontainerEl.style.display="block";
    } catch (error) {
        console.log(error);
    }






}

getInput.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value);
    }


});