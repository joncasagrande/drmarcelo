
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var mapOptions = {
		zoom: 9,
		center: new google.maps.LatLng(-37.8178945, 144.9630094), // New York
		styles: [
			{
				"featureType": "administrative.province",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#f5f6fa"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#f5f6fa"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#8d93a6"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 51
					},
					{
						"visibility": "off"
					},
					{
						"color": "#dee2e4"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 30
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 40
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"lightness": -25
					},
					{
						"saturation": -97
					},
					{
						"color": "#dce6ed"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": -25
					},
					{
						"saturation": -100
					}
				]
			}
		]
	};

	var mapElement = document.getElementById('map');

	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(-37.8178945, 144.9630094),
		map: map,
		icon: 'http://unicoderbd.com/theme/html/uniland/img/marker_blue.png',
		title: 'Snazzy!'
	});
}
