$(function() {

	//MOBILE MENU
	$(".mnu-services ul > li").click(function() {
		$("ul li ul").hide();
		$(this).toggleClass("active");
		$(this).children('ul').slideToggle();
		$(this).parent().children('li').not(this).removeClass("active");
		$(this).parent().find('.bottom-toggle').removeClass("active");
		$(this).children('.bottom-toggle').addClass("active");
		return false
	});

	//SERVICE MENU
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".mnu_wrapp").slideToggle();
		return false;
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
