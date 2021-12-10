function mode_swap(event) {
	eleList = document.getElementsByTagName("*");

	for (let i = 0; i < eleList.length; i++) {
		classList = eleList[i].classList;
		if (!classList.contains("light-theme")) {
			classList.add("light-theme");
			classList.remove("dark-theme");
		} else {
			classList.remove("light-theme");
			classList.add("dark-theme");
		}
	}
}
