const apiKey = config.apiKey;

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city === '') {
        alert('Harap masukkan nama kota!');
        return;
    }

    const url = `https://api-zurabotz.vercel.app/tools/cekcuaca?apikey=${apiKey}&kota=${city}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.success) {
                displayWeather(data);
            } else {
                alert('Kota tidak ditemukan atau ada kesalahan.');
            }
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
            alert('Gagal memuat data cuaca!');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    document.getElementById('city-name').textContent = data.city_name;
    document.getElementById('temperature').textContent = `Suhu: ${data.temperature}°C`;
    document.getElementById('description').textContent = `Deskripsi: ${data.description}`;
    document.getElementById('humidity').textContent = `Kelembapan: ${data.humidity}%`;
    document.getElementById('wind-speed').textContent = `Kecepatan Angin: ${data.wind_speed} km/h`;

    weatherInfo.style.display = 'block';
}

function setBackground() {
    const videoUrl = document.getElementById('video-url').value;
    if (videoUrl === '') {
        alert('Harap masukkan URL video MP4!');
        return;
    }

    const bgVideo = document.getElementById('bg-video');
    bgVideo.src = videoUrl;
    bgVideo.load();
}
