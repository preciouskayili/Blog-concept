// fetch api

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#loadNews').addEventListener('click', e => {

        url = 'json/news.json'
        document.querySelector('#loadNews').style.display = "none";
    
        const spinner = document.querySelector('.spinner-border')
        e.preventDefault()
    
        fetch(url).then((response) => {
            spinner.style.display = "block";
            console.log('Resolved', response);
            return response.json();
        }).then(data => {
            spinner.style.display = "none";
            i=0;
            data.forEach(news => {
                i++;
                document.querySelector('.col-md-9').innerHTML += `
                <section id="${news.title}">
                    <div class="card" style="margin-top: 25px;">
                        <div class="card-header bg-primary">
                            <h4 class="text-white">${news.title}</h4>
                        </div>
                        <div class="card-body">
                            <p>${news.text}</p>
                            <i class="text-center">${news.author}</i>
                        </div>
                    </div>
                </section>`
               document.querySelector('.col-md-3').innerHTML +=  `
               <div class="card-header">
                    <a href="#${news.title}">${news.title}</a>
                </div>
               `;
            })
        }).catch((err) => {
            spinner.style.display = "none";
            document.querySelector('.col-md-9').innerHTML = `
                <h1 class="text-danger">Error 404</h1>
                <h4>OOPS, sorry there was a problem while getting your information. The server is down</h4>`
            console.log('Rejected', err);
        });
    })
})
