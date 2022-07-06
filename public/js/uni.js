// var client_ip = geoplugin_request()

fetch('https://ipapi.co/json/')
    .then((response) => response.json())
    .then(function (data) {
        var client_ip = data.ip ;
        localStorage.setItem('ip ',JSON.stringify(data.ip) )


        fetch(`http://unicorn.dock-stg.trafficpointltd.com/api/v1/sites/136/lists/758.json?forSite=1&isWeightRotated=1&openList=true&_user-agent=${window.navigator.userAgent}&_ip=${client_ip}&Device=c`)
        .then((response) => response.json())
        .then(function (data) {
        localStorage.setItem('list',JSON.stringify(data.data) )

        });
        
});



// fetch(`http://unicorn.dock-stg.trafficpointltd.com/api/v1/sites/136/lists/758.json?forSite=1&isWeightRotated=1&openList=true&_user-agent=${window.navigator.userAgent}&_ip=${client_ip}&Device=c`)
//     .then((response) => response.json())
//     .then(function (data) {
//     localStorage.setItem('list',JSON.stringify(data.data) )

// })

