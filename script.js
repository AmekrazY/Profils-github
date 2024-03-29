

const APICALL = "https://api.github.com/users/";
const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');
const Btnrecherche = document.querySelector('.btn-recherche');

async function dataGithub(utilisateur){
    const reponse = await fetch(`${APICALL}${utilisateur}`)
    const data = await reponse.json();
    console.log(data);
    creationCarte(data);
}

function creationCarte(user){
    const carteHTML = `
    <div class="carte">
        <img class="avatar" src ="${user.avatar_url}"  alt ="icone">
        <h2>${user.name}</h2>
        <ul class="cont-infos">
            <li class="followers">Followers :${user.followers}</li>
            <li class="etoiles">Repository :${user.public_repos}</li>
            <li class="bio">Bio:${user.bio}</li>
            <li class="url">Lien:<a class="lien" href="${user.html_url}">${user.html_url}</a></li>
        </ul>
    </div>`;

    affichage.innerHTML = carteHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(inpRecherche.value.length > 0){
        dataGithub(inpRecherche.value);
        inpRecherche.value ="";
    }
})
Btnrecherche.addEventListener('click', (e) => {
    e.preventDefault();
    if(inpRecherche.value.length > 0){
        dataGithub(inpRecherche.value);
        inpRecherche.value ="";
    }
})



