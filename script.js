$(document).ready(function() {
    var envelope = $('#envelope');
    var letterContent = $(".letter-content");
    var heartsContainer = $(".hearts");
    var hearts = $('.heart');

    // Lista de mensagens aleatórias
    var mensagens = [
         "Teus olhos guardam segredos que eu nunca canso de desvendar.",
    "Nos teus olhos verdes, encontro meu refúgio e minha paz.",
    "Tua essência é como o mar calmo refletindo o pôr do sol.",
    "Cada olhar teu é um poema que meu coração recita.",
    "Me perco na imensidão dos teus olhos e me encontro em teu amor.",
    
    "Teus cabelos são raios de sol que dançam ao vento.",
    "Cada fio dourado teu brilha como um pedaço de luz celestial.",
    "O vento brinca em teus cabelos como se quisesse roubar tua beleza.",
    "Quando o sol toca teu rosto, parece que ambos foram feitos um para o outro.",
    "O dourado dos teus cabelos ilumina até os meus dias mais cinzentos.",
    
    "Teu sorriso tem a doçura dos sonhos mais bonitos.",
    "Quando você sorri, até o tempo para para te admirar.",
    "Teu riso é a melodia que minha alma sempre quis ouvir.",
    "Teu sorriso ilumina meu coração como estrelas em noite escura.",
    "Cada sorriso teu é um presente que a vida me dá.",
    
    "Desde que te conheci, cada dia se tornou poesia.",
    "Teu toque tem a suavidade de pétalas ao vento.",
    "Tua voz acalma minha alma como uma brisa tranquila.",
    "Quando estou contigo, o mundo se colore de novas cores.",
    "Você é a harmonia perfeita no caos da minha vida.",
    
    "Se eu pudesse escolher um lugar para sempre estar, escolheria teus braços.",
    "Te amar é como respirar… algo que faço sem perceber, mas que me mantém vivo.",
    "Cada segundo ao teu lado é um presente que o tempo me dá.",
    "Se a felicidade tivesse nome, o teu seria o primeiro que eu diria.",
    "Você é a razão pela qual meu coração bate mais forte.",
    
    "Tua essência é como uma chama que nunca se apaga.",
    "Em cada detalhe teu, há algo para se encantar.",
    "Amar você é como caminhar sob a lua cheia: mágico e inesquecível.",
    "Cada gesto teu me ensina que o amor mora nos pequenos detalhes.",
    "Teu jeito ilumina minha vida como um sol de primavera.",
    
    "Quanto mais te conheço, mais me apaixono.",
    "Teu amor me fez enxergar a beleza nos dias mais simples.",
    "Teu toque me faz esquecer do mundo ao redor.",
    "Você é o único sonho do qual eu nunca quero acordar.",
    "Te amar é meu destino favorito.",
    
    "Amar você é um privilégio que agradeço todos os dias.",
    "Meu coração pertence a você, hoje e sempre.",
    "O amor que sinto por você só cresce a cada dia.",
    "Você é meu lar, meu porto seguro, minha eternidade.",
    "Se o amor tivesse forma, teria teu nome e teu sorriso.",
    
    "Quero estar contigo em todas as estações da vida.",
    "Você é a parte mais bonita dos meus dias.",
    "Minha felicidade tem teu nome e sobrenome.",
    "O destino sorriu para mim no dia em que te conheci.",
    "Se amar você é um sonho, nunca quero acordar."
    
    ];

    $("#open").click(function() {
        envelope.addClass("open").removeClass("close");

        // Seleciona uma mensagem aleatória e exibe na carta
        var mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        letterContent.text(mensagemAleatoria);

        // Reseta os corações para dentro do envelope antes da animação
        hearts.each(function(index) {
            $(this).css({
                "opacity": "0",
                "bottom": "0px",
                "animation": "none"
            });
        });

        // Aguarda a carta sair do envelope antes de iniciar a animação dos corações
        setTimeout(() => {
            hearts.each(function(index) {
                $(this).css({
                    "opacity": "1",
                    "bottom": "30px", // Começa dentro do envelope
                    "animation": `floatUp ${2 + index}s ease-in-out forwards`
                });
            });
        }, 800); // Pequeno atraso para parecer mais natural
    });

    $("#close").click(function() {
        envelope.addClass("close").removeClass("open");

        // Esconde os corações ao fechar o envelope
        hearts.each(function() {
            $(this).css({
                "opacity": "0",
                "bottom": "0px", // Retorna para dentro do envelope
                "animation": "none" // Remove animação para resetar
            });
        });

        // Limpa o texto da carta ao fechar o envelope
        setTimeout(() => {
            letterContent.text("");
        }, 500);
    });
});
$(document).ready(function() {
    var hearts = $(".hearts");
    var envelope = $("#envelope");

    $("#open").click(function() {
        envelope.addClass("open").removeClass("close");
        
        // Exibe os corações e reinicia a animação sempre que abrir
        hearts.fadeIn();
        $(".heart").each(function(index) {
            $(this).css({
                "animation": `floatUp ${3 + index}s infinite ease-in-out ${index * 0.5}s`
            });
        });
    });

    $("#close").click(function() {
        envelope.addClass("close").removeClass("open");
        
        // Esconde os corações ao fechar o envelope
        hearts.fadeOut();
        $(".heart").css("animation", "none"); // Para a animação ao fechar
    });
});

