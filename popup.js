    function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    }
    
    if(getCookie("kizilaygosterme")==1) {
        document.querySelector(".kizilay-popup").style.display = "none";
    } else {
        document.querySelector(".kizilay-popup").style.display = "block";
    }
    
    document.querySelector(".kizilay-close").addEventListener("click", function() {
    document.querySelector(".kizilay-wrap").style.display = "none";
    document.cookie = "kizilaygosterme=1; path=/;";
    });
