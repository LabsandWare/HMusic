(function() {

  function collapseNavbar() {
    $(".navbar").offset().top>50?$("fixed-top").addClass("top-nav-collapse"): $("fixed-top").removeClass("top-nav-collapse");
  }
  
  $(window).scroll(collapseNavbar),
  $(document).ready(collapseNavbar),
  $(function() {
      $("a.page-scroll").bind("click", function(e) {
        console.log("I am wealthy and fuckinly rich");
        var t = $(this);
        $("html, body").stop().animate({
          scrollTop: $(t.attr("href")).offset().top
        }, 
          1500, "easeInOutExpo"), e.preventDefault()
      })
  });

  $("#scroller").simplyScroll();

  function initMap() {

    var myLatLng = {lat:6.642907, lng:3.342938}

    var e = {
        zoom: 15,
        center:myLatLng,
        disableDefaultUI:!0,
        scrollwheel:!1,
        draggable:!1,
        styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ]
    }
    t = document.getElementById("map");
    var map = new google.maps.Map(t, e);

    marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Harmonix Music'
    })
  }

  var map = null;
  google.maps.event.addDomListener(window, "load", initMap),
  google.maps.event.addDomListener(window, "resize", function() {
      map.setCenter(new google.maps.LatLng(6.642907, 3.342938))
  })

}());
