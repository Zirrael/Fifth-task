
$(document).ready(function () {

	
	$("#size").val(sessionStorage.getItem('fontSize'));
	$("#color").val(sessionStorage.getItem("color"));
	$("#font-weight").val(sessionStorage.getItem('weight'));
	for (i = 0; i < $("input[name='fstyle']").length; i++) {
		if (sessionStorage.getItem('fontStyle') === $("input[name='fstyle']")[i].value) {
			$("input[name='fstyle']")[i].checked = true;
		}
	}
	$("#letter-spacing").val(sessionStorage.getItem("spacing"));
	$("#line-height").val(sessionStorage.getItem("lineHeight"));


	$(".text__paragraph").css({
		'font-size': sessionStorage.getItem('fontSize') + "px",
		"color": sessionStorage.getItem('color'),
		"font-weight": sessionStorage.getItem('weight'),
		"font-style": sessionStorage.getItem("fontStyle"),
		"letter-spacing": sessionStorage.getItem("spacing") + "px",
		"line-height": sessionStorage.getItem("lineHeight"),
	});


	$("#size").on('input', changeFontSize);
	function changeFontSize() {
		sessionStorage.setItem('fontSize', $("#size").val());
		$(".text__paragraph").css('font-size', sessionStorage.getItem('fontSize') + "px");
	}


	$("#color").change(changeColor);
	function changeColor() {
		sessionStorage.setItem('color', $("#color").val());
		$(".text__paragraph").css('color', sessionStorage.getItem('color'));
	}


	$("#font-weight").on('input', changeWeight);
	function changeWeight() {
		sessionStorage.setItem("weight", $("#font-weight").val());
		$(".text__paragraph").css("font-weight", sessionStorage.getItem('weight'));
	}


	$("input[name='fstyle']").change(changeFontStyle);
	function changeFontStyle() {
		sessionStorage.setItem("fontStyle", $("input[name='fstyle']:checked").val());
		$(".text__paragraph").css("font-style", sessionStorage.getItem('fontStyle'));
	}


	$("#letter-spacing").on('input', changeSpacing);
	function changeSpacing() {
		sessionStorage.setItem("spacing", $("#letter-spacing").val());
		$(".text__paragraph").css("letter-spacing", sessionStorage.getItem('spacing') + "px");
	}


	$("#line-height").on('input', changeLineHeight);
	function changeLineHeight() {
		sessionStorage.setItem("lineHeight", $("#line-height").val());
		$(".text__paragraph").css("line-height", sessionStorage.getItem('lineHeight'));
	}


	$("#btn").click(function () {
		$("#myForm")[0].reset()
		changeFontSize();
		changeColor();
		changeWeight();
		changeFontStyle();
		changeSpacing();
		changeLineHeight();
	})


});