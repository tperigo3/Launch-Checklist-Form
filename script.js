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
      }
     
         fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            response.json().then(function(json) {
               const missionLocation = document.getElementById("missionLocation");
                  missionLocation.innerHTML =`
                     <h2>Mission Destination</h2> 
                     <ol>
                        <li>Name: ${json[0].name}</li>
                        <li>Diameter: ${json[0].diameter}</li>
                        <li>Star: ${json[0].star}</li>
                        <li>Distance from Earth: ${json[0].distance}</li>
                        <li>Number of Moons: ${json[0].moons}</li>
                     </ol>
                     <img src="${json[0].image}">
                  `;
               });
            });
         });
      });
  