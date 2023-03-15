let botao = document.getElementById('fechar');
let navegacao = document.getElementById('nav');
let container = document.getElementById('container');
let aberto = false;


function ativo() {
    let item = document.querySelectorAll('a#item-menu');
    const url = window.location.pathname;
    if (url.match('index.html')) {
        item[0].classList.add('active');
        item[1].classList.remove('active');
        item[2].classList.remove('active');
        item[3].classList.remove('active');
    } else if (url.match('produtos.html')) {
        item[0].classList.remove('active');
        item[1].classList.add('active');
        item[2].classList.remove('active');
        item[3].classList.remove('active');
    } else if (url.match('catalogo.html')) {
        item[0].classList.remove('active');
        item[1].classList.remove('active');
        item[2].classList.add('active');
        item[3].classList.remove('active');
    } else if (url.match('usuarios.html')) {
        item[0].classList.remove('active');
        item[1].classList.remove('active');
        item[2].classList.remove('active');
        item[3].classList.add('active');
    }
}

function abrirFechar() {
    if (aberto) {
        botao.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list bot" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>`;
        navegacao.style.display = 'none';
        navegacao.style.marginRight = '-100vh';
        navegacao.style.animationName = '';
        container.style.filter = '';
        aberto = false;
    } else {
        botao.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x bot" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>`;
        navegacao.style.display = 'block';
        navegacao.style.marginRight = '0vh';
        navegacao.style.animationName = 'mostrarMenu';
        container.style.filter = 'blur(1px)';
        aberto = true;
    }
}

function fechar() {
    if (aberto) {
        abrirFechar();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 799) {
        fechar()
        navegacao.style.display = 'block';
        navegacao.style.marginRight = '0vh';
    } else if (window.innerWidth <= 799) {
        botao.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list bot" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>`;
        navegacao.style.display = 'none';
        navegacao.style.marginRight = '-100vh';
        navegacao.style.animationName = '';
        container.style.filter = '';
        aberto = false;
    }
});