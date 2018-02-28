function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("container").style.marginLeft = "250px";
    document.getElementById("michael").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.getElementById("michael").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";
}

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {
      $('#michael').hide();
    }
    else {
      $('#michael').show();
    }
  });