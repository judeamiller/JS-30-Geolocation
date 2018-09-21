const arrow = document.querySelector('.arrow');
const metricSpeed = document.querySelector('.metric-speed-value')
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data)=>{
  console.log(data);
  metricSpeed.textContent = (data.coords.speed);
  speed.textContent = ((data.coords.speed)*0.621).toPrecision(3);
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err);
  alert('You need to allow location services for this to work.')
});