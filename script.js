function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea u oracion
    //m para que afecte a multiples parrafos
    var textoCifrado = texto.replace(/e/igm,"enter"); 
    var textoCifrado = textoCifrado.replace(/o/igm,"ober"); 
    var textoCifrado = textoCifrado.replace(/i/igm,"imes"); 
    var textoCifrado = textoCifrado.replace(/a/igm,"ai"); 
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat"); 

    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textoDerecha").innerHTML= textoCifrado;
    document.getElementById("copiando").style.display = "show";
    document.getElementById("copiando").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea u oracion
    //m para que afecte a multiples parrafos
    var textoCifrado = texto.replace(/enter/igm,"e"); 
    var textoCifrado = textoCifrado.replace(/ober/igm,"o"); 
    var textoCifrado = textoCifrado.replace(/imes/igm,"i"); 
    var textoCifrado = textoCifrado.replace(/ai/igm,"a"); 
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u"); 

    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textoDerecha").innerHTML= textoCifrado;
    document.getElementById("copiando").style.display = "show";
    document.getElementById("copiando").style.display = "inherit";
}

function clipboard() {
    let contenido = document.getElementById("textoDerecha").value;
    navigator.clipboard.writeText(contenido);
    alert("Se copio");
    document.getElementById("textoDerecha").textContent = " ";
}
