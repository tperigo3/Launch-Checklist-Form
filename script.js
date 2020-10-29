// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }else if (isNaN(pilotName.value)===false || isNaN(copilotName.value)===false ||isNaN(fuelLevel.value)=== true|| isNaN(cargoMass.value)=== true){
         alert("Please ensure all fields have the correct values.");
      
      }else{
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML= `${pilotName.value} is ready.`;
         document.getElementById("copilotStatus").innerHTML = `${copilotName.value} is ready.`;

         if (fuelLevel.value < 10000 && cargoMass.value >=10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Fuel Level is too low for launch.";
            document.getElementById("cargoStatus").innerHTML = "Cargo is too heavy for launch.";
         }else if (fuelLevel.value < 10000 && cargoMass.value < 10000){           
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Fuel Level is too low for launch.";
         }else if (fuelLevel.value >= 10000 && cargoMass.value >= 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("cargoStatus").innerHTML = "Cargo is too heavy for launch."; 
         }else{
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
            document.getElementById("launchStatus").style.color = "green";
         }
      };
      
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