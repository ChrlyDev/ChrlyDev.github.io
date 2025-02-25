function nuevoParrafo() {
  var contenido = document.getElementById("contenido");
  var texto = document.getElementById("texto").value;
  contenido.innerHTML = contenido.innerHTML + "<p>" + texto + "</p>";
}

function nuevoTitulo() {
  var texto = document.getElementById("titulo");
  texto.innerHTML = "<h1> Nuevo titulo </h1>";
}

document.getElementById("imagen").onchange = function (evt) {
  var entradaArchivo = evt.target,
    archivos = entradaArchivo.files;
  if (FileReader && archivos && archivos.length) {
    var imagen = new FileReader();
    imagen.onload = function () {
      var etiquetaImg = document.createElement("img");
      etiquetaImg.setAttribute("src", imagen.result);
      etiquetaImg.setAttribute("width", "200px");
      etiquetaImg.setAttribute("height", "180px");
      var contenido = document.getElementById("contenido");
      contenido.appendChild(etiquetaImg);
    };
    imagen.readAsDataURL(archivos[0]);
  }
};

function imprimir() {
  var divContents = document.getElementById("contenido").innerHTML;
  var a = window.open("", "", "height=500, width=500");
  a.document.write("<html>");
  a.document.write(
    '<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />'
  );
  a.document.write("<body > <h1>Resultado</h1> <br>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
}

function crearEnlace(href, texto) {
  var contenido = document.getElementById("contenido");
  href = document.getElementById("hrefInput").value;
  texto = document.getElementById("textoInput").value;

  if (!href || !texto) {
    window.alert("Debe proporcionar una URL y un texto para el enlace.");
    return;
  }

  contenido.innerHTML = contenido.innerHTML + "<a target='_blank' href='" + href + "'>" + texto + "</a>";
}
