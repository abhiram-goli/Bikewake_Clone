const choices = document.querySelectorAll(".brand");

const msg = document.querySelector("#msg");

const display = document.querySelector(".models");


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        if(choice.innerText === "Bajaj") {
            msg.innerText = `You clicked ${choice.innerText} brand!`;
            window.location.href = "bajaj.html";
        }
        else if(choice.innerText === "KTM") {
            msg.innerText = `You clicked ${choice.innerText} brand!`;
            window.location.href = "ktm.html";
        }
        else if(choice.innerText === "Triumph") {
            msg.innerText = `You clicked ${choice.innerText} brand!`;
            window.location.href = "triumph.html";
        }
        else if(choice.innerText === "Royal Enfield") {
                msg.innerText = `You clicked ${choice.innerText} brand!`;
                window.location.href = "royalenfield.html";
        }
        else if(choice.innerText === "Honda") {
            msg.innerText = `You clicked ${choice.innerText} brand!`;
            window.location.href = "honda.html";
        }
        else if(choice.innerText === "Hero") {
            msg.innerText = `You clicked ${choice.innerText} brand!`;
            window.location.href = "hero.html";
        }
        else if(choice.innerText === "Yamaha") {
            msg.innerText = `You clicked ${choice.innerText} brand!`;
            window.location.href = "yamaha.html";
        }
        else {
            msg.innerText = `You clicked ${choice.innerText} brand!`;
            window.location.href = "tvs.html";
        }
    })
})


//document.getElementsByTagName("button").onclick = products()

//function products()
//{
//for (let val1 of company) {
    //if (val1.innerText === "Bajaj") {
        //document.getElementById("#msg").innerText = "You selected Bajaj brand!";
    //}
    //else if (val1.innerText === "KTM") {
        //msg.innerText = `You selected ${val1} brand!`;
    //}
    //else if (val1.innerText === "Triumph") {
        //msg.innerText = `You selected ${val1} brand!`;
    //}
//}
//}

