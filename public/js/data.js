document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn1').addEventListener('click', function () {
        fetch('http://localhost:3000/fetch-data')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
            alert('データを取得しました！');
            const tableBody = document.querySelector('#data-table tbody');
        
            if(data.comas) {
                // コマ表のデータを挿入
                data.comas.forEach(rowData => {
                    const row = document.createElement('tr');

                    Object.values(rowData).forEach(value => {
                        const cell = document.createElement('td');
                        cell.textContent = value;
                        row.appendChild(cell);
                    });

                    tableBody.appendChild(row);
                });
            }   
            else{
                console.error('comas is undefined');
            }
        })

        .catch(error => {
            console.error('Error:', error);
        });
    });
});