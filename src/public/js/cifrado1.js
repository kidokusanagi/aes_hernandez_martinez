var mensaje;


function leerArchivo(e) {
    const archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    const lector = new FileReader();
    lector.onload = function(e) {
        mensaje = e.target.result;
        console.log(mensaje)
    };
    lector.readAsText(archivo, "UTF-8");
    
}
document.querySelector('#archivo1')
.addEventListener('change', leerArchivo, false);

function desencriptar () {
    var extdpermitidas =/(.txt)$/i;
    if(document.getElementById('archivo1').value!=""){   
        if(extdpermitidas.exec(document.getElementById('archivo1').value)){  
            if(document.getElementById('contraseña').value.length == 16){
                const a = document.createElement("a");
                var Password=document.getElementById('contraseña').value
                console.log(Password)
                const cifrado = CryptoJS.AES.decrypt(mensaje,Password);
                blob = new Blob([cifrado.toString(CryptoJS.enc.Utf8)], {type: "octet/stream"}),
                url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = 'mensajeDecifrado.txt';
                a.click();
                window.URL.revokeObjectURL(url);
            }else{
                alert('la contraseña debe de ser de 16 caracteres')
            }
        }else{
            alert('asegurese de elegio un archivo .txt')
        }
    }else{
        alert('Elige un arichivo')
    }
};

function encriptar () {
    var extdpermitidas =/(.txt)$/i;
    if(document.getElementById('archivo1').value!=""){   
        if(extdpermitidas.exec(document.getElementById('archivo1').value)){  
            if(document.getElementById('contraseña').value.length == 16){
                const a = document.createElement("a");
                var Password=document.getElementById('contraseña').value
                console.log(Password)
                const cifrado = CryptoJS.AES.encrypt(mensaje,Password);
                blob = new Blob([cifrado], {type: "octet/stream"}),
                url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = 'mensajeCifrado.txt';
                a.click();
                window.URL.revokeObjectURL(url);
            }else{
                alert('la contraseña debe de ser de 16 caracteres')
            }
        }else{
            alert('asegurese de elegio un archivo .txt')
        }
    }else{
        alert('Elige un arichivo')
    }
};