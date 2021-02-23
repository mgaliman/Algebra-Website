// Auto Complete

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search subjects and filter it
const searchSubjects = async searchText => {
    const res = await fetch("http://www.fulek.com/VUA/SUPIT/GetNastavniPlan");
    const subjects = await res.json();

    // Get matches to current text input
    let matches = subjects.filter(subject => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return subject.label.match(regex);
    });

    if(searchText.length == 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputhtml(matches);
}

// Show results in HTML
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

search.addEventListener('input', () => searchSubjects(search.value));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

$("#tbSubject").on("click", ".delete-row", function(){
    $(this).closest("tr").remove()
 });

///////////////////////////////////////////////////////////////////////////////////////////////////////////