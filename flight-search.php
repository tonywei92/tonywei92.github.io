<?php
//include_once("tiket.api.php");
//$api = TiketCom::getInstance();
//$flights = $api->getSearchFlights($_GET["dep"], $_GET["arr"], $_GET["start"], $_GET["return"], $_GET["adult"], $_GET["child"], $_GET["infant"]);
//$departures = $flights->departures->result;
//$return = $flights->returns->result;

?>
<html>
	<head>
		<title>TiketDemo</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		<script src="bootstrap-datepicker.min.js"></script>
		<link rel="stylesheet" href="bootstrap-datepicker3.standalone.min.css">
		<script src="typeahead.bundle.min.js"></script>
		<link rel="stylesheet" href="examples.css">
<!--		<script src="app.js"></script>-->
        <script src="result.js"></script>-->
        <style>
            .spacer{
                height: 100px;
            }
        </style>
	</head>
	<body>
		<div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h3>Detail kepergian</h3>
                    <div class="go_det">

                    </div>

                    <h3>Detail Kepulangan</h3>
                    <div class="ret_det">

                    </div>
                </div>
            </div>
            <br>
			<div class="row">
				<div class="col-xs-12 col-sm-6">
                    <form action="">
                        <table class='table table-hover table-departures'>
                            <thead>
                                <tr>
                                    <th>Pesawat</th>
                                    <th>Pergi</th>
                                    <th>Tiba</th>
                                    <th>Transit</th>
                                    <th>Harga</th>
                                </tr>
                            </thead>
                            <tbody>
<!--                                <tr>-->
<!--                                    <td>-->
<!--                                        <div class="radio">-->
<!--                                            <label>-->
<!--                                                <input type="radio" name="departure" value="" checked> <img src="https://cdn01.tiket.photos/images/flight/logo/icon_lion.png" alt="">-->
<!--                                                <span class="imgcaption">Lion</span>-->
<!--                                            </label>-->
<!--                                        </div>-->
<!--                                    </td>-->
<!--                                    <td class="time">7.20</td>-->
<!--                                    <td class="time">10.20</td>-->
<!--                                    <td>Langsung</td>-->
<!--                                    <td class="price">Rp.800.000</td>-->
<!--                                </tr>-->
                            </tbody>
                        </table>
                    </form>
			    </div>
                <div class="col-xs-12 col-sm-6">
                    <form action="">
                        <table class='table table-hover table-returns'>
                            <thead>
                            <tr>
                                <th>Pesawat</th>
                                <th>Pergi</th>
                                <th>Tiba</th>
                                <th>Transit</th>
                                <th>Harga</th>
                            </tr>
                            </thead>
                            <tbody>
<!--                            <tr>-->
<!--                                <td>-->
<!--                                    <div class="radio">-->
<!--                                        <label>-->
<!--                                            <input type="radio" name="departure" value="" checked> <img src="https://cdn01.tiket.photos/images/flight/logo/icon_lion.png" alt="">-->
<!--                                            <span class="imgcaption">Lion</span>-->
<!--                                        </label>-->
<!--                                    </div>-->
<!--                                </td>-->
<!--                                <td class="time">7.20</td>-->
<!--                                <td class="time">10.20</td>-->
<!--                                <td>Langsung</td>-->
<!--                                <td class="price">Rp.800.000</td>-->
<!--                            </tr>-->
                            </tbody>
                        </table>
                    </form>
                </div>
                <div class="row text-center">
                    <button class="btn-primary btn-checkout btn-lg">Checkout</button>
                </div>
		    </div>
            <div class="spacer">

            </div>
	    </div>
	</body>
</html>