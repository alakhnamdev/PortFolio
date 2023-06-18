$( "#sm").click(
	function() {
		$(".hide").show();
		$("#con-imgh").show();
        $(this).hide();
        $("#sl").show();
	}
);
$( "#sl").click(
	function() {
        $(this).hide();
		$("#con-imgh").hide();
        $("#sm").show();
		$(".hide").hide();
	}
);
$( "#smr").click(
	function() {
		$(".hide").show();
        $(this).hide();
        $("#slr").show();
	}
);
$( "#slr").click(
	function() {
        $(this).hide();
        $("#smr").show();
		$(".hide").hide();
	}
);
$( "#hm").click(
	function() {
        $("#form-main").show();
	}
);
$( "#close").click(
	function() {
		$("#form-main").hide();
	}
);
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
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
