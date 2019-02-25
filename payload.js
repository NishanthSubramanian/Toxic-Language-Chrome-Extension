// send the page title as a chrome message
// chrome.runtime.sendMessage(document.title);
window.onload = function () {
    document.body.innerHTML = "";
}

document.body.innerHTML = "";
// alert("BRO");
// "background": {
// 	"scripts": ["popup.js", "jquery-3.3.1.min.js"],
// 	"persistent": true
// },

// r = r.replaceAll('/', ',');
// alert(6 + r);
// db.collection("extension").doc(r).get().then(function (doc) {

//     if (doc.exists) {
//         if (doc.get("isBanned")) {
//             alert(3 + "Banned")
//             document.body.innerHTML = "";


//         } else {
//             alert(3 + "notBanned")

//         }
//     } else {
//         alert(3 + "doc doesn't exist")
//         result = runPyScript(scraped_text, function (class_) {
//             alert(1 + "pyscript" + statusText);
//             alert(2 + "pyscript" + typeof (class_) + class_.data);
//         });


//     }

//     // });

//     alert(4 + class_);
// });

// let renderURL = function (statusText) {
//     $.get(statusText, function (response) {
//         scraped_text = response;
//         alert(statusText)
//         // alert(scraped_text);
//         // result = runPyScript(scraped_text, function (class_) {
//         /// TODO: do something with class

//     });
//     return statusText;
// }

// function getCurrentTabUrl(callback) {
//     alert("getcurrentTAB");
//     var queryInfo = {
//         active: true,
//         currentWindow: true
//     };

//     chrome.tabs.query(queryInfo, function (tabs) {
//         var tab = tabs[0];
//         var url = tab.url;
//         callback(url);
//     });
// }
// var config = {
//     apiKey: "AIzaSyAdagpWFmO_5Jt5vuinffmeLNwSqCZx2e4",
//     authDomain: "extension-307b6.firebaseapp.com",
//     databaseURL: "https://extension-307b6.firebaseio.com",
//     projectId: "extension-307b6",
//     storageBucket: "extension-307b6.appspot.com",
//     messagingSenderId: "1075735935177"
// };

// //   const firebase = require("firebase");
// //   // Required for side-effects
// //   require("firebase/firestore");
// firebase.initializeApp(config);
// var db = firebase.firestore();
// // alert(db);
// // var ref = firebase.database().ref();
// // ref.on("value", function (snapshot) {
// // 	output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
// // });

// String.prototype.replaceAll = function (search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// };

// getCurrentTabUrl();

// getCurrentTabUrl(function (url) {
//     alert(5 + typeof (renderURL(url)));
//     r = renderURL(url).substring(8, renderURL(url).length);


//     r = r.replaceAll('/', ',');
//     alert(6 + r);

//     db.collection("extension").doc(r).get().then(function (doc) {

//         if (doc.exists) {
//             if (doc.get("isBanned")) {
//                 alert(7 + "Banned")
//                 document.body.innerHTML = "";

//             } else {
//                 alert(7 + "notBanned")
//             }
//         } else {
//             alert(7 + "doc doesn't exist")
//             db.collection("extension").doc(r).set({
//                 words: ["toxic", "obscene"],
//                 isBanned: false
//             })
//                 .then(function () {
//                     alert("Document successfully written!");
//                 })
//                 .catch(function (error) {
//                     console.error("Error writing document: ", error);
//                 });
//         }

//     });



// });

//         // "background": {
//         // 	"scripts": ["popup.js", "jquery-3.3.1.min.js"],
//         // 	"persistent": true
//         // },