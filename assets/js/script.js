// Menu slider function
function sideMenu(){
   let slider = document.getElementsByClassName("slider");
   let sliderLinks = document.getElementById("sliderLinks");
    slider[0].style.width = "60%";
        sliderLinks.style.display = "block";

}

// Close slider
function closeSlider(){
    let slider = document.getElementsByClassName("slider");
    let sliderLinks = document.getElementById("sliderLinks");
    slider[0].style.width = "0";
    sliderLinks.style.display = "none";
}


// Token to storyblok

let token = "8wpboz3QWlaT4F8MLPbTwwtt";

// The last part of the URL
let path = 'home'


let request = new XMLHttpRequest()
request.open('GET', `https://api.storyblok.com/v1/cdn/stories/${path}?version=draft&token=${token}`, true)  
request.onload = function () {
    if (request.status >=200 && request.status < 400){
        let data = JSON.parse(request.responseText)
        console.log(data);
        printTest(data);
    }else {
        console.log("Something went wrong, but I got connection to the server");
    }
    request.onerror = function(){
        console.log('Connection error')
    };
} 

request.send()

function printTest(data){
    let homePageHTMLString = "";
    let ticketsHTMLString = "";
    let programHTMLString = "";
    let contactHTMLString = "";
    let aboutFestivalHTMLString = "";
    
        // Create a forloop that runs thorugh my whole page (in this case home)
    for (i = 0; i < data.story.content.body.length; i++) {
        
        // I look at the different components, instead of the whole page 
        
       // Checking the block names
        console.log(data.story.content.body[i].component);
           
        // Getting the UL from slider
        let sliderUl = document.getElementById("sliderLinks");
        let navUl = document.getElementById("navLinks");
        let sliderLinks = "";
        
        // Storing blocks into the variable
        let aName = data.story.content.body[i].component;
        
        // Making the first letter capital
       let aUpper = aName[0].toUpperCase() + aName.slice(1);
        
        // checking the list name and changing the display name of "AboutFestival" - to "About Festival"
        switch(aUpper){
                
            case "HomePage":
                sliderLinks += '<li><a href="index.html">' + "Home" + '</a></li>';
                break;
            case "AboutFestival":
                sliderLinks += '<li><a href="' + data.story.content.body[i].component + '.html">' + "About Festival" + '</a></li>';
                break; 
            default:
                 sliderLinks += '<li><a href="' + data.story.content.body[i].component + '.html">' + aUpper + '</a></li>';

                
        }
        
        // Adding links into UL
        sliderUl.innerHTML += sliderLinks;
        navUl.innerHTML += sliderLinks;
        
     /*   switch (data.story.content.body[i].component) {
            case 'tickets':
                // I call for the specific component in Storyblok e.g. .Title
                ticketsHTMLString += '<h2>' + data.story.content.body[i].ticketsHeadline + '</h2>';
                ticketsHTMLString += '<p>' + data.story.content.body[i].ticketsText + '</p>';
             

                //Look for the ID newsFeed (in the div) and inport the newsHTMLString values
                document.getElementById("tickets").innerHTML += ticketsHTMLString;
                break; 
            
            case 'program':
                // I call for the specific component in Storyblok e.g. .Title
                programHTMLString += '<h2>' + data.story.content.body[i].programHeadline + '</h2>';
                programHTMLString += '<p>' + data.story.content.body[i].programText + '</p>';

             

                //Look for the ID newsFeed (in the div) and inport the newsHTMLString values
                document.getElementById("program").innerHTML += programHTMLString;
                break;   
            
            case 'contact':
                // I call for the specific component in Storyblok e.g. .Title
                contactHTMLString += '<h2>' + data.story.content.body[i].contactHeadline + '</h2>';
                contactHTMLString += '<p>' + data.story.content.body[i].contactText + '</p>';

             

                //Look for the ID newsFeed (in the div) and inport the newsHTMLString values
                document.getElementById("contact").innerHTML += contactHTMLString;
                break;  
            
            case 'aboutFestival':
                // I call for the specific component in Storyblok e.g. .Title
                aboutFestivalHTMLString += '<h2>' + data.story.content.body[i].aboutFestivalHeadline + '</h2>';
                aboutFestivalHTMLString += '<p>' + data.story.content.body[i].aboutFestivalText + '</p>';

             

                //Look for the ID newsFeed (in the div) and inport the newsHTMLString values
                document.getElementById("aboutFestival").innerHTML += aboutFestivalHTMLString;
                break;

        }*/
    }
    
}

// Bridge
storyblok.init({
    accessToken: '8wpboz3QWlaT4F8MLPbTwwtt'
  })
  
  storyblok.on(['published', 'change'], function() {
    location.reload(true)
  })
  
  storyblok.pingEditor(function() {
    if (storyblok.inEditor) {
      storyblok.enterEditmode()
    }
  })


  window.addEventListener("load", function (event){
      console.log("All resources finished loading!");
  })

