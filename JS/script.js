// function mode_swap(event) {
// 	eleList = document.getElementsByTagName("*");

// 	for (let i = 0; i < eleList.length; i++) {
// 		classList = eleList[i].classList;
// 		if (!classList.contains("light-theme")) {
// 			classList.add("light-theme");
// 			classList.remove("dark-theme");
// 		} else {
// 			classList.remove("light-theme");
// 			classList.add("dark-theme");
// 		}
// 	}
// }

// make_form();
// formButton = document.querySelector("#input");

// formButton.addEventListener("click", (e) => {
// 	if (document.querySelector("input") == null) {
// 		clear_page();
// 		make_form();
// 	}
// });

function validateForm() {
	var name = document.forms["myForm"]["name"];
	var email = document.forms["myForm"]["email"];
	var message = document.forms["myForm"]["message"];

	if (name.value == "") {
		document.getElementById("name").innerHTML = "Please enter a valid name";
		name.focus();
		return false;
	} else {
		document.getElementById("name").innerHTML = "";
	}

	if (email.value == "") {
		document.getElementById("email").innerHTML =
			"Please enter a valid email address";
		email.focus();
		return false;
	} else {
		document.getElementById("email").innerHTML = "";
	}

	if (email.value.indexOf("@", 0) < 0) {
		document.getElementById("email").innerHTML =
			"Please enter a valid email address";
		email.focus();
		return false;
	}

	if (email.value.indexOf(".", 0) < 0) {
		document.getElementById("email").innerHTML =
			"Please enter a valid email address";
		email.focus();
		return false;
	}

	if (message.value == "") {
		document.getElementById("msg").innerHTML = "Please enter a valid message";
		message.focus();
		return false;
	} else {
		document.getElementById("msg").innerHTML = "";
	}

	return true;
}
