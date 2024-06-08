function loadTrimData() {
    fetch('/scripts/trims.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('trim-description'); 

            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    const item = data[key];
        
                    const trimDiv = document.createElement('div');
                    trimDiv.className = 'trim';
                    trimDiv.innerHTML = `
                        <img src="../../assets/armor_trim/trim_item/${key}.png" alt="${key} Trim">
                        <h2>${key} Trim</h2>
                        <p>${item.Description}</p>
                        <p>Chance to find: <strong>${item.Chance}</strong></p>
                    `;
                    container.appendChild(trimDiv);
                }
            }
        })
        .catch(error => console.error('Error JSON loading: ', error));
}
window.onload = loadTrimData;