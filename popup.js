    function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    }
    
    if(getCookie("kizilaygosterme")==1) {
        document.querySelector(".kizilay-popup").style.display = "none";
    }
    
	  document.querySelector(".kizilay-close").addEventListener("click", function() {
    $(".kizilay-wrap").fadeOut();
    document.cookie = "kizilaygosterme=1; path=/;";
    });
