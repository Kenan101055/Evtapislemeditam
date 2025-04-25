let API = 'https://pokeapi.co/api/v2/pokemon/pikachu';
let a = document.getElementById('div');
async function c() { 
    let b = await fetch(API);
    let c = await b.json();
    console.log(c);
    a.innerHTML += `
    <ul id="ul">
        ${c.abilities.map(element => `
            <li id="li">Ability Name: ${element.ability.name}</li>
            <li id="li">Ability URL: ${element.ability.url}</li>
            <li id="li">Is Hidden: ${element.is_hidden}</li>
            <li id="li">Slot: ${element.slot}</li>
        `).join('')}
        <li id="li">Base Experience: ${c.base_experience}</li>
        <ul id="ul">
            <li id="li">Cry (Latest): ${c.cries.latest}</li>
            <li id="li">Cry (Legacy): ${c.cries.legacy}</li>
        </ul>
    </ul>
    `;
}
c();

