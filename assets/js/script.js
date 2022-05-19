function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: -28.024, lng: 140.887 },
    });
    const infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });
   let markerpos={
       position: new google.maps.LatLng(59.85819839999999, 17.646541800000022),
       map:map
   }

   let markerpos2={
    position: new google.maps.LatLng(40.85819839999999, 17.646541800000022),
    map:map
}
  
  let marker = new google.maps.Marker(markerpos)
  let marker2= new google.maps.Marker(markerpos2)
    }