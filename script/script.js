document.addEventListener('DOMContentLoaded', () => {
    verifyTheme();
    
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
