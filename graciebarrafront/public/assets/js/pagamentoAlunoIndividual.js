document.addEventListener('DOMContentLoaded', function() {
    const paymentTableBody = document.getElementById('paymentTableBody');

    fetch('pagamentos.json')
        .then(response => response.json())
        .then(data => {
            
            const currentUserId = 'current_user_id'; 
            const userPayments = data.filter(payment => payment.id === currentUserId);
            renderPayments(userPayments);
        })
        .catch(error => console.error('Error loading payment data:', error));

    function renderPayments(payments) {
        paymentTableBody.innerHTML = '';
        payments.forEach(payment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${payment.dataPagamento}</td>
                <td>R$${payment.valorPagamento.toFixed(2)}</td>
                <td><span class="status ${payment.statusPagamento.toLowerCase()}">${payment.statusPagamento}</span></td>
            `;
            paymentTableBody.appendChild(row);
        });
    }
});