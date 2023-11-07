//TODO: Add Your Code Below

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            const container = document.getElementById("container");
            //loop through json array
            for(let i=0; i<json.length; i++) {
                container.innerHTML += `
                <div class ="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li><span id = "active${i}">Active: ${json[i].active}</span></li>
                    <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class = "avatar" src="${json[i].picture}">
                </div>
                `;
                //changes active to green if currently active
                if (json[i].active === true) {
                    document.getElementById(`active${i}`).style.color = "green";
                };
                
            };
        });
    });
            
});