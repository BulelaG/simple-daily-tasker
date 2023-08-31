let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

function auth() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (email === "admin@gmail.com" && password === "user") {
		location = location['href'];

	} else {
		alert("Invalid information");
		return;
	}

}

window.location.replace("upload.html");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});
