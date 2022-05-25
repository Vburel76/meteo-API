let affichage = document.getElementById('affichage')
let principale = document.getElementById('principale')
let cityId = "3031582"



fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=f7b8add7a149e97cc34ff0ede12823a5&lang=fr&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        principale.innerHTML = 
        `
        <div class="row justify-content-center">
                <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png"
                    class=" col-8 col-lg-8 border border-dark" alt="...">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">${data.city.name}</h5>
                <p class="card-text mb-0">${data.list[0].weather[0].description}</p>
                <p class="card-text">${data.list[0].main.temp}</p>
        </div>
        `

        for (let i = 1; i <= 5; i++) {
           
            affichage.innerHTML +=
                `
                <div class="col-8 col-lg-2  border border-dark bg-secondary rounded mt-4 ">
                <div class="row justify-content-center">
                    <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" class=" col-8 col-lg-12 border border-dark" alt="...">
                </div>
                    <div class="card-body text-center">
                    <h5 class="card-title">${data.city.name}</h5>
                        <p class="card-text mb-0 ">${data.list[i].weather[0].description}</p>
                        <p class="card-text">${data.list[i].main.temp}</p>
                    </div>
                </div>
               `
        }
        

        
    })