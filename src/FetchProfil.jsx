// Serviciu Profil
var linkSuccessfulGet = "link-ul json-ului";
var linkSuccessfulPost = "link-ul json-ului";
var linkTryGet = "link-ul json-ului";
var linkTryPost = "link-ul json-ului";
var linkEditProfileTryGet = "link-ul json-ului";
var linkEditProfileTryPost = "link-ul json-ului";

// Request-uri AJAX Serviciu Profil
var successfulGetReq = new XMLHttpRequest();
successfulGetReq.open("GET", linkSuccessfulGet, true);
successfulGetReq.send();
JSON.parse(successfulGetReq.responseText);

var successfulPostReq = new XMLHttpRequest();
successfulPostReq.open("POST", linkSuccessfulPost, true);
successfulPostReq.send(null);
JSON.parse(successfulPostReq.responseText);

var tryGetReq = new XMLHttpRequest();
tryGetReq.open("GET", linkTryGet, true);
tryGetReq.send();
JSON.parse(tryGetReq.responseText);

var tryPostReq = new XMLHttpRequest();
tryPostReq.open("POST", linkTryPost, true);
tryPostReq.send(null);
JSON.parse(tryPostReq.responseText);

var editProfiletryGetReq = new XMLHttpRequest();
editProfiletryGetReq.open("GET", linkEditProfileTryGet, true);
editProfiletryGetReq.send();
JSON.parse(editProfiletryGetReq.responseText);

var editProfiletryPostReq = new XMLHttpRequest();
editProfiletryPostReq.open("POST", linkEditProfileTryPost, true);
editProfiletryPostReq.send(null);
JSON.parse(editProfiletryPostReq.responseText);

// // Functii Profil
// async function profileInfo() {
//     return[
//         JSON.parse(successfulGetReq.responseText),
//         JSON.parse(successfulPostReq.responseText),
//         JSON.parse(tryGetReq.responseText),
//         JSON.parse(tryPostReq.responseText),
//     ];
// }

// async function profileEditInfo(){
//     return[
//         JSON.parse(editProfiletryGetReq.responseText),
//         JSON.parse(editProfiletryPostReq.responseText),
//     ];
// }