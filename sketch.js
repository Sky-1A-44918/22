let isExpanded = false; // Controla o estado da aba
let contentWidth = 50;  // Largura inicial da aba
let buttons = [];       // Array para armazenar botões
let buttonHeight = 80;  // Altura dos botões
let buttonSpacing = 10; // Espaço entre os botões
let img;                // Variável para armazenar a imagem
let imgWidth;          // Largura original da imagem
let imgHeight;         // Altura original da imagem

function preload() {
  // Carrega a imagem
  img = loadImage("imgs/1.jpg");
 // Certifique-se de que o caminho está correto
}

function setup() {
    setInterval(
        window.onload = function ()
        { 
            document.getElementById("myaudio").play(); 
        },1000)
  createCanvas(1340, 764); // Ajusta o tamanho do canvas

  // Armazena a largura e altura originais da imagem
  imgWidth = img.width;
  imgHeight = img.height;
  
  // Criar os botões e escondê-los inicialmente
  let buttonLabels = [
    "O que é",
    "Faculdades",
    "Salário",
    "Vantagens",
    "Desvantagens",
    "Desafios",
    "Início"
  ];

  let buttonLinks = [
    "https://sky-1a-44918.github.io/1/", // Não há link para o primeiro botão
    "",
    "https://www.salario.com.br",
    "https://www.vantagens.com.br",
    "https://www.desvantagens.com.br",
    "https://www.desafios.com.br",
    "https://www.inicio.com.br"
  ];

  for (let i = 0; i < buttonLabels.length; i++) {
    let btn = createButton(buttonLabels[i]);
    btn.position(20, 20 + i * (buttonHeight + buttonSpacing));
    btn.size(contentWidth + 90, buttonHeight); // Aumenta a largura do botão
    btn.hide(); // Esconde os botões inicialmente
    
    // Adiciona uma função específica aos botões com links
    if (buttonLinks[i] !== "") {
      btn.mousePressed(() => {
        window.open(buttonLinks[i], "_blank"); // Abre o site em uma nova guia
      });
    }
    
    buttons.push(btn); // Armazena no array de botões
  }
}

function draw() {
  background(255);

  // Desenha a "aba" no lado esquerdo com largura variável
  fill(50, 100, 200);
  rect(0, 0, contentWidth, 764); // Aba vertical à esquerda, altura ajustada para 764
  
  if (!isExpanded) {
    // Texto do título da aba quando colapsada
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    push();
    translate(contentWidth / 2, height / 2);
    rotate(-PI / 2); // Roda o texto para alinhar verticalmente
    text("Conteúdo", 0, 0);
    pop();
    
    // Esconde os botões quando a aba está colapsada
    for (let btn of buttons) {
      btn.hide();
    }
  } else {
    // Mostra os botões quando a aba está expandida
    for (let btn of buttons) {
      btn.show();
    }
  }
  
  // Calcula a nova largura e altura da imagem
  let newWidth = imgWidth / 2; // Largura dividida por 4
  let newHeight = imgHeight / 2;
   // Altura dividida por 4
  
  // Desenha a imagem no centro do canvas, com a posição y fixada em 450
  imageMode(CENTER); // Define o modo de desenho da imagem para o centro
  image(img, width/2 , 250, newWidth, newHeight);
   // Desenha a imagem centralizada e redimensionada
  
  // Desenha o texto rotacionado em 180 graus no lado direito
  fill(0); // Cor do texto
  textSize(60);
  textAlign(CENTER, CENTER);
  push();
  translate(width - 100, height / 2); // Alinha o texto verticalmente ao centro do canvas, à direita
  rotate(PI / 2); // Rotaciona o texto em 180 graus
  text("Faculdades:", 0, 0); // Texto atualizado
  fill('blue')
  pop();
}

// Função para expandir/colapsar a aba ao clicar
function mousePressed() {
  // Verifica se o clique foi na área da aba no lado esquerdo
  if (mouseX < contentWidth) {
    isExpanded = !isExpanded; // Alterna o estado expandido

    // Define a largura da aba com base no estado
    contentWidth = isExpanded ? 200 : 50;
    
    // Reposiciona os botões se a aba estiver expandida
    if (isExpanded) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].position(20, 20 + i * (buttonHeight + buttonSpacing));
      }
    }
  }
}
