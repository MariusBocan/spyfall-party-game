const locations = ['spital', 'sectie de politie', 'baza militara', 'morga', 'cimitir', 'biserica', 'parc', 'club de striptease', 'platou de filmari', 'plaja', 'stadion', 'universitate', 'corporatie', 'sat', 'Monaco', 'circuit de F1', 'service auto', 'aeroport', 'teatru de operatiuni', 'crama', 'nava spatiala', 'Zona 51', 'Slobozia', 'Vama veche', 'club de manele', 'Fetesti', 'submarin', 'petrecere corporatista', 'supermarket', 'piata', 'festival', 'car meet', 'sala de judecata', 'camera de tortura', 'shaormerie', 'sex shop', 'groapa de gunoi', 'castel bantuit', 'teatru de marionete', 'centru de fitness', 'motel', 'fabrica de bomboane', 'pizzerie', 'tunel', 'parcare subterana','ferma de animale ', 'vulcan activ', 'insula pustie', 'ruinele unei civilizatii disparute', 'casa bantuita', 'statie spatiala', 'arena de lupte medievale', 'cariera abandonata', 'catedrala gotica', 'fabrica de roboti', 'muzeul de arta moderna', 'punct vamal', 'balta de pescuit', 'penitenciar', 'Parlamentul Romaniei', 'Pentagon', 'Casa Alba', 'Atlantida', 'Marele Canion', 'oaza in desert'];

document.getElementById('gameName').addEventListener('click', function() {
    location.reload();
});

document.getElementById('addButton').addEventListener('click', function(e) {
    e.preventDefault();
})
document.getElementById('addButton').addEventListener('click', generateForms);

document.getElementById('storeNames').addEventListener('click', function(e) {
    e.preventDefault();
})
document.getElementById('storeNames').addEventListener('click', storePlayerNames);
document.getElementById('newGame').addEventListener('click', newGame);

function generateForms() {
    const playerNoDiv = document.getElementById('playerNoDiv').style.display = 'none';
    const playerNo = document.getElementById('playerNo').value;
    const container = document.getElementById('playerFormsContainer');

    container.innerHTML = '';

    for (let i = 1; i <= playerNo; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'form-group';

        const nameLabel = document.createElement('label');
        nameLabel.textContent = `Numele jucatorului ${i}.`;
        nameLabel.className = 'text-white mt-3';
        nameLabel.setAttribute('for', `playerName${i}`);
        
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'form-control my-2';
        nameInput.id = `playerName${i}`;
        nameInput.placeholder = `Adauga numele jucatorului ${i}`;

        playerDiv.appendChild(nameLabel);
        playerDiv.appendChild(nameInput);

        container.appendChild(playerDiv);
    }
    document.getElementById('storeNames').style.display = 'block';
}

const playerNames = [];

function storePlayerNames() {
    const playerNo = document.getElementById('playerNo').value;

    for (let i = 1; i <= playerNo; i++) {
        const playerName = document.getElementById(`playerName${i}`).value;
        playerNames.push(playerName);
    }

    document.getElementById('playerNoDiv').style.display = 'none';
    document.getElementById('addButton').style.display = 'none';
    document.getElementById('playerFormsContainer').style.display = 'none';
    document.getElementById('storeNames').style.display = 'none';

    // Alege spionul
    const spyIndex = Math.floor(Math.random() * playerNames.length);
    const location = locations[Math.floor(Math.random() * locations.length)];

    // Arata numele si rolul
    const namesContainer = document.getElementById('playerNamesContainer');
    namesContainer.style.display = 'block';
    namesContainer.style.marginTop = '20%';
    namesContainer.innerHTML = '';
    playerNames.forEach((name, index) => {
        const nameDiv = document.createElement('div');
        nameDiv.className = 'card bg-dark text-white my-2';
        nameDiv.style.padding = '10px';
        nameDiv.textContent = name;

        // Apasa pentru a vedea rolul
        const roleDiv = document.createElement('div');
        roleDiv.className = 'role-box bg-secondary text-white mt-2';
        roleDiv.style.padding = '10px';
        roleDiv.style.display = 'none';
        roleDiv.textContent = index === spyIndex ? 'Esti spionul!' : `Locatie: ${location}`;

        nameDiv.appendChild(roleDiv);

        
        nameDiv.addEventListener('click', () => {
            roleDiv.style.display = roleDiv.style.display === 'none' ? 'block' : 'none';
        });

        namesContainer.appendChild(nameDiv);
    });
    document.getElementById('newGame').style.display = 'block';

 console.log(playerNames);
}


function newGame() {
    const spyIndex = Math.floor(Math.random() * playerNames.length);
    const location = locations[Math.floor(Math.random() * locations.length)];

    const namesContainer = document.getElementById('playerNamesContainer');
    namesContainer.style.display = 'block';
    namesContainer.style.marginTop = '20%';
    namesContainer.innerHTML = '';
    playerNames.forEach((name, index) => {
        const nameDiv = document.createElement('div');
        nameDiv.className = 'card bg-dark text-white my-2';
        nameDiv.style.padding = '10px';
        nameDiv.textContent = name;

        const roleDiv = document.createElement('div');
        roleDiv.className = 'role-box bg-secondary text-white mt-2';
        roleDiv.style.padding = '10px';
        roleDiv.style.display = 'none';
        roleDiv.textContent = index === spyIndex ? 'Esti spionul!' : `Locatie: ${location}`;

        nameDiv.appendChild(roleDiv);

        nameDiv.addEventListener('click', () => {
            roleDiv.style.display = roleDiv.style.display === 'none' ? 'block' : 'none';
        });

        namesContainer.appendChild(nameDiv);
    });
}