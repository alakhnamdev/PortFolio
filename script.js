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
        $("#con24").show();
	}
);
$( "#close").click(
	function() {
		$("#con24").hide();
	}
);
