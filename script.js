const locations = ['spital', 'sectie de politie', 'baza militara', 'morga', 'cimitir', 'biserica', 'parc', 'club de striptease', 'platou de filmari', 'plaja', 'stadion', 'universitate', 'corporatie', 'sat', 'Monaco', 'circuit de F1', 'service auto', 'aeroport', 'teatru de operatiuni', 'crama', 'nava spatiala', 'Zona 51', 'Slobozia', 'Vama veche', 'club de manele', 'Fetesti', 'submarin', 'petrecere corporatista', 'supermarket', 'piata', 'festival', 'car meet', 'sala de judecata', 'camera de tortura', 'shaormerie', 'sex shop', 'groapa de gunoi', 'castel bantuit', 'teatru de marionete', 'centru de fitness', 'motel', 'fabrica de bomboane', 'pizzerie', 'tunel', 'parcare subterana','ferma de animale ', 'vulcan activ', 'insula pustie', 'ruinele unei civilizatii disparute', 'casa bantuita', 'statie spatiala', 'arena de lupte medievale', 'cariera abandonata', 'catedrala gotica', 'fabrica de roboti', 'muzeul de arta moderna', 'punct vamal', 'balta de pescuit', 'penitenciar', 'Parlamentul Romaniei', 'Pentagon', 'Casa Alba', 'Atlantida', 'Marele Canion', 'oaza in desert', 'padure tropicala', 'casa de vacanta', 'buncar subteran', 'cabana montana', 'pestera', 'lacul glaciar', 'statiune de schi', 'parc tematic', 'mall', 'spital de campanie', 'stadion olimpic', 'centru de conferinte', 'parc de distractii', 'tabara de refugiati', 'observator astronomic', 'atelier de artist', 'cabana pescareasca', 'camp de lupta medieval', 'laborator subteran', 'sanatoriu', 'statie de metrou', 'oras subteran', 'padure fermecata', 'labirint', 'orphanat', 'studiou de inregistrari', 'far', 'statie de salvare', 'centrul orasului', 'plaja tropicala', 'camping', 'concert rock', 'platou de filmare SF', 'turn de veghe', 'biserica fortificata', 'azil de batrani', 'statie de autobuz', 'nava de croaziera', 'magazin de antichitati', 'cabana de vanatoare', 'fabrica abandonata', 'gara de trenuri', 'oras fantoma', 'muzeu de istorie naturala', 'atelier mecanic', 'cafenea literara', 'gradina botanica', 'templu antic', 'sala de escalada', 'oras in miniatura', 'planetariu', 'biserica ortodoxa', 'port naval', 'depozit de marfuri', 'salina', 'cartier general', 'cabana de munte', 'traseu montan', 'refugiu montan', 'banca', 'turn de observatie', 'pod', 'ferma eoliana', 'camp de lupta futurist', 'nava de razboi', 'camera de servere', 'fabrica de ciocolata', 'magazin de jucarii', 'piata de vechituri', 'casa parinteasca', 'ponton', 'strada pietonala', 'teren de golf', 'centru de reciclare', 'podgorie', 'casa la tara', 'atelier de tamplarie', 'casa memoriala', 'refugiu urban', 'casa traditionala', 'centru comercial subteran', 'parc de sculpturi', 'cimitir de masini', 'centru spa', 'statiune balneara', 'cariera de piatra', 'plaja salbatica', 'cazemata', 'far vechi', 'castel medieval', 'fortareata', 'strada ingusta', 'piata centrala', 'centrul vechi al orasului', 'biserica de lemn', 'parcare supraetajata', 'oras plutitor', 'cladire guvernamentala', 'piscina acoperita', 'salon de infrumusetare', 'studio foto', 'centrala electrica', 'statia de cercetare arctica', 'piata de flori', 'casa de pariuri', 'barca de pescuit', 'camping de lux', 'ferma solara', 'camp de antrenament', 'gradina zoologica', 'parcare auto', 'hangar', 'parc natural', 'hotel de lux', 'resedinta de vara', 'restaurant traditional', 'club de yacht', 'camping de aventura', 'garsoniera', 'spatiu coworking', 'birou notarial', 'magazin de electronice', 'atelier de pictura', 'depozit frigorific', 'ghetarie', 'patiserie', 'palat regal', 'insula privata', 'teren de tenis', 'sala de sport', 'fabrica de bere', 'ferma organica', 'sala de expozitii', 'atelier de olarit', 'teren de fotbal', 'parc eolian', 'centrul de cultura', 'complex sportiv', 'gradina de legume', 'casa din copac', 'tabara de supravietuire', 'castel de nisip', 'casa de vacanta de lux', 'parc national', 'centru de stiinte', 'centru de reabilitare', 'casa de amanet', 'casa de modă', 'atelier de sculptura', 'centru de cercetare marina', 'parc de trambuline', 'loc de joaca', 'magazin de mobila', 'bar de karaoke', 'oras universitar', 'hala industriala', 'fabrica de jucarii', 'atelier de restaurare', 'banca de sange', 'magazin de biciclete', 'depozit de alimente', 'casa de moda', 'magazin de bricolaj', 'restaurant vegan', 'bar de vinuri', 'port de agrement', 'statie de epurare', 'hala de productie', 'fabrica de haine', 'cinematograf 4D', 'parc de aventura', 'atelier de fotografie', 'bistro francez', 'camp de glamping'];


document.getElementById('gameName').addEventListener('click', function() {
    location.reload();
});

document.getElementById('addButton').addEventListener('click', function(e) {
    e.preventDefault();
    const playerNo = document.getElementById('playerNo').value.trim();
    
    if (playerNo === '') {
        alert('Adaugati numarul de jucatori');
        return;
    }

    generateForms();
});

document.getElementById('storeNames').addEventListener('click', function(e) {
    e.preventDefault();
});

document.getElementById('storeNames').addEventListener('click', storePlayerNames);

document.getElementById('newGame').addEventListener('click', newGame);

function generateForms() {
    const playerNoDiv = document.getElementById('playerNoDiv');
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
        nameInput.required = true;
        nameInput.placeholder = `Adauga numele jucatorului ${i}`;

        playerDiv.appendChild(nameLabel);
        playerDiv.appendChild(nameInput);

        container.appendChild(playerDiv);
    }

    const storeNamesButton = document.createElement('button');
    storeNamesButton.type = 'button';
    storeNamesButton.className = 'btn btn-secondary mt-3';
    storeNamesButton.id = 'storeNames';
    storeNamesButton.textContent = 'Start';
    storeNamesButton.addEventListener('click', storePlayerNames);

    container.appendChild(storeNamesButton);

    playerNoDiv.style.display = 'none';
}

const playerNames = [];

function storePlayerNames() {
    const playerNo = document.getElementById('playerNo').value;
    let allFilled = true;

    playerNames.length = 0;

    for (let i = 1; i <= playerNo; i++) {
        const playerName = document.getElementById(`playerName${i}`).value.trim();
        if (playerName === '') {
            allFilled = false;
            alert(`Completati toate campurile cu numele jucatorilor!`);
            break;
        }
        playerNames.push(playerName);
    }

    if (allFilled) {
        document.getElementById('playerNoDiv').style.display = 'none';
        document.getElementById('addButton').style.display = 'none';
        document.getElementById('playerFormsContainer').style.display = 'none';
        document.getElementById('storeNames').style.display = 'none';

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

        document.getElementById('newGame').style.display = 'block';

        console.log(playerNames);
    }
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
