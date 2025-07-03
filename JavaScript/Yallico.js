// Título principal
const titulo = document.getElementById("tituloPrincipal");
let estiloTitulo = false;
titulo.addEventListener("click", () => {
  estiloTitulo = !estiloTitulo;
  titulo.style.color = estiloTitulo ? " #00ffcc" : "";
  titulo.style.backgroundColor = estiloTitulo ? "rgba(255, 0, 255, 0.15)" : "";
  titulo.style.padding = estiloTitulo ? "10px" : "";
  titulo.style.borderRadius = estiloTitulo ? "10px" : "";
});

// Otras imágenes destacadas (con animación al hacer clic)
const imagenesIds = [
  "figuraDeku", "imgHolograma", "imgMartillo",
  "imgMetalSlug", "imgFF7", "imgZelda"
];

imagenesIds.forEach(id => {
  const img = document.getElementById(id);
  if (img) {
    img.style.cursor = "pointer";
    let activa = false;
    img.addEventListener("click", () => {
      activa = !activa;
      img.style.border = activa ? "5px solid #00ffcc" : "";
      img.style.transform = activa ? "scale(1.1)" : "";
      img.style.transition = "all 0.3s ease";
      img.style.boxShadow = activa ? "0 0 15px #00ffcc" : "";
    });
  }
});

// Párrafo de tecnología
const parrafo = document.getElementById("parrafoTecnologia");
let parrafoEstilo = false;
parrafo.addEventListener("click", () => {
  parrafoEstilo = !parrafoEstilo;
  parrafo.style.backgroundColor = parrafoEstilo ? "rgba(255, 255, 255, 0.58)" : "";
  parrafo.style.color = parrafoEstilo ? "black" : "";
  parrafo.style.padding = parrafoEstilo ? "10px" : "";
  parrafo.style.borderRadius = parrafoEstilo ? "8px" : "";
});

// Título "Datos Freek"
const tituloDatos = document.getElementById("tituloDatos");
let tituloA = false;
tituloDatos.addEventListener("click", () => {
  tituloA = !tituloA;
  tituloDatos.style.transform = tituloA ? "rotate(-5deg)" : "";
  tituloDatos.style.color = tituloA ? "#00CED1" : "";
  tituloDatos.style.fontSize = tituloA ? "2rem" : "";
  tituloDatos.style.backgroundColor = tituloA ?"#111" : "";
  tituloDatos.style.padding = tituloA ? "10px" : "";
});

//Titulo Geek News
const geekN = document.getElementById("geekN");
let tituloB = false;
geekN.addEventListener("click", () => {
  tituloB = !tituloB;
  geekN.style.transform = tituloB ? "rotate(+1deg)" : "";
  geekN.style.color = tituloB ? "#00CED1" : "";
  geekN.style.fontSize = tituloB ? "1.5rem" : "";
  geekN.style.backgroundColor = tituloB ?"rgba(255, 0, 255, 0.15)" : "";
  geekN.style.padding = tituloB ? "10px" : "";
});

// Articulos de no te lo pierdas
["noticia1", "noticia2"].forEach(id => {
  const box = document.getElementById(id);
  let noti = false;
  box.addEventListener("click", () => {
    noti = !noti;
    box.style.backgroundColor = noti ? "rgba(255, 255, 255, 0.43)" : "";
    box.style.border = noti ?  "2px solid #ccc" : "";
    box.style.boxShadow = noti ?  "2px 2px 10px rgba(255, 255, 255, 0.79)" : "";
  });
});

// Redes Sociales
document.querySelectorAll(".red").forEach(red => {
  let redes = false;
  red.addEventListener("click", (e) => {
    redes = !redes;
    e.preventDefault();
    red.style.color = redes ? "white" : "";
    red.style.backgroundColor = redes ? "rgba(255, 0, 255, 0.15)" : "";
    red.style.padding = redes ?"5px 10px" : "";
    red.style.borderRadius = redes ? "5px" : "";
  });
});