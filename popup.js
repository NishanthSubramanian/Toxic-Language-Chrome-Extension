
chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
	file: 'payload.js'
});


var t;
let renderURL = function (statusText) {
	$.get(statusText, function (response) {
		scraped_text = response;
		console.log(statusText)
		result = runPyScript(scraped_text, function (class_) {
			console.log(class_)
			console.log(1+"pyscript"+statusText);
			db.collection("extension").doc(r).get().then(function(doc){

				if(doc.exists){
					if(doc.get("isBanned"))
					{
						console.log(3+"Banned")
						chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
							file: 'payload.js'
						});
		
					}else{
						console.log(3+"notBanned")
					}
				}else{
					console.log(3+"doc doesn't exist")
					
				}
		
			});
		});
	});
	return statusText;
}

function getCurrentTabUrl(callback) {
	console.log("getcurrentTAB");
	var queryInfo = {
		active: true,
		currentWindow: true
	};

	chrome.tabs.query(queryInfo, function (tabs) {
		var tab = tabs[0];
		var url = tab.url;
		callback(url);
	});
}

function httpGet(theUrl) {
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			return xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", theUrl, false);
	xmlhttp.send();
}


function runPyScript(input, cb) {
	url = "http://0.0.0.0:8080/test";
	console.log("cb");
	var jqXHR = $.ajax({
		type: "POST",
		url: url,
		data: { string: input },
		success: function (data) { cb(data['class']); },
	});
}




var config = {
	apiKey: "AIzaSyAdagpWFmO_5Jt5vuinffmeLNwSqCZx2e4",
	authDomain: "extension-307b6.firebaseapp.com",
	databaseURL: "https://extension-307b6.firebaseio.com",
	projectId: "extension-307b6",
	storageBucket: "extension-307b6.appspot.com",
	messagingSenderId: "1075735935177"
};

firebase.initializeApp(config);
var db = firebase.firestore();

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


getCurrentTabUrl(function (url) {
	console.log(5+typeof(renderURL(url)));
	r = renderURL(url).substring(8,renderURL(url).length);


	r = r.replaceAll('/',',');
	console.log(6+r);
});








