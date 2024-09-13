function volume_sphere() {
    //Write your code here
	let r = document.getElementById("radius");
	let v = document.getElementById("volume");
	let btn = document.getElementById("submit");
	btn.addEventListener("click", function() {
		let radius = parseFloat(r.value);
		if(radius < 0 || isNaN(radius)){
			v.value = "NaN";
		} else{
			let vol = 4/3 * Math.PI * Math.pow(r.value, 3);
			v.value = v.toFixed(4);
		}
	}); 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
