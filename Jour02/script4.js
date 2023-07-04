window.addEventListener("scroll", function() {
    var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    var footer = document.getElementById("footer");

    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});
