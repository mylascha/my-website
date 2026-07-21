const content = document.querySelector(".content");

const aboutButton = document.getElementById("aboutButton");
const aboutMenu = document.getElementById("aboutMenu");

const nameButton = document.getElementById("nameButton");
const hobbyButton = document.getElementById("hobbyButton");
const photoButton = document.getElementById("photoButton");
const zielButton = document.getElementById("zielButton");

const stadtButton = document.getElementById("stadtButton");
const alteStadtButton = document.getElementById("alteStadtButton");
const schuleButton = document.getElementById("schuleButton");

/* Untermenü zuerst verstecken */

aboutMenu.style.display = "none";

/* Menü öffnen */

aboutButton.onclick = function () {

    if (aboutMenu.style.display === "none") {

        aboutMenu.style.display = "block";

    } else {

        aboutMenu.style.display = "none";

    }

};

/* Name */

nameButton.onclick = function () {

    content.innerHTML = `
        <h2>Mein Name</h2>

        <p>
        Hier kommt später dein Name.
        </p>
    `;

};

/* Hobbys */

hobbyButton.onclick = function () {

    content.innerHTML = `
        <h2>Meine Hobbys</h2>

        <p>
        Hier schreibst du deine Hobbys.
        </p>
    `;

};

/* Fotos */

photoButton.onclick = function () {

    content.innerHTML = `
        <h2>Meine Fotos</h2>

        <img src="images/foto1.jpg"
        width="350">

        <p>
        Beschreibung zum Foto.
        </p>
    `;

};

/* Ziele */

zielButton.onclick = function () {

    content.innerHTML = `
        <h2>Meine Ziele</h2>

        <p>
        Hier schreibst du deine Ziele.
        </p>
    `;

};

/* Stadt */

stadtButton.onclick = function () {

    content.innerHTML = `
        <h2>Meine Stadt</h2>

        <p>
        Hier schreibst du über deine Stadt.
        </p>

        <img src="images/stadt.jpg"
        width="450">
    `;

};

/* Alte Stadt */

alteStadtButton.onclick = function () {

    content.innerHTML = `
        <h2>Meine alte Stadt</h2>

        <p>
        Hier schreibst du über deine alte Stadt.
        </p>

        <img src="images/altestadt.jpg"
        width="450">
    `;

};

/* Schule */

schuleButton.onclick = function () {

    content.innerHTML = `
        <h2>Meine Schule</h2>

        <p>
        Hier schreibst du Informationen über deine Schule.
        </p>

        <img src="images/schule.jpg"
        width="450">
    `;

};
