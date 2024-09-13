function volume_sphere(event) {
	event.preventDefault();
	
    let r = document.getElementById("radius");
    let v = document.getElementById("volume");
    
    let radius = parseFloat(r.value);
    
    if (radius < 0 || isNaN(radius)) {
        v.value = 'NaN';
    } else {
        let vol = (4/3) * Math.PI * Math.pow(radius, 3);
        
        v.value = vol.toFixed(4);
    }
}

window.onload = function() {
    document.getElementById('submit').onclick = volume_sphere;
};

