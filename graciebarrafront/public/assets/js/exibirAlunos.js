document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('alunosTableBody');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const editModal = document.getElementById('editModal');
    const deleteModal = document.getElementById('deleteModal');
    const successModal = document.getElementById('successModal');
    const editForm = document.getElementById('editForm');
    const cancelEdit = document.getElementById('cancelEdit');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    let currentAlunos = [];

    function renderAlunos(alunos) {
        tableBody.innerHTML = '';
        alunos.object.forEach(aluno => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td></td>
                <td>${aluno.cpf}</td>
                <td>${aluno.telefone}</td>
                <td>${aluno.email}</td>
                <td>${aluno.tempo_assinatura}</td>
                <td>${aluno.tipo_assinatura}</td>
                <td>
                    <button class="btn-action btn-edit" data-id="${aluno.id}"><i class="fas fa-edit"></i></button>
                    <button class="btn-action btn-delete" data-id="${aluno.id}"><i class="fas fa-trash-alt"></i></button>
                </td>
            `;
            tableBody.appendChild(row);
        });


        document.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', () => openEditModal(btn.dataset.id));
        });
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', () => openDeleteModal(btn.dataset.id));
        });
    }

    function searchAlunos() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredAlunos = currentAlunos.filter(aluno =>
            aluno.nome.toLowerCase().includes(searchTerm) ||
            aluno.cpf.includes(searchTerm) ||
            aluno.email.toLowerCase().includes(searchTerm)
        );
        renderAlunos(filteredAlunos);
    }

    function openEditModal(id) {
        const aluno = currentAlunos.object.find(a => a.id === id);
        if (aluno) {
            document.getElementById('editId').value = aluno.id;
            document.getElementById('editNome').value = aluno.nome;
            document.getElementById('editCpf').value = aluno.cpf;
            document.getElementById('editNumero').value = aluno.telefone;
            document.getElementById('editEmail').value = aluno.email;
            editModal.style.display = 'block';
        }
    }

    function openDeleteModal(id) {
        confirmDelete.dataset.id = id;
        deleteModal.style.display = 'block';
    }

    function showSuccessModal(message) {
        document.getElementById('successMessage').textContent = message;
        successModal.style.display = 'block';
    }

    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const id = document.getElementById('editId').value;
        const alunoData = {
            nome: document.getElementById('editNome').value,
            cpf: document.getElementById('editCpf').value,
            telefone: document.getElementById('editNumero').value,
            email: document.getElementById('editEmail').value,
            endereco:'dasdasd',
            tipo_assinatura: 1,
            tempo_assinatura: 1,
        };

        fetch(`https://8080--main--tis4-gracie-barra--alex.coder.al3xdev.net/api/user/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alunoData)
        })
            .then(response => response.json())
            .then(data => {

                const index = currentAlunos.object.findIndex(a => a.id === id);
                if (index !== -1) {
                    currentAlunos.object[index] = alunoData;
                    renderAlunos(currentAlunos);
                }
                editModal.style.display = 'none';
                showSuccessModal('Dados do aluno alterados com sucesso!');
            })
            .catch(error => console.error('Error updating data:', error));
    });

    confirmDelete.addEventListener('click', function() {
        const id = this.dataset.id;

        fetch(`https://8080--main--tis4-gracie-barra--alex.coder.al3xdev.net/api/user/delete/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {

                    //currentAlunos = currentAlunos.object.filter(a => a.id !== id);
                    for (let i = 0; i < currentAlunos.object.length; i++) {
                        if (currentAlunos.object[i].id == id) {
                            currentAlunos.object.splice(i, 1);
                            break;
                        }
                    }
                    renderAlunos(currentAlunos);
                    deleteModal.style.display = 'none';
                    showSuccessModal('Aluno excluído com sucesso!');
                }
            })
            .catch(error => console.error('Error deleting data:', error));
    });

    cancelEdit.addEventListener('click', () => editModal.style.display = 'none');
    cancelDelete.addEventListener('click', () => deleteModal.style.display = 'none');
    closeSuccessModal.addEventListener('click', () => successModal.style.display = 'none');

    searchButton.addEventListener('click', searchAlunos);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchAlunos();
        }
    });


    fetch('https://8080--main--tis4-gracie-barra--alex.coder.al3xdev.net/api/user/list')
        .then(response => response.json())
        .then(data => {
            currentAlunos = data;
            renderAlunos(currentAlunos);
        })
        .catch(error => console.error('Error loading API data:', error));
});
