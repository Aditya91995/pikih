

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#navbar-example'
// });
// var scrollSpy = new bootstra

// var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
// dataSpyList.forEach(function (dataSpyEl) {
//     bootstrap.ScrollSpy.getInstance(dataSpyEl)
//         .refresh()
// })
// var scrollSpyContentEl = document.getElementById('content')
// var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl)
// // Returns a Bootstrap scrollspy instance

// var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
// firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
//     // do something...
// })

var pagedata = [
    {
        "links": "How to use Dropbox",
        "header": "The Dropbox desktop experience",
        "para": "The Dropbox desktop experience provides one organized place that brings work into focus and keeps you in sync—right from your desktop. With features like overviews, descriptions, to- dos, comments, pins, and sharing tools, the desktop app lets you turn any folder into a connected workspace.With Dropbox, your desktop is also a place to organize your files and folders, create cloud content, share and collaborate with others, and see your file activity and notifications.",
        "im": "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/help/guide_gifs/guide-onboarding/workremotely_accessdevices.gif",

},
{
    "links": "Get started in your account",
    "header": "Access your account",
    "para": "The Dropbox desktop experience provides one organized place that brings work into focus and keeps you in sync—right from your desktop. With features like overviews, descriptions, to- dos, comments, pins, and sharing tools, the desktop app lets you turn any folder into a connected workspace.With Dropbox, your desktop is also a place to organize your files and folders, create cloud content, share and collaborate with others, and see your file activity and notifications.",
    "im": "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/help/guide_gifs/guide-onboarding/mobile_accessacrossdevices.gif"
}
];

// var header1 = document.getElementById("list-item-1")
// var para1 = document.getElementById("itemPara1")
// function dataAssign(){
//     header1.innerHTML = data[0].header
// }
// dataAssign()

var arr = JSON.stringify(pagedata)
localStorage.setItem("data", arr)
let pos = 0;
let ticking = false;

function show(){
    let getData = JSON.parse(localStorage.getItem("data"));
    console.log(getData)
    
    getData.forEach((ele, i) => {
        // Links
        $("#contentLinks").append(`
        <p class="text-white">${ele["links"]}<p/>
        `)
        // Data
        $("#scrollData").append(`
        <div class"row justify-content-start">
            <div class="col-9 col">
                <h4 id="list-item-1${i}">Hello ${ele["header"]}</h4>
                <p id="itemPara1${i}">${ele["para"]}</p>
            <div/>
            <div class="col-md-4 col">
            <img src="${ele["im"]}" class="img-fluid" alt="side image">
            <div/>
        <div/>
        `)
        console.log(ele)
    })
    // console.log(i)
}
show();




function doSomething(scroll_pos) {
  // Do something with the scroll position
}

// document.addEventListener('scroll', function(e) {
//   pos = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(pos);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });


// $(document).ready(function(){
//     $("#scrollcontent").scroll(function(){
//           let getData = JSON.parse(localStorage.getItem("data"));
//     console.log(getData)
//     getData.forEach((ele, i) => {
//         $("#scrollcontent  ").append(`
//         <h4 id="list-item-1${i}">Hello ${ele["header"]}</h4>
//             <p id="itemPara1${i}">${ele["para"]}</p>
//         `)
//         console.log(getData)
//     })
//     });
//   });

