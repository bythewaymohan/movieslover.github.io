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
xhr.open('GET', 'https://api.npoint.io/8230f4554f5ce96a98ed', true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let results = json.images;
        let newsHtml = "";

        results.forEach(function (element) {
            // Get the original URL from your JSON API
            let originalUrl = element["ImageURL"]; 
            let workingImageUrl = originalUrl;

            // Check if the URL is a Google Drive download link and convert it
            if (originalUrl.includes('://google.com')) {
                workingImageUrl = originalUrl.replace(
                    'https://://google.com?export=download&id=', 
                    'https://googleusercontent.com'
                ).replace(
                    'https://://google.com?export=download&amp;id=', 
                    'https://googleusercontent.com'
                );
            }

            let news = `
           <div class="card_second">
                <div class="movie_det">
                    <!-- Standardized variable used below instead of raw link -->
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


