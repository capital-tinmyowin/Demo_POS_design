$(function () {

    $("#header").load("/includes/header.html", function () {

        // MENU TOGGLE
        $("#menuToggle").click(function () {
            $(".main-nav").toggleClass("show");
        });

    });

    $("#footer").load("/includes/footer.html");

});