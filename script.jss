const input = document.getElementById("wordInput");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");

// Search on button click
searchBtn.addEventListener("click", searchWord);

// Search on Enter key
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchWord();
    }
});

function searchWord() {
    const word = input.value.trim();
    resultDiv.innerHTML = "";
    errorDiv.textContent = "";

    if (word === "") {
        alert("Please enter a word");
        return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Word not found");
            }
            return response.json();
        })
        .then(data => {
            const entry = data[0];
            const meaning = entry.meanings[0];
            const definition = meaning.definitions[0];

            const example = definition.example || "Example not available";
            const phonetic = entry.phonetic || "Not available";

            // Find audio
            let audioURL = "";
            entry.phonetics.forEach(p => {
                if (p.audio && !audioURL) {
                    audioURL = p.audio;
                }
            });

            resultDiv.innerHTML = `
                <p><strong>Word:</strong> ${entry.word}</p>
                <p><strong>Phonetic:</strong> ${phonetic}</p>
                <p><strong>Part of Speech:</strong> ${meaning.partOfSpeech}</p>
                <p><strong>Meaning:</strong> ${definition.definition}</p>
                <p><strong>Example:</strong> ${example}</p>
            `;

            if (audioURL) {
                const audioBtn = document.createElement("button");
                audioBtn.textContent = "🔊 Play Pronunciation";
                audioBtn.className = "audio-btn";
                const audio = new Audio(audioURL);
                audioBtn.onclick = () => audio.play();
                resultDiv.appendChild(audioBtn);
            }
        })
        .catch(() => {
            errorDiv.textContent = "Word not found. Please try another word.";
        });
}
