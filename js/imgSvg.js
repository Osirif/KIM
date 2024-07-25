document.querySelectorAll("img.contacts__img").forEach(function (img) {
    var imgClass = img.getAttribute("class");
    var imgURL = img.getAttribute("src");

    fetch(imgURL)
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var svgDoc = parser.parseFromString(data, "image/svg+xml");
            var svg = svgDoc.querySelector("svg");

            if (imgClass) {
                svg.setAttribute("class", imgClass + " replaced-svg");
            }

            svg.removeAttribute("xmlns:a");

            if (!svg.getAttribute("viewBox") && svg.getAttribute("height") && svg.getAttribute("width")) {
                svg.setAttribute("viewBox", "0 0 " + svg.getAttribute("height") + " " + svg.getAttribute("width"));
            }

            // Copy the CSS styles from the image element to the SVG element
            var styles = getComputedStyle(img);
            Object.keys(styles).forEach(function(key) {
                svg.style[key] = styles[key];
            });

            img.parentNode.replaceChild(svg, img);
        })
        .catch(error => console.log("Error fetching SVG:", error));
});