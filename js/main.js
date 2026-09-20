// $(function () {
//     $('#header',).load('SubPage/header.html');
// });
// $(function () {
//     $('#second_header',).load('SubPage/second_header.html');
// })
// $(function () {
//     $('#footer',).load('SubPage/footer.html');
// })

// let newsPro = document.getElementById('content');


// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.npoint.io/8230f4554f5ce96a98ed', true);
// // xhr.open('GET','https://api.publicapis.org/entries',true);
// xhr.getResponseHeader('Content-type', 'application/json');

// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         let results = json.images;
//         //    console.log(results);
//         let newsHtml = "";

//         results.forEach(function (element) {
//             //   console.log(results[news]);
//             let news = `
//            <div class="card_second">
//                 <div class="movie_det">
//                     <img src="${element["ImageURL"]}" alt="">
//                     <div class="all_det">
//                         <h4>${element["Name"]}</h4>
//                         <span class="year">${element["year"]}</span>
//                         <p>Rating <span>${element["Rating"]}/10</span></p>
//                         <div class="box">
//                             <a class="button" href="#popup1"><button style="width:100%;" id="${element["vid"]}" onClick="GFG_click(this.id)">Watch Now</button></a>
//                         </div>
//                     </div>
//                 </div>
//            </div>`;
//             newsHtml += news;

//         });
//         newsPro.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Error occured")
//     }
// }
// xhr.send()



// function myFunction() {
//     alert(" Disclaimer :: The Movies Lover website has been created from Project Purpose. This website is not made for the purpose of making money. The main purpose of creating this website is to develop skills.");
// }

// function websiteVisits(response) {
//     document.querySelector("#visits").textContent = response.value;
// }

// function GFG_click(clicked){
//     document.getElementById("iframe").src
//     =clicked+"/preview";
// }



// Load Subpages cleanly via jQuery
\((function () {\)('#header').load('SubPage/header.html');
    \$('#second_header').load('SubPage/second_header.html');
    \$('#footer').load('SubPage/footer.html');
});

// Target the content container
const newsPro = document.getElementById('content');

// Modernized data fetching using Fetch API
fetch('https://api.npoint.io/8230f4554f5ce96a98ed')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        const results = json.images;
        let newsHtml = "";

        results.forEach(element => {
            newsHtml += `
            <div class="card_second">
                <div class="movie_det">
                    <img src="${element["ImageURL"]}" alt="${element["Name"] || 'Movie Poster'}">
                    <div class="all_det">
                        <h4>${element["Name"]}</h4>
                        <span class="year">${element["year"]}</span>
                        <p>Rating <span>${element["Rating"]}/10</span></p>
                        <div class="box">
                            <a class="button" href="#popup1">
                                <button style="width:100%;" id="${element["vid"]}" onClick="GFG_click(this.id)">Watch Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        
        newsPro.innerHTML = newsHtml;
    })
    .catch(error => {
        console.error("Error occurred while fetching movie data:", error);
        newsPro.innerHTML = `<p style="color:red; text-align:center;">Failed to load movies. Please try again later.</p>`;
    });

// Global Interactivity Functions
function myFunction() {
    alert("Disclaimer :: The Movies Lover website has been created for Project Purposes. This website is not made for the purpose of making money. The main purpose of creating this website is to develop skills.");
}

function websiteVisits(response) {
    const visitsElem = document.querySelector("#visits");
    if (visitsElem) {
        visitsElem.textContent = response.value;
    }
}

function GFG_click(clicked) {
    const iframeElem = document.getElementById("iframe");
    if (iframeElem) {
        // Corrected assignment string concatenation
        iframeElem.src = clicked + "/preview";
    }
}


