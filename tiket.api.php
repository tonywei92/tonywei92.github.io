<?php
class TiketCom{
	private static $_instance = null;

	public static function getInstance(){
		if(!isset($_instance)){
			self::$_instance = new TiketCom();
		}
		// if(!isset($_SESSION["api_token"])){
			$_SESSION["api_token"] = self::_getToken();
		// }
		return self::$_instance;
	}
	
	private static function curl_get($url){
//		echo $url;
		$ch = curl_init(); 
        curl_setopt($ch, CURLOPT_URL, $url); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch,CURLOPT_HTTPHEADER,array('twh:[22693453];[DecimaCode];'));
        $output = curl_exec($ch); 
        curl_close($ch);
        return $output;
	}
	
	private static function _getToken(){
		$raw = json_decode(self::curl_get("https://api-sandbox.tiket.com/apiv1/payexpress?method=getToken&secretkey=7753b640adf15a7f6646835ff1732da0&output=json"));
		return $raw->token;
    }

    public function getToken(){
    	return $_SESSION["api_token"];
    }
	

	private function request_general_api($function){
        $output = $this->curl_get("https://api-sandbox.tiket.com/general_api/" . $function . "?token=" . $this->getToken() . "&output=json");
        return $output;
    }

    private function request_flight_api($function){
        $output = $this->curl_get("https://api-sandbox.tiket.com/flight_api/" . $function . "?token=" . $this->getToken() . "&output=json");
        return $output;
    }

    private function request_search_api($function,$param){
        $output = $this->curl_get("https://api-sandbox.tiket.com/search/" . $function . $param . "&token=" . $this->getToken() . "&output=json");
        return $output;
    }

    public function getListCountry(){
    	$temp = json_decode($this->request_general_api("listCountry"));
    	$result = array();
    	foreach ($temp->listCountry as $key) {
    		$result[] = array('id'=>$key->country_id, 'value'=>trim($key->country_name));
    	}
    	
    	return $result;
    }
    public function getListAirport(){
    	$temp = json_decode($this->request_flight_api("all_airport"));
    	$result = array();
    	foreach ($temp->all_airport->airport as $key) {
    		$display = array("display" => $key->location_name . " (" . $key->airport_code . "), " . $key->airport_name) ;
    		$result[] = array_merge((array)$key,  $display);
    	}
    	
    	return $result;
    }


    public function getSearchFlights($d,$a,$date,$ret_date,$adult,$child,$infant){
    	// "http://api-sandbox.tiket.com/search/flight?d=CGK&a=DPS&date=2014-05-25&ret_date=2014-05-30&adult=1&child=0&infant=0&token=626de6cbccc25cf3f7a652fc933e49187efdbc54&v=3&output=xml";

    	$param = "?d={$d}" .
    			  "&a={$a}" .
    			  "&date={$date}" .
    			  "&ret_date={$ret_date}" .
    			  "&adult={$adult}" .
    			  "&child={$child}" .
    			  "&infant={$infant}";
    	$temp = json_decode($this->request_search_api("flight",$param));    	
    	return $temp;
    }

}