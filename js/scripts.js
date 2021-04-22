document.getElementById("aboutLink").addEventListener("click", function () {
    document.getElementById("about").style.display = "block";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("game").style.display = "none";
})

document.getElementById("feedbackLink").addEventListener("click", function () {
    document.getElementById("feedback").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("game").style.display = "none";
})

document.getElementById("gameLink").addEventListener("click", function () {
    document.getElementById("game").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("feedback").style.display = "none";
})

document.getElementById("BtnExit").addEventListener("click", function () {
    alert("A curious game, the only winning move is not to play.")
})
document.getElementById("BtnOptions").addEventListener("click", function () {
    document.getElementById("optsModal").style.display = "block";
})
document.getElementById("close").addEventListener("click", function () {
    document.getElementById("optsModal").style.display = "none";
})
document.getElementById("monospace").addEventListener("click", function () {
    document.getElementById("page").style.fontFamily = "lucida console";
})
document.getElementById("sans").addEventListener("click", function () {
    document.getElementById("page").style.fontFamily = "verdana";
})
document.getElementById("pixel").addEventListener("click", function () {
    alert("This feature is not available in the current build.")
})
document.getElementById("skynet").addEventListener("click", function () {
    alert("This feature is not available in the current build.")
})
document.getElementById("wargames").addEventListener("click", function () {
    alert("This feature is not available in the current build.")
})
document.getElementById("green").addEventListener("click", function () {
    alert("This feature is not available in the current build.")
})

document.getElementById("BtnPlay").addEventListener("click", function () {
    newContent = document.createElement("div")
    newContent.id = "gameStart"
    document.getElementById("game").appendChild(newContent)

    newContent = document.createElement("span")
    newContent.id = "closeGame"
    newContent.innerHTML = "&times;"
    document.getElementById("gameStart").appendChild(newContent)

    newContent = document.createElement("div")
    newContent.id = "scene1"
    newContent.innerHTML = "<h2>Chapter 1 - Awakening</h2><p>You are a second year student at Edinburgh Napier University.<br>" +
        "Due to a combination of a hectic lifestyle and endlessly expanding workplace commitments, you find yourself at your desk the day before a large submission is due.<br>" +
        "You are confident that an extension will not be required, and it's too late to ask in any instance. All you need to do is focus.<br>" +
        "Let's start with something simple, tell me your name:<input type='text' id='playerName' required><br><button id='submitName'>Submit</button>"
    document.getElementById("gameStart").appendChild(newContent)
    document.getElementById("playerName").required = true
})

document.body.addEventListener("click", function (event) {
    if (event.srcElement.id == "closeGame") {
        if (confirm("Are you sure you wish to quit the game?")) {
            document.getElementById("game").removeChild(gameStart)
            localStorage.clear()
        } else {

        }
    }
})

var pName = ""
document.body.addEventListener("click", function (event) {
    if (event.srcElement.id == "submitName") {
        if (document.getElementById("playerName").value != "") {
            pName = document.getElementById("playerName").value
            if (confirm("Are you sure that '" + pName + "' is your name?")) {
                localStorage.setItem('playerName', pName)
                document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You have always considered yourself a strong programmer.<br>" +
                    "Unfortunately you are woefully out of practice, having been out of the field for three years.<br>" +
                    "You could download bootstrap and jQuery and make this whole process a lot smoother, or you could simplify your ambitious project<br>" +
                    "Whatever you choose to do, the clock is ticking.<br><div id='choices'><button id='tools'>Download Additional Tools</button><button id='downsize'>Simplify the project</button><button id='persevere'>Persevere</button></div>"
            } else {

            }
        } else {
            alert("You must have a name...")
        }
    }
})

document.body.addEventListener("click", function (event) {
    if (event.srcElement.id == "tools") {
        localStorage.setItem('firstChoice', '1')
        document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You decide to download additional libraries.<br>" +
            "Confident in the fact that you can rattle out a stellar project in a small handful of hours.<br>" +
            "You decide that the best way to reward this pragmatic approach would be with a short break<br>" +
            "Do you choose to play a game, or watch a movie?.<br><div id='choices'><button id='playAGame'>Play A Game</button><button id='movie'>Watch A Movie</button></div>"
        document.body.addEventListener("click", function (event) {
            if (event.srcElement.id == "playAGame") {
                document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You decide to reward yourself with a quick game.<br>" +
                    "Unfortunately, the first game you play is a disaster due to incompetent teammates.<br>" +
                    "You decide to keep playing until you win a round.<br>" +
                    "This continues until well past midnight. You quickly assemble a terrible website using HTML tables for structure.<br>Your evaluation is a short paragraph blaming lack of time.<br>" +
                    "In the morning, you quickly skim through some important documents, missing key facts. Your decision at a critical meeting causes a major security incident.<br>" +
                    "You have cost your employer and their customers millions, and are quickly fired. With your name now in the CIFAS database for gross incompetence you will never work in the security field again" +
                    "<div id='choices'><button id='closeGame'>Game Over</button></div>"
            } else if (event.srcElement.id == "movie") {
                document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You decide to reward yourself with a movie.<br>" +
                    "Unfortunately, the first movie you watch is objectively terrible.<br>" +
                    "You decide to keep going until you find a good film.<br>" +
                    "This continues until well past midnight. You quickly assemble a terrible website using HTML tables for structure.<br>Your evaluation is a short paragraph blaming lack of time.<br>" +
                    "In the morning, you quickly skim through some important documents, missing key facts. Your decision at a critical meeting causes a major security incident.<br>" +
                    "You have cost your employer and their customers millions, and are quickly fired. With your name now in the CIFAS database for gross incompetence you will never work in the security field again" +
                    "<div id='choices'><button id='closeGame'>Game Over</button></div>"
            }
        })
    } else if (event.srcElement.id == "downsize") {
        localStorage.setItem('secondChoice', '2')
        document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You decide to scale back on your ambitions.<br>" +
            "No longer attempting to code a website that is 90% dynamically generated at runtime.<br>" +
            "You are able to quickly put together a couple of dozen interlinking pages using a template<br>" +
            "Due to the sheer volume of story you now have to make up on the spot, the overall quality of your narrative suffers.<br><div id='choices'><button id='plagarise'>Plagiarize A Story</button><button id='ohwell'>C'est La Vie</button></div>"
        document.body.addEventListener("click", function (event) {
            if (event.srcElement.id == "plagarise") {
                document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You decide to plagarize an existing work.<br>" +
                    "This is obviously spotted and you fail your submission.<br>" +
                    "Due to the time saved, you are still able to work effectively the next day.<br>" +
                    "As a result of your actions, your credibility has been severely impacted.<br><div id='choices'><button id='closeGame'>To Be Continued</button></div>"
            } else if (event.srcElement.id == "ohwell") {
                document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You live with a less than stellar storyline.<br>" +
                    "The quality of writing is less important than the code.<br>" +
                    "Due to the time saved, you are still able to work effectively the next day.<br>" +
                    "As a result of your actions, you are still able to pass your assessment.<br><div id='choices'><button id='closeGame'>To Be Continued</button></div>"
            }
        })
    }
    else if (event.srcElement.id == "persevere") {
        localStorage.setItem('secondChoice', '3')
        document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You decide to persevere.<br>" +
            "Coding your entire website as dynamically generated DOM elements is time consuming.<br>" +
            "You are able navigate all of the element reuse and manage to put together a smaller, more dense, project<br>" +
            "You begin to worry that the amount of content will not be enough.<br><div id='choices'><button id='quality'>Quality Over Quantity</button><button id='reconsider'>Reconsider Your Previous Choice</button></div>"
        document.body.addEventListener("click", function (event) {
            if (event.srcElement.id == "reconsider") {
                document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You reconsider your choice.<br>" +
                    "No longer willing to work your brain this hard with such a short self-imposed deadline.<br>" +
                    "You decide to reneg on your previous choice and either install additional libraries, or downscale the website<br>" +
                    "By this point it is already too late.<br><div id='choices'><button id='closeGame'>To Be Continued</button></div>"
            } else if (event.srcElement.id == "quality") {
                document.getElementById("scene1").innerHTML = "<h2>Chapter 1 - " + localStorage.getItem('playerName') + "'s Awakening</h2><p>You double down on dynamic.<br>" +
                    "You are able to code roughly half a dozen scenarios and pages.<br>" +
                    "Knowing that you are capable of more if your workload had not been so great.<br>" +
                    "You decide to write what you know, and use the evaluation to detail what you wish you could have added.<br><div id='choices'><button id='video'>On to the Screen Recording</button></div>"
            }
        }
        )
    }
})
