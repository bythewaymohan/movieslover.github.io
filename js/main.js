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


\((function () {\)('#header').load('SubPage/header.html'); // Fixed: Removed trailing comma
});
\((function () {\)('#second_header').load('SubPage/second_header.html'); // Fixed: Removed trailing comma
})
\((function () {\)('#footer').load('SubPage/footer.html'); // Fixed: Removed trailing comma
})

let newsPro = document.getElementById('content');


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://npoint.io', true);
// xhr.open('GET','https://publicapis.org);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let results = json.images;
        //    console.log(results);
        let newsHtml = "";

        results.forEach(function (element) {
            //   console.log(results[news]);
            let news = `
           <div class="card_second">
                <div class="movie_det">
                    <img src="${element["ImageURL"]}" alt="">
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
        console.log("Error occured")
    }
}
xhr.send()



function myFunction() {
    alert(" Disclaimer :: The Movies Lover website has been created from Project Purpose. This website is not made for the purpose of making money. The main purpose of creating this website is to develop skills.");
}

function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

function GFG_click(clicked){
    // Fixed: Combined the broken line so the iframe src updates correctly
    document.getElementById("iframe").src = clicked + "/preview"; 
}



