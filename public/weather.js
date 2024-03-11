let cityName = document.getElementById('cityName');
let city = document.getElementById('city');
let temp1 = document.getElementById('temp1');
let tempimage = document.getElementById('tempimage');
let calender = document.getElementById('calender');

let fetchDetails = async () => {
    if (cityName.value.length == 0) {
        alert("Please enter a valid City Name");
    } else {
        // api fetch
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response = await fetch(url)
        let data = await response.json()
        city.innerText = `${data.name}, ${data.sys.country}`
        calender.innerText = ` ${new Date().toLocaleString()}`;
        temp1.innerHTML = `<h1>${data.main.temp}<sup>o</sup>C</h1>`
        if (data.main.temp > 30) {
            tempimage.src = "sun-159392_1280.jpg";
        } else if (data.main.temp >= 20 && data.main.temp < 30) {
            tempimage.src = "https://e7.pngegg.com/pngimages/357/376/png-clipart-cloud-sunlight-sun-with-clouds-sun-illustration-computer-wallpaper-smiley.png";
        } else if (data.main.temp < 20 && data.main.temp > 10) {
            tempimage.src = "https://i.pinimg.com/736x/50/2a/56/502a5675fdf54087a3c5644ed8f883bf.jpg";
        } else if (data.main.temp < 10) {
            tempimage.src = "https://static.concretenetwork.com/photo-gallery/images/550x550Exact_0x4/site_26/cold-weather-concrete_2919.jpg";
        }
    }
}

