

    let startButton = document.getElementById("startbutton");
    let startMenu = document.getElementsByClassName("startmenu")[0];

    let searchButton = document.getElementById("searchbutton");
    let searchMenu = document.getElementsByClassName("searchmenu")[0];

    let widgetButton = document.getElementById("widgetbutton");
    let widgetMenu = document.getElementsByClassName("widgetmenu")[0];

    let fileExplorer = document.getElementById("fileExplorer");
    let fileMenu = document.getElementsByClassName("filemenu")[0];

    let edge = document.getElementsByClassName("edge")[0]
    const browser = document.getElementsByClassName("browser")[0]
    let closebtn = document.getElementById("closebtn");


    closebtn.addEventListener("click", function(){
        browser.style.display = 'none';
    })

    edge.addEventListener("click", function(){
        console.log("Edge Button works");

        if(browser.style.display == 'none'){
            browser.style.display = 'block';
        }
        else{
            browser.style.display = 'none';
        }
        
    })
  
    
    document.addEventListener("DOMContentLoaded", function() {
        console.log("loaded");
         mstoreButton = document.getElementById("storebutton");
        const imageContainer = document.getElementById("imageContainer");
    
        mstoreButton.addEventListener("click", function() {
            if (imageContainer.style.display === "none") {
                imageContainer.style.display = "block";
            } else {
                imageContainer.style.display = "none";
            }
        });
    });

    startButton.addEventListener("click",()=>{

        if(startMenu.style.bottom == "-650px"){
            widgetMenu.style.left = "-950px"
            searchMenu.style.bottom = "-650px"
            startMenu.style.bottom = "55px"
        }else{
            startMenu.style.bottom = "-650px"
        }
    });
    
    searchButton.addEventListener("click",()=>{
    
        if(searchMenu.style.bottom == "-650px"){
            widgetMenu.style.left = "-950px"
            startMenu.style.bottom = "-650px"
            searchMenu.style.bottom = "55px"
        }else{
            searchMenu.style.bottom = "-650px"
        }
    
    });
    
    widgetButton.addEventListener("click",()=>{
    
        if(widgetMenu.style.left == "-950px"){
            startMenu.style.bottom = "-650px"
            searchMenu.style.bottom = "-650px"
            widgetMenu.style.left = "0px"
        }else{
            widgetMenu.style.left = "-950px"
        }
    
    });
    
    fileExplorer.addEventListener("click", () => {
        console.log("File explorer clicked");
    
        if (fileMenu.style.top === "0px") {
            console.log("Closing file menu");
            fileMenu.style.top = "-900px";
        } else {
            console.log("Opening file menu");
            startMenu.style.bottom = "-650px";
            searchMenu.style.bottom = "-650px";
            widgetMenu.style.left = "-950px";
            fileMenu.style.top = "0px";
    
            // Load the resume PDF in the iframe
            let iframe = document.getElementById("fileExplorerFrame");
            iframe.src = "src/Yogesh_Kumar_Resume.pdf";
        }
    });