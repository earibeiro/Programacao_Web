document.addEventListener('DOMContentLoaded', () => {
    verifyTheme();
    fetchGitHubRepos();
})

function verifyTheme(){
    const theme = localStorage.getItem('theme');
    if(theme){
        document.body.setAttribute('data-theme', theme);
    }
}

function changeTheme(){
    const theme = document.body.getAttribute('data-theme');
    console.log(theme);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);
}

function clickCard() {
    var modal = document.getElementById("contactModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function copyToClipboard(elementId) {
    var link = document.getElementById(elementId).textContent;
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = link;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Link copiado: " + link);
}

function mainNavMenu(){
    var navBar = document.querySelector(".main-navigation");
    navBar.classList.toggle("active");
}

async function fetchGitHubRepos(){
    try{
        const response = await fetch('https://api.github.com/users/earibeiro/repos');
        const data = await response.json();
        const reposContainer = document.getElementById('repos-container');

        data.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.className = 'repo-card';

            const repoName = document.createElement('h2');
            repoName.textContent = repo.name;
            repoCard.appendChild(repoName);

            const repoDescription = document.createElement('p');
            repoDescription.textContent = repo.repoDescription || 'Sem descrição';
            repoCard.appendChild(repoDescription);

            const repoLink = document.createElement('a');
            repoLink.href = repo.html_url;
            repoLink.target = '_blank';
            repoLink.textContent = 'Ver no GitHub';
            repoCard.appendChild(repoLink);

            reposContainer.appendChild(repoCard);
        });
    } catch(error) {
        console.error('Erro ao buscar repositórios no GitHub', error);
    }
}


