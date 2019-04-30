// Menu slider function
function sideMenu() {
    let slider = document.getElementsByClassName("slider");
    let sliderLinks = document.getElementById("sliderLinks");
    sliderLinks.style.display = "block";

    let screenSize = window.screen.availWidth;

    if (screenSize < 400) {

        slider[0].style.width = "60%";


    } else {
        slider[0].style.width = "250px";

    }

}

// Close slider
function closeSlider() {
    let slider = document.getElementsByClassName("slider");
    let sliderLinks = document.getElementById("sliderLinks");
    slider[0].style.width = "0";
    sliderLinks.style.display = "none";
}

function displayDancing() {

    let div = document.getElementById("dancingWrapper");
    if (div.style.display == "none") {
        div.style = "display:block";
    } else {
        div.style = "display:none;";
    }
}

function displayDesign() {

    let div = document.getElementById("designWrapper");
    if (div.style.display == "none") {
        div.style = "display:block";
    } else {
        div.style = "display:none";
    }
}

function displayTheatre() {

    let div = document.getElementById("theatreWrapper");
    if (div.style.display == "none") {
        div.style = "display:block";
    } else {
        div.style = "display:none";
    }
}

function displaySport() {

    let div = document.getElementById("sportWrapper");
    if (div.style.display == "none") {
        div.style = "display:block";
    } else {
        div.style = "display:none";
    }
}

function displayFirstAid() {

    let div = document.getElementById("firstAidWrapper");
    if (div.style.display == "none") {
        div.style = "display:block";
    } else {
        div.style = "display:none";
    }
}

// Token to storyblok

let token = "8wpboz3QWlaT4F8MLPbTwwtt";

// The last part of the URL
let path = 'home'


let request = new XMLHttpRequest()
request.open('GET', `https://api.storyblok.com/v1/cdn/stories/${path}?version=draft&token=${token}`, true)
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText)
        displayData(data);
    } else {
        console.log("Something went wrong, but I got connection to the server");
    }
    request.onerror = function () {
        console.log('Connection error')
    };
}

request.send()



function displayData(data) {


    // Create a forloop that runs thorugh my whole page (in this case home)
    for (i = 0; i < data.story.content.body.length; i++) {

        // I look at the different components, instead of the whole page 



        // Checking the block names
        //console.log(data.story.content.body[i].component);

        // Getting the UL from slider
        let sliderUl = document.getElementById("sliderLinks");
        let navUl = document.getElementById("navLinks");
        let sliderLinks = "";

        // Storing blocks into the variable
        let aName = data.story.content.body[i].component;

        // Making the first letter capital
        let aUpper = aName[0].toUpperCase() + aName.slice(1);




        // checking the list name and changing the display name of "AboutFestival" - to "About Festival"
        switch (aUpper) {

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

        let URL = window.location.pathname.split("/").pop();

        // console.log(data.story.content.body[i].component)
        switch (data.story.content.body[i].component) {
            default:



                let footerAddress = data.story.content.body[i].footerAddress;
                document.getElementById("footerAddress").innerHTML = footerAddress;

                let footerEmail = data.story.content.body[i].footerEmail;
                document.getElementById("footerEmail").href = "mailto:" + footerEmail;

                document.getElementById("footerMail").innerHTML = footerEmail;

                let footerPhone = data.story.content.body[i].footerPhone;
                document.getElementById("footerTel").innerHTML = footerPhone;
                document.getElementById("footerPhone").href = "tel:" + footerPhone; //replace(/\s/g,'')

                let footerMap = data.story.content.body[i].footerMap;
                document.getElementById("footerMap").href = footerMap;

                let footerFb = data.story.content.body[i].footerFacebook;
                document.getElementById("footerFb").href = footerFb;

                let footerIg = data.story.content.body[i].footerInstagram;
                document.getElementById("footerIg").href = footerIg;

                let footerYt = data.story.content.body[i].footerYoutube;
                document.getElementById("footerYt").href = footerYt;


                let headingImage = data.story.content.body[0].headerImage;
                document.getElementById("headerImage").src = "https:" + headingImage;

        }
        switch (URL) {
            case "index.html":

                switch (data.story.content.body[i].component) {

                    case "homePage":


                        let homePageHTMLString = "";
                        let countdownDate = "";
                        let ticketsHTMLString = "";
                        let programHTMLString = "";
                        let contactHTMLString = "";
                        let aboutFestivalHTMLString = "";
                        let storyBlockDate = new Date(data.story.content.body[i].homePageDate).getTime();

                        document.getElementById("countdown").innerHTML = storyBlockDate;

                        let sec = setInterval(function () {

                            let now = new Date().getTime();

                            let timeLeft = storyBlockDate - now;


                            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


                            let countdown = "<b>" + days + "</b>" + "d " + "<b>" + hours + "</b>" + "h " + "<b>" + minutes + "</b>" + "m " + "<b>" + seconds + "</b>" + "s";

                            document.getElementById("countdown").innerHTML = countdown;

                            if (timeLeft <= 0) {

                                document.getElementById("countdown").innerHTML = "<b>0</b>d " + "<b>0</b>h " + "<b>0</b>m " + "<b>0</b>s "

                            }
                        })


                        let homePageHeader = "";

                        homePageHeader += '<h2>' + data.story.content.body[i].homePageTitle + '</h2>';

                        document.getElementById("homePageHeader").innerHTML += homePageHeader;


                        let workshopTextDancing = data.story.content.body[i].homePageWorkShopOne;

                        document.getElementById("workshopTextDancing").innerHTML = workshopTextDancing;

                        let workshopTextArt = data.story.content.body[i].homePageWorkShopTwo;

                        document.getElementById("workshopTextArt").innerHTML = workshopTextArt;

                        let workshopTextThree = data.story.content.body[i].homePageWorkShopThree;

                        document.getElementById("workshopTextThree").innerHTML = workshopTextThree;

                        let homePageReviewOne = data.story.content.body[i].homePageReviewOne;

                        document.getElementById("reviewOne").innerHTML = "<i>" + homePageReviewOne + "</i>";

                        let homePageReviewTwo = data.story.content.body[i].homePageReviewTwo;

                        document.getElementById("reviewTwo").innerHTML = "<i>" + homePageReviewTwo + "</i>";

                        let homePageReviewThree = data.story.content.body[i].homePageReviewThree;

                        document.getElementById("reviewThree").innerHTML = "<i>" + homePageReviewThree + "</i>";

                        let homePageReviewFour = data.story.content.body[i].homePageReviewFour;

                        document.getElementById("reviewFour").innerHTML = "<i>" + homePageReviewFour + "</i>";

                        let homePageYtLink = data.story.content.body[i].homePageYtLink;
                        document.getElementById("ytVideo").src = homePageYtLink;

                        let homePageDancingImg = data.story.content.body[i].workshopImg1
                        document.getElementById("dancingImg").src = "https:" + homePageDancingImg;

                        let homePageDesignImg = data.story.content.body[i].workshopImg2
                        document.getElementById("designImg").src = "https:" + homePageDesignImg;

                        let homePageActingImg = data.story.content.body[i].workshopImg3
                        document.getElementById("actingImg").src = "https:" + homePageActingImg;

                        break;


                }
                break;

            case "tickets.html":





                switch (data.story.content.body[i].component) {



                    case "tickets":




                        let ticketsPrice = data.story.content.body[i].ticketsPrice;

                        document.getElementById("ticketPrice").innerHTML = ticketsPrice + " dkk";

                        document.getElementById("totalPrice").innerHTML = "<b>" + ticketsPrice + "</b>" + " dkk";

                        let ticketsImg = data.story.content.body[i].ticketsImg

                        document.getElementById("ticketsImg").src = "https:" + ticketsImg;



                        break;

                }



                break;

            case "program.html":




                let festivalYears = "";

                for (let i = 2019; i > 1979; i--) {

                    festivalYears += '<a href="#' + i + '" class="program' + i + '">' + i + '</a>';

                    document.getElementById("programTimeline").innerHTML = festivalYears;

                }

                switch (data.story.content.body[i].component) {

                    case "program":
                        
                        let workshopDancingImg = data.story.content.body[i].workshopDancingImg
                        document.getElementById("workshopDancingImg").src = "https:" + workshopDancingImg;

                        let dancingText = data.story.content.body[i].workshopDancing;

                        document.getElementById("pDancing").innerHTML = dancingText;

                        let workshopDesignImg = data.story.content.body[i].workshopDesignImg
                        document.getElementById("workshopDesignImg").src = "https:" + workshopDesignImg;
                        
                        
                        let designText = data.story.content.body[i].workshopDesign;

                        document.getElementById("pDesign").innerHTML = designText;

                        let workshopTheatreImg = data.story.content.body[i].workshopTheatreImg
                        document.getElementById("workshopTheatreImg").src = "https:" + workshopTheatreImg;
                        
                        let theatreText = data.story.content.body[i].workshopTheatre;

                        document.getElementById("pTheatre").innerHTML = theatreText;
                        
                         let workshopSportImg = data.story.content.body[i].workshopSportImg
                        document.getElementById("workshopSportImg").src = "https:" + workshopSportImg;

                        let sportText = data.story.content.body[i].workshopSport;

                        document.getElementById("pSport").innerHTML = sportText;
                        
                        let workshopFirstAidImg = data.story.content.body[i].workshopFirstAidImg
                        document.getElementById("workshopFirstAidImg").src = "https:" + workshopFirstAidImg;

                        let firstAidText = data.story.content.body[i].workshopFirstAid;

                        document.getElementById("pFirstAid").innerHTML = firstAidText;

                        break;
                }

                let workshopHashtag = window.location.hash;

                if (workshopHashtag == "#workshopDance") {

                    document.getElementById("dancingWrapper").style.display = "block";

                } else if (workshopHashtag == "#workshopDesign") {

                    document.getElementById("designWrapper").style.display = "block";

                } else if (workshopHashtag == "#workshopTheatre") {

                    document.getElementById("theatreWrapper").style.display = "block";

                }


                break;

            case "aboutFestival.html":
                switch (data.story.content.body[i].component) {

                    case "aboutFestival":

                        let aboutFestivalTextOne = data.story.content.body[i].aboutFestivalTextOne;

                        document.getElementById("aboutFestivalTextOne").innerHTML = aboutFestivalTextOne;

                        let aboutFestivalTextTwo = data.story.content.body[i].aboutFestivalTextTwo;

                        document.getElementById("aboutFestivalTextTwo").innerHTML = aboutFestivalTextTwo;

                        let aboutFestivalImg1 = data.story.content.body[i].aboutFestivalImg1
                        document.getElementById("aboutImage").src = "https:" + aboutFestivalImg1;

                        let aboutFestivalImg2 = data.story.content.body[i].aboutFestivalImg2
                        document.getElementById("aboutImage2").src = "https:" + aboutFestivalImg2;


                        break;

                }
                break;
            default:




        }




    }



}




function priceUpdate() {

    let value = parseFloat(document.getElementById("ticketsSelect").value);

    let ticketPrice = document.getElementById("ticketPrice").innerHTML;

    let Price = parseFloat(ticketPrice.replace("dkk", ""));


    let totalPrice = document.getElementById("totalPrice");



    totalPrice.innerHTML = "<b>" + Price * value + "</b>" + " dkk";


}

function increaseValue() {

    let value = parseFloat(document.getElementById("ticketsSelect").value);

    document.getElementById("ticketsSelect").value = value + 1;


}

function decreaseValue() {

    let value = parseFloat(document.getElementById("ticketsSelect").value);

    if (value < 2) {

    } else {

        document.getElementById("ticketsSelect").value = value + -1;
    }
}


function checkedBox() {

    if (document.getElementById("checkbox").checked) {

        document.getElementById("purchaseButton").disabled = false;
    } else {
        document.getElementById("purchaseButton").disabled = true;
    }
}

function ticketsOverlay() {

    document.getElementsByClassName("orderOverlay")[0].style = "display:block";
}

function closeOverlay() {

    document.getElementsByClassName("orderOverlay")[0].style = "display:none";
}



// Bridge
storyblok.init({
    accessToken: '8wpboz3QWlaT4F8MLPbTwwtt'
})

storyblok.on(['published', 'change'], function () {
    location.reload(true)
})

storyblok.pingEditor(function () {
    if (storyblok.inEditor) {
        storyblok.enterEditmode()
    }
})


window.addEventListener("load", function (event) {
    console.log("All resources finished loading!");
})