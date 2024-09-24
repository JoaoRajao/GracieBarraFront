document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const popup = document.getElementById('successPopup');
    const closePopupBtn = document.getElementById('closePopup');

    form.addEventListener('submit', function(e) {
        e.preventDefault();


        const userData = {
            nome: document.getElementById('nome').value,
            endereco: document.getElementById('endereco').value,
            cpf: document.getElementById('cpf').value,
            telefone: document.getElementById('numero').value,
            email: document.getElementById('email').value,
            tipo_assinatura: parseInt(document.getElementById('assinatura').value),
            tempo_assinatura: parseInt(document.getElementById('tempo').value),
        };

        console.log("Dados a serem enviados:", userData);
        fetch('https://8080--main--tis4-gracie-barra--alex.coder.al3xdev.net/api/user/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error('Erro ao cadastrar usuário: ' + JSON.stringify(err));  // Inclui a resposta de erro detalhada
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log('Usuário cadastrado com sucesso:', data);
                setTimeout(() => {
                    showPopup();
                }, 1000);
            })
            .catch(error => {
                console.error('Erro ao cadastrar usuário:', error);
            });
    });

        closePopupBtn.addEventListener('click', hidePopup);

    function showPopup() {
        popup.classList.add('show');
    }

    function hidePopup() {
        popup.classList.remove('show');
        form.reset();
    }
});
