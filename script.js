const content = document.querySelector(".content");

const aboutButton = document.getElementById("aboutButton");
const aboutMenu = document.getElementById("aboutMenu");

const infoButton = document.getElementById("information über mich Button");
const hobbyButton = document.getElementById("hobbyButton");
const familyButton = document.getElementById("familieButton");


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

<img src="images/sea.jpg.png" class="photo">
    }

};

/* Informationen */

infoButton.onclick = () => {

content.innerHTML = `
<h2>Informationen über mich</h2>

<p>
Ich heisse Milana, bin 14 Jahre alt und wohne in Düdingen. Ich habe am 29. Januar Geburtstag.
Ich höre sehr gerne Rockmusik und mein Lieblingsfilm ist Harry Potter. Ich probiere gerne neue Sachen aus und finde es spannend, immer wieder etwas Neues zu lernen. Ausserdem verbringe ich gerne Zeit mit Freunden und meiner Familie.
</p>

<img src="images/me.jpg" class="photo">
`;

};

/* Hobbys */

hobbyButton.onclick = () => {

content.innerHTML = `
<h2>Meine Hobbys</h2>

<p>
In meiner Freizeit wird mir eigentlich nie langweilig. Ich mache Luftakrobatik, spiele Gitarre und zeichne gerne.
An meinen Hobbys gefällt mir, dass jedes etwas anderes ist. Bei der Luftakrobatik kann ich mich auspowern, beim Zeichnen meiner Fantasie freien Lauf lassen und beim Gitarrespielen einfach entspannen. Ich finde es schön, verschiedene Sachen auszuprobieren und dabei immer etwas Neues zu lernen.
</p>

<img src="images/hobby.jpg" class="photo">
`;

};

/* Familie */

familyButton.onclick = () => {

content.innerHTML = `
<h2>Meine Familie</h2>

<p>
Ich wohne mit meiner Mutter Oksana und meinem Vater Vadim zusammen. Ich habe keine Geschwister und bin Einzelkind.
Wir unternehmen gerne etwas zusammen. Am Wochenende machen wir oft Ausflüge oder fahren an neue Orte. Diese gemeinsame Zeit macht mir immer viel Spass.
</p>

<img src="images/familie.jpg" class="photo">

`;

}

/* Stadt */

cityButton.onclick = () => {

content.innerHTML = `
<h2>Meine Stadt</h2>

<img src="images/stadt.jpg" class="photo">

<p>
Ich wohne in Düdingen (3186) im Kanton Freiburg. Mir gefällt, dass es hier ruhig ist und es viele schöne Orte in der Natur gibt. Trotzdem sind grössere Städte nicht weit entfernt.
In Düdingen leben etwas mehr als 8'000 Menschen. Die Gemeinde ist ungefähr 31 km² gross und wurde im 12. Jahrhundert zum ersten Mal erwähnt
</p>
`;

};

/* Alte Stadt */

oldCityButton.onclick = () => {

content.innerHTML = `
<h2>Meine alte Stadt</h2>

<img src="images/altestadt.jpg" class="photo">

<p>
Ich komme ursprünglich aus Berdjansk in der Ukraine. Die Stadt liegt direkt am Asowschen Meer und ist für ihre lange Promenade und die Strände bekannt.
Berdjansk wurde 1827 gegründet und ist ungefähr 82 km² gross. Vor dem Krieg lebten dort rund 110'000 Menschen.
Ich habe dort viele schöne Erinnerungen gesammelt und freue mich immer, wenn ich an meine alte Heimat denke
</p>
`;

};

/* Schule */

schoolButton.onclick = () => {

content.innerHTML = `
<h2>Meine Schule</h2>

<img src="images/schule.jpg" class="photo">

<p>
Ich besuche die OS Düdingen. Meine Klassenlehrerin heisst Frau Bieri.
In der Schule lerne ich viele verschiedene Fächer. Besonders mag ich Aufgaben, bei denen ich kreativ sein kann oder im Team arbeite. Ausserdem finde ich es spannend, neue Dinge zu lernen und mich weiterzuentwickeln
</p>
`;

};
/* Stadt */

cityButton.onclick = () => {

content.innerHTML = `

<h2>Meine Stadt – Düdingen</h2>

<p>
Ich wohne in Düdingen im Kanton Freiburg. Mir gefällt es hier, weil es ruhig ist und man schnell in der Natur ist. Gleichzeitig sind grössere Städte wie Freiburg oder Bern nicht weit entfernt.
</p>

<p>
Düdingen hat die Postleitzahl 3186. Hier leben ungefähr 8'300 Menschen und die Gemeinde ist rund 31 km² gross. Düdingen wurde im Jahr 1182 zum ersten Mal urkundlich erwähnt.
</p>

<p>
Ich fühle mich hier sehr wohl und verbringe gerne Zeit mit meiner Familie oder Freunden.
</p>

<img src="images/stadt.jpg" class="photo">

`;

};

/* Alte Stadt */

oldCityButton.onclick = () => {

content.innerHTML = `

<h2>Meine alte Stadt – Berdjansk</h2>

<p>
Ich komme ursprünglich aus Berdjansk in der Ukraine. Die Stadt liegt direkt am Asowschen Meer und war früher ein beliebter Ferienort.
</p>

<p>
Berdjansk wurde 1827 gegründet und ist ungefähr 82 km² gross. Vor dem Krieg lebten dort rund 110'000 Menschen.
</p>

<p>
Ich habe viele schöne Erinnerungen an meine alte Heimat. Besonders gefallen haben mir das Meer, die langen Spaziergänge an der Promenade und die Zeit mit meiner Familie.
</p>

<img src="images/altestadt.jpg" class="photo">

`;

};

/* Schule */

schoolButton.onclick = () => {

content.innerHTML = `

<h2>Meine Schule – OS Düdingen</h2>

<p>
Ich besuche die OS Düdingen. Die Schule befindet sich an der Leimackerstrasse in Düdingen.
</p>

<p>
Hier lernen mehrere hundert Schülerinnen und Schüler in verschiedenen Klassen. Meine Klassenlehrerin heisst Frau Bieri.
</p>

<p>
In der Schule lerne ich viele verschiedene Fächer. Besonders gefallen mir kreative Aufgaben und Projekte, bei denen ich etwas Neues ausprobieren kann.
</p>

<img src="images/schule.jpg" class="photo">

`;
};
