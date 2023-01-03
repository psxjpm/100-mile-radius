            //FIXME: The code below sends lat and lon to the server and inserts it in the database - we don't need this

            /* When the button is cliked it checks that geolocation is available and then 
            it calls get current position function from geolocation method which needs a call back function for position.
            This callback function then retrieves and assigns lad and lon to the dom elements*/
            document.getElementById('geolocate').addEventListener('click', event =>{
                if ('geolocation' in navigator){
                    console.log('geolocation available');
                    navigator.geolocation.getCurrentPosition(async position => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        document.getElementById('latitude').textContent = lat;
                        document.getElementById('longitude').textContent = lon;
                    
                    // The dom elements are then assigned to data and posted as a json string to the server (index.js)
                    const data = {lat, lon};
                    const options = {
                         method: 'POST',
                         headers: {
                            'Content-Type': 'application/json'
                         },
                         body: JSON.stringify(data)
                    };
    
                    //This fetches the response from the api endpoint in the server (index.js)
                    const response = await fetch('/api',options);
                    const json = await response.json();
                    console.log(json);
    
                });
                } else {
                    console.log('geolocation not available');    
                }
            });