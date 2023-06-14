let weather = {
    apikey: "87f7fe0cfa9bc4487928581a66b7a65f",
    fetchHavaDurumu : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=tr&appid=" + this.apikey
        ).then((response) => response.json()
        .then((data) => this.dataHavaDurumu(data)));
    },

    dataHavaDurumu : function(data){
        var {name} = data;
        var {description} = data.weather[0];
        var {temp, humidity} = data.main;
        var {speed} = data.wind;

        document.querySelector(".şehir").innerText = name + " İçin Hava Durumu";
        document.querySelector(".durum").innerText = description;
        document.querySelector(".derece").innerText = temp + "°C";
        document.querySelector(".nem").innerText = "Nem : " + humidity + "%";
        document.querySelector(".rüzgar").innerText = "Rüzgar Hızı : " + speed + " km/s";
    },

    arama: function(){
        this.fetchHavaDurumu(document.querySelector(".arama-motoru").value);
    },
}

    document.querySelector(".arama button").addEventListener("click", function(){
        weather.arama();
    });

    document.querySelector(".arama-motoru").addEventListener("keyup", function(e){
        if(e.key == "Enter"){
            weather.arama();
        }
    });

    weather.fetchHavaDurumu("İstanbul");