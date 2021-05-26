document.addEventListener("DOMContentLoaded", function (event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    var thumbnailElement2 = document.getElementById("smart_thumbnail_2");
    var thumbnailElement3 = document.getElementById("smart_thumbnail_3");
    var thumbnailElement4 = document.getElementById("smart_thumbnail_4");
    var thumbnailElement5 = document.getElementById("smart_thumbnail_5");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
        }else{
            thumbnailElement.className = "";
        }
    });
    thumbnailElement2.addEventListener("click", function() {
        if (thumbnailElement2.className == "") {
            thumbnailElement2.className = "galeria_small";
        }else{
            thumbnailElement2.className = "";
        }
    });
    thumbnailElement3.addEventListener("click", function() {
        if (thumbnailElement3.className == "") {
            thumbnailElement3.className = "galeria_small";
        }else{
            thumbnailElement3.className = "";
        }
    });
    thumbnailElemen4.addEventListener("click", function() {
        if (thumbnailElement4.className == "") {
            thumbnailElement4.className = "galeria_small";
        }else{
            thumbnailElement4.className = "";
        }
    });
    thumbnailElemen5.addEventListener("click", function() {
        if (thumbnailElement5.className == "") {
            thumbnailElement5.className = "galeria_small";
        }else{
            thumbnailElement5.className = "";
        }
    });

});

