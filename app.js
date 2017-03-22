
$(function(){
	setTypeAhead();
	$('.input-daterange').datepicker({
    format: "yyyy-mm-dd"
});
});


function setTypeAhead(data){
	// alert("f");
	var airports = new Bloodhound({
	  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('airport_name','location_name', 'country_name'),
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  prefetch: {url: 'api.php?method=getAirports',
	 			cache: false}
	});
	airports.initialize();
	$('#remote_dep .typeahead, #remote_arr .typeahead ').typeahead(null, {
	  name: 'airports',
	  display: 'display',
	  source: airports,
	  templates: {
		empty: [
		      '<div class="empty-message">',
		        'Tidak tersedia',
		      '</div>'
		    ].join('\n'),
		suggestion: function(data){
			return "<div><strong>" +  data.location_name + " (" + data.airport_code + ")</strong> - " + data.airport_name + "</div>";
		}
	  }
	});

	$('#remote_dep .typeahead').bind('typeahead:select', function(ev, suggestion) {
        $('#dep').val(suggestion.airport_code);
	});
	$('#remote_arr .typeahead').bind('typeahead:select', function(ev, suggestion) {
        $('#arr').val(suggestion.airport_code);
	});


}