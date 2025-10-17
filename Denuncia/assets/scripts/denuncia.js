// Seleciona os elementos do DOM
const submitBtn = document.getElementById('submitBtn');
const denunciaText = document.getElementById('denunciaText');
const modal = document.getElementById('popupModal');
const popupTitle = document.getElementById('popupTitle');
const popupMessage = document.getElementById('popupMessage');

// Função para mostrar o modal
function showPopup(title, message) {
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    modal.style.display = 'flex'; // Muda para flex para centralizar
}

// Função para esconder o modal
function hidePopup() {
    modal.style.display = 'none';
}

// Evento de clique no botão de envio
submitBtn.addEventListener('click', () => {
    const text = denunciaText.value.trim().toLowerCase();

    if (text === '') {
        alert('Por favor, escreva sua denúncia antes de enviar.');
        return;
    }

    // Verifica a mensagem específica
    if (text === 'mulher branca em perigo') {
        showPopup('ALERTA DE EMERGÊNCIA', 'A sua localização foi compartilhada. A polícia já está a caminho. Permaneça em segurança.');
    } else {
        showPopup('Obrigado!', 'Sua denúncia foi enviada com sucesso e será analisada por nossa equipe.');
    }

    // Limpa a caixa de texto
    denunciaText.value = '';

    // Fecha o modal após 5 segundos
    setTimeout(hidePopup, 10000);
});

// Fecha o modal se o usuário clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        hidePopup();
    }
});