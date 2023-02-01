// 1. Criar lista de imagens de filmes e séries
var listaFilmesScifi = ['https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w','https://upload.wikimedia.org/wikipedia/en/7/75/Contact_ver2.jpg','https://flxt.tmsimg.com/assets/p8884_p_v8_ae.jpg','https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-Pôster.jpg','https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg','https://upload.wikimedia.org/wikipedia/pt/8/85/Terminator2poster.jpg','https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg','https://upload.wikimedia.org/wikipedia/pt/thumb/6/66/E_t_the_extra_terrestrial_ver3.jpg/240px-E_t_the_extra_terrestrial_ver3.jpg','https://m.media-amazon.com/images/M/MV5BZTI3YzZjZjEtMDdjOC00OWVjLTk0YmYtYzI2MGMwZjFiMzBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg','https://static.wikia.nocookie.net/horrormovies/images/a/af/Alien_poster_1979_cut.jpg'];

var listaFilmesFantasia = ['https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg','https://m.media-amazon.com/images/I/71QPnEkXygS._AC_SY550_.jpg','https://upload.wikimedia.org/wikipedia/pt/8/86/Big_Fish.jpg','https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg','https://m.media-amazon.com/images/I/519NBNHX5BL._AC_.jpg']

var listaSeries = ['https://resizing.flixster.com/8PrK7bOcPTGabSGj7Js1I6EXUyw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjE1MjEzMC53ZWJw','https://assets-prd.ignimgs.com/2022/08/01/andor-digital-keyart-payoff-v6-lg-1659357925397.jpg','https://static.wikia.nocookie.net/ptstarwars/images/8/80/MandoS2Poster.jpg','https://br.web.img3.acsta.net/c_310_420/pictures/22/11/30/19/53/5856320.jpg','https://i.pinimg.com/736x/fb/82/3d/fb823d7900bb62c2df31c694c9277ddf.jpg','https://img.elo7.com.br/product/original/26A89B7/big-poster-serie-friends-lo01-tamanho-90x60-cm-nerd.jpg','https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg','https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg']

var listaUsuario = ['https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg']

// 2. Adicionar Título às listas
var listaNomeFilmesScifi = ['Interestellar','Contact','Star Wars: Empire Strikes Back','Blade Runner','The Matrix','Terminator 2: Judgement Day','Back to The Future','E.T.','Minority Report','Alien']

var listaNomeFilmesFantasia = ['Forrest Gump', 'Fight Club', 'Big Fish', 'The Green Mile', 'The Shawshank Redemption']

var listaNomeSeries = ['Band of Brothers', 'Andor', 'The Mandalorian', 'The Last of Us', 'Dark', 'Friends', 'Stranger Things', 'Game of Thrones']

var listaNomeUsuario = ['The God Father']

// 3. trocar o for por while
//for (var i = 0; i < listaFilmesScifi.length; i++) {
//  document.write("<img class=imagens src=" + listaFilmesScifi[i] + ">");
//  document.write("<p class=subtitulos> " + listaNomeFilmesScifi[i] + "</p>");
//}

//for (var i = 0; i < listaFilmesFantasia.length; i++) {
//  document.write("<img class=imagens src=" + listaFilmesFantasia[i] + ">");
//  document.write("<p class=subtitulos> " + listaNomeFilmesFantasia[i] + "</p>");
//}

//for (var i = 0; i < listaSeries.length; i++) {
//  document.write("<img class=imagens src=" + listaSeries[i] + ">");
//  document.write("<p class=subtitulos> " + //listaNomeFilmesFantasia[i] + "</p>");
//}


document.write('<h2 class=titulosecao>FILMES SCIFI</h2>');

var i = 0
 while(i < listaFilmesScifi.length){
   document.write(`<p id="final"><img class=imagemtitulo src="${listaFilmesScifi[i]}"> ${listaNomeFilmesScifi[i]}</p>`);
   i++
 }

document.write('<h2 class=titulosecao>FILMES de FANTASIA</h2>');
               
var i = 0
while(i < listaFilmesFantasia.length){
   document.write(`<p id="final"><img class=imagemtitulo src="${listaFilmesFantasia[i]}"> ${listaNomeFilmesFantasia[i]}</p>`);
   i++
 }

document.write('<h2 class=titulosecao>SÉRIES</h2>');

var i = 0
while(i < listaSeries.length){
   document.write(`<p id="final"><img class=imagemtitulo src="${listaSeries[i]}"> ${listaNomeSeries[i]}</p>`);
   i++
 }

document.write('<h2 class=titulosecao>FILMES e SÉRIES da COMUNIDADE</h2>');

var i = 0
while(i < listaUsuario.length){
   document.write(`<p id="final"><img class=imagemtitulo src="${listaUsuario[i]}"> ${listaNomeUsuario[i]}</p>`);
   i++
 }

// 4. Criar um elemento Push
// 5. Criar condicional para evitar filmes repetidos
// 6. Implementar Botão para Adição de Imagem

var linkImagem = document.querySelector('#campoLinkImagem');
var nomeDoFilmeUsuario = document.querySelector('#campoNomeFilme');

function add(){
  var link = String(linkImagem.value);
  var nome = String(nomeDoFilmeUsuario.value);
  
  listaUsuario.push(link);
  listaNomeUsuario.push(nome);
  if(link.endsWith("jpg")){
  catalogo.innerHTML += `<p class=imagemtitulo><img src= "${listaUsuario[i]}"> ${listaNomeUsuario[i]}<\p>`;
  } else {
    alert("Só é possível enviar imagens com formato jpg");
  }
}