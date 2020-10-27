// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.Value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      // if (isNaN(fuelLevel.value)=== true || isNaN(cargoMass.value)===true){
      //    alert("Fuel Level and Cargo Mass must be numbers.");
      //    event.preventDefault();
      //}
   });

// This block of code shows how to format the HTML once you fetch some planetary JSON!

   fetch('https://handlers.education.launchcode.org/static/planets.json')
       .then(function(response)
           {return response.json()}
       ).then(function(json){
           const container = document.getElementById('container');
           let planets = '';
           for(planet of json){
               planets += `
                  <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json.name}</li>
                        <li>Diameter: ${json.diameter}</li>
                        <li>Star: ${json.star}</li>
                        <li>Distance from Earth: ${json.distance}</li>
                        <li>Number of Moons: ${json.moons}</li>
                     </ol>
                  <img src="${json[1].image}">
               `;   
           };
           container.innerHTML = planets;
       });     
   });