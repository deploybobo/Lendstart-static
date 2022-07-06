let createUUID = function uuidv4 () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
var impressionToken = createUUID()

var datalist = JSON.parse(localStorage.getItem('list'));
 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

console.log(urlParams.get('gclid'))
var aparam = null;

if(urlParams.get('msclickid') > 0 ){
    console.log(urlParams.get('msclickid'))
    aparam =  urlParams.get('msclickid')
}
if(urlParams.get('gclid')  > 0  ){
    console.log(urlParams.get('gclid'))
    aparam =  urlParams.get('gclid');
}


var formdata = {
    'url': window.location.href,
    "siteId": 136,
    "siteName": "Lendstart",
    "pageId": 12427,
    "pageName": window.location.pathname ,
    "pageVersion": {"test_description":"YrGLS0gdR4yRgpeCBLoPKQ","test_id":"YrGLS0gdR4yRgpeCBLoPKQ","version_id":"1"},
    "brandsListsInfo": datalist,
    "renderedLists": {},
    "queryParams": {"gclid": aparam},
    "impressionToken": impressionToken
}

fetch('https://out.lendstart.com/track/impression/', {
    body: JSON.stringify(formdata),
    mode : "no-cors",
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
    },
    method: "POST",
})


// $.ajax({
//     type: 'POST',
//     url: 'https://out.lendstart.com/track/impression/',
//     data: formdata,
//     headers: {"Content-Type": "application/json"},
//     crossDomain: true,
//     xhrFields: {
//         withCredentials: true
//     },
//     success: function (data, status) {
//         console.log('Data: ' + data + '\nStatus: ' + status)
//     },
//     error: function (error) {
//         console.log('Error when logging impressions:', error)

//     }
// })

