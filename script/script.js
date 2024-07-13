function copyToClipboard(){
    var copyText = document.getElementById(#contact-url);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Informação copiada: " + copyText.value);
}