// Inject the payload.js script into the current tab after the popout has loaded
// window.addEventListener('load', function (evt) {
// 	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
// 		file: 'payload.js'
// 	});;
// });
// window.addEventListener('', function (evt) {
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// chrome.tabs.sendMessage(tabs[0].id, { data: "BULL" }, function (response) {
// chrome.tabs.query({ active: true, currentWindow: true }, function () {
// window.addEventListener("beforeunload", function (event) {
// 	console.log("sadf")

chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
	file: 'payload.js'
	//your code goes here on location change 
});

// });
// chrome.tabs.onUpdated.addListener(function(){
// 	console.log("LAS");
// 	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
// 		file: 'payload.js'
// 	});
// chrome.extension.getBackgroundPage().window.onload = function(){
// 	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
// 		file: 'payload.js'
// });
// });

// });
// console.log('changed data in page');
// console.log('success');
// document.body.innerHTML = '';
// });
// });
// });
var t;
let renderURL = function (statusText) {
	$.get(statusText, function (response) {
		scraped_text = response;
		console.log(statusText)
		// console.log(scraped_text);
		result = runPyScript(scraped_text, function (class_) {
			console.log(class_)
			/// TODO: do something with class
			console.log(1+"pyscript"+statusText);
			// console.log(2+"pyscript"+typeof(class_)+class_.data);
			db.collection("extension").doc(r).get().then(function(doc){

				if(doc.exists){
					if(doc.get("isBanned"))
					{
						console.log(3+"Banned")
						chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
							file: 'payload.js'
							//your code goes here on location change 
						});
		
					}else{
						console.log(3+"notBanned")
					}
				}else{
					console.log(3+"doc doesn't exist")
					
				}
		
			});

			// console.log("4" + result);
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
// getCurrentTabUrl(function (url) {
// 	renderURL(url);
// });

// console.log(scraped_text);
// result = runPyScript(scraped_text);
// console.log('Got back ' + result);



// document.addEventListener('DOMContentLoaded', function () {
// 	console.log("fsd");

// 	getCurrentTabUrl(function (url) {
// 		renderURL(url);
// 	});
// });

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
		// error: function(xhr, ajaxOptions, thrownError) { alert(xhr.responseText); }
	});
}

//   document.addEventListener('DOMContentLoaded', function() {
// 	getCurrentTabUrl(function(url) {
// 	  renderURL(url); 
// 	});
//   });



var config = {
	apiKey: "AIzaSyAdagpWFmO_5Jt5vuinffmeLNwSqCZx2e4",
	authDomain: "extension-307b6.firebaseapp.com",
	databaseURL: "https://extension-307b6.firebaseio.com",
	projectId: "extension-307b6",
	storageBucket: "extension-307b6.appspot.com",
	messagingSenderId: "1075735935177"
};

//   const firebase = require("firebase");
//   // Required for side-effects
//   require("firebase/firestore");
firebase.initializeApp(config);
var db = firebase.firestore();
// console.log(db);
// var ref = firebase.database().ref();
// ref.on("value", function (snapshot) {
// 	output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
// });

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


getCurrentTabUrl(function (url) {
	console.log(5+typeof(renderURL(url)));
	r = renderURL(url).substring(8,renderURL(url).length);


	r = r.replaceAll('/',',');
	console.log(6+r);

	// db.collection("extension").doc(r).get().then(function(doc){

	// 	if(doc.exists){
	// 		if(doc.get("isBanned"))
	// 		{
	// 			console.log(7+"Banned")

	// 		}else{
	// 			console.log(7+"notBanned")
	// 		}
	// 	}else{
	// 		console.log(7+"doc doesn't exist")
			
	// 	}

	// });


	// db.collection("extension").doc(r).set({
	// 	words: ["toxic", "obscene"],
	// 	isBanned: false
	// })
	// 	.then(function () {
	// 		console.log("Document successfully written!");
	// 	})
	// 	.catch(function (error) {
	// 		console.error("Error writing document: ", error);
	// 	});
});








