function expandContentByID(divID,id2) {
    var x = document.getElementById(divID);

    if (x.style.display === "none") {
        x.style.display = "block";
    } 

    document.getElementById(id2).classList.add('active');
}

function hideContentByID(id,id2) {
    var x = document.getElementById(id);
    if (x.style.display === "block") {
        x.style.display = "none";
    } 

    document.getElementById(id2).classList.remove('active'); // required to allow for correct highlighting state
}

function toggleContentByID(id,id2) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    document.getElementById(id2).classList.toggle('active');
}

