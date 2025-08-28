document.addEventListener('DOMContentLoaded', () => {
    const enviarBtn = document.getElementById('enviarBtn');
    if (enviarBtn) {
        enviarBtn.addEventListener('click', () => {
            const texto = document.getElementById('denunciaTexto').value;
            const originalText = enviarBtn.innerHTML;

            if (texto.length > 0) {
                enviarBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                enviarBtn.disabled = true;

                setTimeout(() => {
                    alert('Sua denúncia foi enviada. Conectando para fazer a ligação...');
                    console.log('Texto da denúncia:', texto);
                    enviarBtn.innerHTML = originalText;
                    enviarBtn.disabled = false;
                }, 2000);
            } else {
                alert('Por favor, digite sua denúncia.');
            }
        });
    }
});