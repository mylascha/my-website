const content = document.querySelector(".content");

const aboutButton = document.getElementById("aboutButton");
const aboutMenu = document.getElementById("aboutMenu");

const infoButton = document.getElementById("nameButton");
const hobbyButton = document.getElementById("hobbyButton");
const familyButton = document.getElementById("photoButton");
const nationButton = document.getElementById("zielButton");

const cityButton = document.getElementById("stadtButton");
const oldCityButton = document.getElementById("alteStadtButton");
const schoolButton = document.getElementById("schuleButton");

/* Untermenü verstecken */

aboutMenu.style.display = "none";

/* Menü öffnen */

aboutButton.onclick = () => {

    if (aboutMenu.style.display == "none") {

        aboutMenu.style.display = "block";

    } else {

        aboutMenu.style.display = "none";

    }

};

/* Informationen */

infoButton.onclick = () => {

content.innerHTML = `
<h2>Informationen über mich</h2>

<p>
Name: ...
</p>

<p>
Alter: ...
</p>

<p>
Wohnort: ...
</p>

<p>
Ich interessiere mich für Medien und Informatik.
</p>

<img src="images/me.jpg" class="photo">
`;

};

/* Hobbys */

hobbyButton.onclick = () => {

content.innerHTML = `
<h2>Meine Hobbys</h2>

<p>
Hier kannst du deine Hobbys schreiben.
</p>

<img src="images/hobby.jpg" class="photo">
`;

};

/* Familie */

familyButton.onclick = () => {

content.innerHTML = `
<h2>Meine Familie</h2>

<p>
Hier kannst du etwas über deine Familie schreiben.
</p>

<img src="images/familie.jpg" class="photo">
`;

};

/* Nationalität */

nationButton.onclick = () => {

content.innerHTML = `
<h2>Meine Nationalität</h2>

<p>
Hier kannst du erzählen, woher du kommst und welche Sprachen du sprichst.
</p>

<img src="images/flagge.jpg" class="photo">
`;

};

/* Stadt */

cityButton.onclick = () => {

content.innerHTML = `
<h2>Meine Stadt</h2>

<img src="images/stadt.jpg" class="photo">

<p>
Hier schreibst du Informationen über deine Stadt.
</p>
`;

};

/* Alte Stadt */

oldCityButton.onclick = () => {

content.innerHTML = `
<h2>Meine alte Stadt</h2>

<img src="images/altestadt.jpg" class="photo">

<p>
Hier schreibst du Informationen über deine alte Stadt.
</p>
`;

};

/* Schule */

schoolButton.onclick = () => {

content.innerHTML = `
<h2>Meine Schule</h2>

<img src="images/schule.jpg" class="photo">

<p>
Hier schreibst du Informationen über deine Schule.
</p>
`;

};
