const url = 'https://qyzrhci3k5.execute-api.us-east-1.amazonaws.com';
//const testUrl = 'https://u7i6yr9iod.execute-api.us-east-1.amazonaws.com/myTestFunction';

/*
fetch(`${testUrl}`)
.then(response => {
    if (!response.ok) throw new Error ("Network response is not ok");
    return response.json();
})
.then (data => {
    console.log(data);
})
.catch(error => {
    console.error('Error fetching test data:', error);
});
*/

fetchStations();

async function fetchStations() {
    fetch(`${url}/wmata/stations`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) throw new Error ("Network response is not ok");
        return response.json();
    })
    .then (data => {
        data.Stations.forEach(station => {
            const option = document.createElement('option');
            option.value = station.Name;
            document.getElementById('stations').appendChild(option);
        })
    })
    .catch(error => {
        console.error('Error fetching WMATA train station data:', error);
    });
}

async function fetchStationPredictions() {
    const input = document.getElementById('inputFrom').value.trim().toLowerCase();
    if (input == '') {
        return;
    }

    fetch(`${url}/wmata/stations`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) throw new Error ("Network response is not ok");
        return response.json();
    })
    .then (data => {
        const station = data.Stations.find(station => 
          station.Name.toLowerCase() === input);
        let code = [station.Code];

        if (station.StationTogether1 && station.StationTogether1 != '') {
          code.push(station.StationTogether1);
        }
        if (station.StationTogether2 && station.StationTogether2 != '') {
          code.push(station.StationTogether2);
        }

        return fetch(`${url}/wmata/predictions?stationCode=${code.join(',')}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
    })
    .catch(error => {
        console.error('Error fetching WMATA train station data:', error);
    })

    .then(response => {
        if (!response.ok) throw new Error ("Network response is not ok");
        return response.json();
    })
    .then (data => {
        const trains = data.Trains.slice(0, 3);

        for (let i = 0; i < 3; i++) {
            document.getElementById(`pred${i+1}`).textContent =
            `Line: ${trains[i].Line} | ${trains[i].DestinationName} | In: ${trains[i].Min} min`
        }
    })
    .catch(error => {
        console.error('Error fetching WMATA station prediction data:', error);
    })
}