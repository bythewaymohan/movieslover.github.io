$(function () {
    $('#header',).load('SubPage/header.html');
});
$(function () {
    $('#second_header',).load('SubPage/second_header.html');
})
$(function () {
    $('#footer',).load('SubPage/footer.html');
})

let newsPro = document.getElementById('content');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://npoint.io', true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let results = json.images;
        let newsHtml = "";

        results.forEach(function (element) {
            let originalUrl = element["ImageURL"]; 
            let workingImageUrl = originalUrl;

            // 1. Robustly extract the 33-character Google Drive File ID using RegEx
            let match = originalUrl.match(/(?:id=|\/d\/)([a-zA-Z0-9-_]{25,50})/);

            if (match && match[1]) {
                let fileId = match[1];
                // 2. Reconstruct utilizing Google's official embedded thumbnail parameter
                workingImageUrl = `https://google.com{fileId}&sz=w1000`;
            }

            let news = `
           <div class="card_second">
                <div class="movie_det">
                    <img src="${workingImageUrl}" alt="${element["Name"]}">
                    <div class="all_det">
                        <h4>${element["Name"]}</h4>
                        <span class="year">${element["year"]}</span>
                        <p>Rating <span>${element["Rating"]}/10</span></p>
                        <div class="box">
                            <a class="button" href="#popup1"><button style="width:100%;" id="${element["vid"]}" onClick="GFG_click(this.id)">Watch Now</button></a>
                        </div>
                    </div>
                </div>
           </div>`;
            newsHtml += news;
        });
        newsPro.innerHTML = newsHtml;
    }
    else {
        console.log("Error occurred");
    }
}
xhr.send();



function myFunction() {
    alert(" Disclaimer :: The Movies Lover website has been created from Project Purpose. This website is not made for the purpose of making money. The main purpose of creating this website is to develop skills.");
}

function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

function GFG_click(clicked){
    document.getElementById("iframe").src
    =clicked+"/preview";
}


