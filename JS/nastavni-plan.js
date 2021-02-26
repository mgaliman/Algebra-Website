// Auto Complete
// pomocu id-a iz html-a dohvaca taj element i ubacuje ga u const
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search subjects and filter it

// Ovime vraca ono sto pretrazujemo, async returna ime kolegija
const searchSubjects = async searchText => {
    const res = await fetch("http://www.fulek.com/VUA/SUPIT/GetNastavniPlan");
    const subjects = await res.json(); //prebacio iz stringa u json

    // Get matches to current text input
    let matches = subjects.filter(subject => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return subject.label.match(regex); //Analizira dali je isto, te prikazuje tu pretragu kao autocomplete
    });

    //Ako nema nikakvih charactera u search, ostane prazan
    if(searchText.length == 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputhtml(matches);
    //Ispisuje listu istih subjecta
}

// Show results in HTML
// Funkcija koja odreduje nacin ispisa
const outputhtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match => `
            <div class = "card card-body mb-1">
                <h4>${match.label}</h4>
            </div>`
        )
        .join('');

        matchList.innerHTML = html;
    }
};

//Kada netko nesto upise pokrene se funkcija searchSubjects
search.addEventListener('input', () => searchSubjects(search.value));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sluzi za brisanje redaka
$("#tbSubject").on("click", ".delete-row", function(){
    $(this).closest("tr").remove()//Brise najblizi redak tom gumbu
 });

///////////////////////////////////////////////////////////////////////////////////////////////////////////
