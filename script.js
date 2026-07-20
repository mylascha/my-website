function showContent(page) {

    let content = document.getElementById("content");


    if(page === "about") {

        content.innerHTML = `
        <h2>Über mich</h2>

        <p>
        Name: (hier deinen Namen schreiben)<br>
        Alter: (hier dein Alter schreiben)<br>
        Nationalität: (hier deine Nationalität schreiben)
        </p>
        `;

    }


    if(page === "hobby") {

        content.innerHTML = `
        <h2>Meine Hobbys</h2>

        <p>
        Hier schreibe ich über meine Hobbys.
        </p>
        `;

    }


    if(page === "family") {

        content.innerHTML = `
        <h2>Meine Familie</h2>

        <p>
        Hier erzähle ich etwas über meine Familie.
        </p>
        `;

    }


    if(page === "nationality") {

        content.innerHTML = `
        <h2>Meine Nationalität</h2>

        <p>
        Hier beschreibe ich meine Herkunft und Sprachen.
        </p>
        `;

    }


    if(page === "photos") {

        content.innerHTML = `
        <h2>Meine Fotos</h2>

        <p>
        Hier kommen später meine Bilder.
        </p>
        `;

    }


    if(page === "city") {

        content.innerHTML = `
        <h2>Meine Stadt</h2>

        <p>
        Hier kommen Informationen über meine Stadt.
        </p>
        `;

    }


    if(page === "oldcity") {

        content.innerHTML = `
        <h2>Meine alte Stadt</h2>

        <p>
        Hier erzähle ich über meine alte Stadt.
        </p>
        `;

    }


    if(page === "school") {

        content.innerHTML = `
        <h2>Meine Schule</h2>

        <p>
        Hier stelle ich meine Schule vor.
        </p>
        `;

    }

}
