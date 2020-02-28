var tweets = {"interest1": [], "interest2": [], "interest3": [] }
var idCounter = 0


function addCard(id) {
    var cBody = document.getElementById(id);

    var tweet = document.createElement("div");
    tweet.classList.add("card");
    var tImage = document.createElement("img");
    tImage.classList.add("card-img-top");
    tImage.src = "./img/tweet.jpg";
    tImage.alt = "Card Image Cap";
    tImage.width = 100;

    var cTitle = document.createElement("h5");
    cTitle.classList.add("card-title");
    cTitle.innerText = "Tweet";

    var cText = document.createElement("p");
    cText.classList.add("card-text");
    cText.innerText = "Tweet description."

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.classList.add("pull-right");
    deleteButton.href = "";
    deleteButton.innerText = "X";
    deleteButton.onclick = function() {deleteTweet(tweet)};

    tweet.id = idCounter;
    tweets[id] = idCounter;
    idCounter += 1;
    // tweet.innerText= idCounter;

    tweet.append(tImage);
    tweet.append(cTitle);
    tweet.append(cText);
    tweet.append(deleteButton);
    cBody.appendChild(tweet);

    // var tweet = $('<div class="card"> <img class="card-img-top" src="./img/tweet.jpg" alt="Card image cap"> <div class="card-title"> Tweet </div> <div class="card-body"> Tweet description. <button class="btn btn-danger" onclick="deleteTweet(tweet)"> X </button> </div> </div>');
    // tweet.id= idCounter;
    // idCounter +=1;
    // tweet.appendTo(cBody);
}

function deleteTweet(id) {
    id.parentNode.removeChild(id);
    // document.getElementById(id).remove();
}