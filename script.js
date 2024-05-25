$("#sm").click(
	function () {
		$(".hide").show();
		$("#con-imgh").show();
		$(this).hide();
		$("#sl").show();
	}
);
$("#sl").click(
	function () {
		$(this).hide();
		$("#con-imgh").hide();
		$("#sm").show();
		$(".hide").hide();
	}
);
$("#smr").click(
	function () {
		$(".hide").show();
		$(this).hide();
		$("#slr").show();
	}
);
$("#slr").click(
	function () {
		$(this).hide();
		$("#smr").show();
		$(".hide").hide();
	}
);
$("#hm").click(
	function () {
		$("#form-main").show();
	}
);
$("#close").click(
	function () {
		$("#form-main").hide();
	}
);

let hm = document.getElementById("hmbt");
let closeBTN = document.getElementById("close")
let form = document.getElementById("form-main");
hm.addEventListener("click", () => {
	form.style.display = "block";
});

const addLinks = () => {
	let links = document.querySelectorAll("#cnbtn");
	links[0].addEventListener('click',() => {
		window.open('mailto:namdev.alakh@gmail.com');
	});
	links[1].addEventListener('click',() => {
		window.open('https://www.linkedin.com/in/alakhnamdev/');
	});
	links[2].addEventListener('click',() => {
		window.open('https://x.com/alakhnamdev');
	});
	links[3].addEventListener('click',() => {
		window.open('https://www.instagram.com/alakhnamdev');
	});
}
addLinks();

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		}
		else {
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


