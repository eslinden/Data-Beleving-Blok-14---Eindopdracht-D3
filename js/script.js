$(document).ready(function(){
	// Hoogte en breedte variablen van het SVG element.
	var width = 600,
		height = 400;

	// Maak het SVG element aan en zet de hoogte en breedte.
	var svg = d3.select('#kaart').append('svg')
		.attr('width', width)
		.attr('height', height);

	// Maak een group aan.
	var group = svg.append('g');

	// Maak een platte kaart projectie.
	var projection = d3.geo.mercator()
						.scale(350)
			     		.translate([170, 630]);

	/* Selecteer het 'group' element, laadt alle data van de GeoJSON, per 'Feature' intern in het 'group' element.
	   Voeg een 'path' element toe aan het 'group' element en vul het attribuut 'd' van het 'path' element met de
	   coördinaten uit de GeoJSON dataset. */
	group.selectAll()
		 .data(geoJsonData.features)
			.enter()
				.append('path')
					.attr('d', d3.geo.path().projection(projection))
					.attr('fill', function(d){
						// Geef de landen een kleur gebaseerd op de data.
						if(d.fill == 1) return '#fcbed0';
						if(d.fill == 2) return '#f292ac';
						if(d.fill == 3) return '#e86787';
						if(d.fill == 4) return '#dd3b63';
						if(d.fill == 5) return '#d30f3e';
						else return '#515151';
					});
});