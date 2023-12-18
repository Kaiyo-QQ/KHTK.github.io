function home() {
    var backhome = document.getElementById('openchatbox');
    if (backhome.className == "openchatbox") {
        backhome.className += "responsive";
    } else {
        backhome.className = "openchatbox";
    }
}