var sampleData = "";
$(function(){
    $(".btn-checkout").click(function(e){
        alert("Checkout tidak tersedia, hanya demo");
    });
    $tabledep = $(".table-departures");
    $tableret = $(".table-returns");
    $go_det = $(".go_det");
    $ret_det = $(".ret_det");
    $.get("sample.json", function(data){
        $.each(data.departures.result, function(e,dat){
//                        console.log(dat);
            $tabledep.append(
                "<tr>" +
                "<td>" +
                "<div class='radio'>"+
                "<label>"+
                "<input type='radio' name='departure' value='" + dat.flight_id + "' checked>" +
                "<img src='" + dat.image + "' alt=''>" +
                "<span class='imgcaption'>" + dat.airlines_name + "</span>" +
                "</label>"+
                "</div>" +
                "</td>" +
                "<td class='time'>"+
                dat.simple_arrival_time +
                "</td>"+
                "<td class='time'>"+
                dat.simple_departure_time +
                "</td>"+
                "<td>"+
                "Langsung" +
                "</td>"+
                "<td class='price'>"+
                dat.price_value +
                "</td>"+
                "</tr>"
            );
        });
        $.each(data.returns.result, function(e,dat){
//                        console.log(dat);
            $tableret.append(
                "<tr>" +
                "<td>" +
                "<div class='radio'>"+
                "<label>"+
                "<input type='radio' name='departure' value='" + dat.flight_id + "' checked>" +
                "<img src='" + dat.image + "' alt=''>" +
                "<span class='imgcaption'>" + dat.airlines_name + "</span>" +
                "</label>"+
                "</div>" +
                "</td>" +
                "<td class='time'>"+
                dat.simple_arrival_time +
                "</td>"+
                "<td class='time'>"+
                dat.simple_departure_time +
                "</td>"+
                "<td>"+
                "Langsung" +
                "</td>"+
                "<td class='price'>"+
                dat.price_value +
                "</td>"+
                "</tr>"
            );
        });

        $go_det.append(
            "<p>Airport berangkat: " + data.go_det.dep_airport.business_name + ", " + data.go_det.dep_airport.city_name + " (" + data.go_det.dep_airport.airport_code + ")<br>" +
            "Airport tiba: " + data.go_det.dep_airport.business_name + ", " + data.go_det.dep_airport.city_name + " (" + data.go_det.dep_airport.airport_code + ")</p>"
        );
        $ret_det.append(
            "<p>Airport berangkat: " + data.ret_det.dep_airport.business_name + ", " + data.ret_det.dep_airport.city_name + " (" + data.ret_det.dep_airport.airport_code + ")<br>" +
            "Airport tiba: " + data.ret_det.dep_airport.business_name + ", " + data.ret_det.dep_airport.city_name + " (" + data.ret_det.dep_airport.airport_code + ")</p>"
        );

    });
})