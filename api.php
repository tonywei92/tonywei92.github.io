<?php
session_start();
include_once('tiket.api.php');

$api = TiketCom::getInstance();
switch ($_GET["method"]) {
	case 'getCountries':
		header('Content-type: application/json');
		echo json_encode($api->getListCountry());
		break;
	case 'getToken':
		header('Content-type: application/json');
		echo $api->getToken();
		break;
	case 'getAirports':
		header('Content-type: application/json');
		echo json_encode($api->getListAirport());
		break;
	// case 'getSearchFlights':
	// 	header('Content-type: application/json');
	// 	echo json_encode($api->getSearchFlights());
	default:
		# code...
		break;
}