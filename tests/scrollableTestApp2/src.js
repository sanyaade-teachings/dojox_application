require(["dojox/app/main","dojox/app/utils/configUtils",  "dojox/json/ref", "dojo/sniff"],
	function(Application, configUtils, json, has){
	var isTablet = false;
	var configurationFile = "./config-test.json";
	if(window.innerWidth > 600){
		isTablet = true;
	}
	require(["dojo/text!"+configurationFile], function(configJson){
		var hasList = {};
		hasList["tablet"] = isTablet;
		hasList["phone"] = !isTablet;
		hasList["notIE"] = !has("ie");
		var config = configUtils.configProcessHas(json.fromJson(configJson),hasList);
		console.log("back from configProcessHas has config = ",config);
		config.isTablet = isTablet;
		Application(config);
	});

/*
	var configurationFile = "./config-phone.json";
	if(window.innerWidth > 600){
		configurationFile = "./config-tablet.json";
		isTablet = true;
	}

	require(["dojo/text!"+configurationFile], function(configJson){
		var config = json.fromJson(configJson);
		config.isTablet = isTablet;
		Application(config);
	});
*/
});
