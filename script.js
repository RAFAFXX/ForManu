$(document).ready(function() {
    var envelope = $('#envelope');
    var letterContent = $(".letter-content");
    var heartsContainer = $(".hearts");
    var hearts = $('.heart');

        // Lista original de mensagens
        var mensagensOriginais = [
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
            "Você é a parte mais bonita dos meus dias.",
            "Minha felicidade tem teu nome e sobrenome.",
            "O destino sorriu para mim no dia em que te conheci.",
            "Se amar você é um sonho, nunca quero acordar.",
            "Você é a luz que ilumina qualquer lugar onde entra.",
            "Seu sorriso é uma poesia silenciosa que encanta o mundo.",
            "Você é mais forte do que imagina e mais incrível do que acredita.",
            "A tua beleza vai além do que os olhos podem ver, ela mora na tua essência.",
            "Nunca duvide do teu valor, porque para mim você é um tesouro raro.",
            "Se eu pudesse escolher um lugar para sempre estar, escolheria teus braços.",
            "Te amar é como respirar… algo que faço sem perceber, mas que me mantém vivo.",
            "Cada segundo ao teu lado é um presente que o tempo me dá.",
            "Você é a razão pela qual meu coração bate mais forte.",
            "Tua essência é como uma chama que nunca se apaga."
        ];
    
        // Cópia da lista para controle de repetição
        let mensagensRestantes = [...mensagensOriginais];
    
        function escolherMensagem() {
            if (mensagensRestantes.length === 0) {
                mensagensRestantes = [...mensagensOriginais]; // Reinicia a lista quando todas forem lidas
            }
    
            const index = Math.floor(Math.random() * mensagensRestantes.length);
            return mensagensRestantes.splice(index, 1)[0];
        }
    
        $("#open").click(function() {
            envelope.addClass("open").removeClass("close");
    
            // Exibe uma mensagem única sem repetição
            letterContent.text(escolherMensagem());
    
            // Reinicia os corações para a animação
            hearts.each(function(index) {
                $(this).css({
                    "opacity": "0",
                    "bottom": "0px",
                    "animation": "none"
                });
            });
    
            setTimeout(() => {
                hearts.each(function(index) {
                    $(this).css({
                        "opacity": "1",
                        "bottom": "30px",
                        "animation": `floatUp ${2 + index}s ease-in-out forwards infinite`
                    });
                });
            }, 800);
        });
    
        $("#close").click(function() {
            envelope.addClass("close").removeClass("open");
    
            // Esconde os corações ao fechar o envelope
            hearts.each(function() {
                $(this).css({
                    "opacity": "0",
                    "bottom": "0px",
                    "animation": "none"
                });
            });
    
            // Limpa o texto da carta ao fechar
            setTimeout(() => {
                letterContent.text("");
            }, 500);
        });
    
        // **Correção do movimento do envelope para mantê-lo no centro**
        setInterval(() => {
            envelope.animate({ marginTop: "-5px" }, 1000).animate({ marginTop: "5px" }, 1000);
        }, 2000);
    });
    
