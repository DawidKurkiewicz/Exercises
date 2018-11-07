fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.results.length; i++) {
            const doc = document.createElement('div')
            doc.innerHTML = data.results[i].name.first
            document.body.appendChild(doc)
        }
    })
