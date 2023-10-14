window.addEventListener("DOMContentLoaded", (event) => {
    const flags = document.getElementById('flags')
    const textsToChange = document.querySelectorAll("[data-section]")
    const changeLanguage = async (language) => {
        const requestJson = await fetch(`./lang/${language}.json`)
        const texts = await requestJson.json()
        for (const textToChange of textsToChange) {
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;
            // console.log(section, value)
            textToChange.innerHTML = texts[section][value];
        }
    };

    flags.addEventListener('click', (e) => {
        changeLanguage(e.target.parentElement.dataset.languages)
    });
});

