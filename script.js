$(document).ready(function () {
    $(".mobile-icon").on("click", function () {
        $(".links-list").toggleClass("active");
        $(this).toggleClass("open");
    });
});