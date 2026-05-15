// $(function () {

//     $("#header").load("/includes/header.html", function () {
//         $("#menuToggle").click(function () {
//             $(".main-nav").toggleClass("show");
//         });

//     });

//     $("#footer").load("/includes/footer.html");

// });

$(function () {
    $("#header").load("/includes/header.html", function () {
        // MENU TOGGLE
        $("#menuToggle").click(function () {
            $(".main-nav").toggleClass("show");
        });
        
        // Set active class for navigation links after header is loaded
        setActiveNavLinks();
    });

    $("#footer").load("/includes/footer.html", function () {
        // Set active class for mobile nav in footer after loaded
        setActiveNavLinks();
    });
    
    // Function to set active class on both PC and mobile navigation links
    function setActiveNavLinks() {
        let currentPage = window.location.pathname.split("/").pop();
        
        // Default to home.html if empty
        if (currentPage === "" || currentPage === "mypage" || currentPage === "/") {
            currentPage = "home.html";
        }
        
        // Handle PC navigation links (.main-nav a)
        $(".main-nav a").each(function() {
            let linkHref = $(this).attr("href");
            // Extract filename from href
            let linkPage = linkHref ? linkHref.split("/").pop() : "";
            
            if (linkPage === currentPage) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
        
        // Handle mobile navigation links (.mobile-nav a)
        $(".mobile-nav a").each(function() {
            let linkHref = $(this).attr("href");
            // Extract filename from href
            let linkPage = linkHref ? linkHref.split("/").pop() : "";
            
            if (linkPage === currentPage) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }
});