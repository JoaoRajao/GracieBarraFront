document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.input-group input');
    const table_body = document.querySelector('#table-body');
    const table_headings = document.querySelectorAll('thead th');
    let table_rows = [];

    fetch('clientes.json')
        .then(response => response.json())
        .then(data => {
            populateTable(data);
            table_rows = document.querySelectorAll('tbody tr');
        })
        .catch(error => console.error('Error loading JSON data:', error));

    function populateTable(data) {
        table_body.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td><img src="./assets/images/cliente1.jpg" alt="">${item.nome}</td>
                <td>Dona Clara</td>
                <td>${item.dataPagamento}</td>
                <td><p class="status ${item.statusPagamento.toLowerCase()}">${item.statusPagamento}</p></td>
                <td><strong>R$${item.valorPagamento.toFixed(2)}</strong></td>
            `;
            table_body.appendChild(row);
        });
    }

    search.addEventListener('input', searchTable);

    function searchTable() {
        table_rows.forEach((row, i) => {
            let table_data = row.textContent.toLowerCase(),
                search_data = search.value.toLowerCase();

            row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
            row.style.setProperty('--delay', i / 25 + 's');
        });

        document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
            visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
        });
    }

    table_headings.forEach((head, i) => {
        let sort_asc = true;
        head.onclick = () => {
            table_headings.forEach(head => head.classList.remove('active'));
            head.classList.add('active');

            document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
            table_rows.forEach(row => {
                row.querySelectorAll('td')[i].classList.add('active');
            })

            head.classList.toggle('asc', sort_asc);
            sort_asc = head.classList.contains('asc') ? false : true;

            sortTable(i, sort_asc);
        }
    })

    function sortTable(column, sort_asc) {
        [...table_rows].sort((a, b) => {
            let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
                second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

            return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
        })
            .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
    }
});