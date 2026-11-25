
function carregarSaudacao() {
    const data = new Date();
    const hora = data.getHours();
    const texto = document.getElementById('saudacao');

    if (hora >= 5 && hora < 12) texto.innerText = "Bom dia! ☀️";
    else if (hora >= 12 && hora < 18) texto.innerText = "Boa tarde! ☕";
    else texto.innerText = "Boa noite! 🌑";
}


function toggleQR() {
    var qrBox = document.getElementById("qr-area");
    var btn = document.querySelector(".btn-qr");
    
    if (qrBox.style.display === "block") {
        qrBox.style.display = "none";
        btn.innerHTML = '<i class="fa-solid fa-qrcode"></i> Mostrar QR Code';
    } else {
        qrBox.style.display = "block";
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i> Esconder QR Code';
    }
}


function copiarPix() {
    var texto = document.getElementById("chave-pix").innerText;
    
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).then(() => {
            mostrarToast();
        });
    } else {
        mostrarToast();
    }
}

function mostrarToast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

carregarSaudacao();