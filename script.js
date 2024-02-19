let notificationCircles = document.querySelector(" .ntifiction p");
let circle = document.querySelector(".ntifiction ");
let bell = document.querySelector(" .remove");
let bellIcon = document.querySelector(" .remove i");
let notificatoinClass = document.querySelector(" #profile")
let last = document.querySelector(" .super")


let profileContainer = document.querySelector("#Allprofiles");
let profilimages = document.querySelector("#Allprofiles .main");
let Userphoto = document.querySelector("img.User-img");


console.log(profilimages)



profilimages.style.display = "none"
last.style.display = "none"





let notification = 9;

Userphoto.addEventListener("click", function () {
    let fgh = profileContainer.classList.toggle('profiles-container');

    console.log(fgh);

    if (fgh == false) {
        profilimages.style.display = "none";
        bell.style.backgroundColor = "#E6F4F1"


    } else {
        profilimages.style.display = "block";
        bell.style.backgroundColor = "#F0F2F5"

    }
});









function randomNotification() {

    let random = notification++

    let poor = notificationCircles.innerHTML = random
    console.log(poor)
}


bellIcon.addEventListener("click", () => {



    circle.style.top = "-1000px"
    // circle.style.left = "0px"
    circle.style.backgroundColor = "#fff"

    let again = notificatoinClass.classList.toggle("profiles-container")
    console.log(again)

    if (again == true) {


        bellIcon.style.color = "blue"
        last.style.display = "block"
        bellIcon.style.marginLeft = "1px"


    } else {
        bellIcon.style.color = "black"
        bellIcon.style.marginLeft = "10px"
        last.style.display = "none"

    }




});



setInterval(() => {

    randomNotification()



}, 10000);

let creatSection = document.querySelector(" #more i")
let iconPlus = document.querySelector(" #create")
let iconcirxle = document.querySelector(" .circle ")
let icon = document.querySelector(" .circle i")
let compl = document.querySelector(" .compl")

console.log(iconPlus)
console.log(icon)

compl.style.display = "none"

creatSection.addEventListener("click", function () {
    let check = iconPlus.classList.toggle('profiles-container');

    console.log(check)
    // console.log(fgh);
    if (check == true) {

        iconcirxle.style.backgroundColor = "#E6F4F1"
        icon.style.color = "blue"
        compl.style.display = "block"



    } else {
        iconcirxle.style.backgroundColor = "#F0F2F5"
        icon.style.color = "black"
        compl.style.display = "none"
    }


});

let chatButton = document.querySelector(" .select")
let chatkicon = document.querySelector(" .select i")
let chatBux = document.querySelector(" #chat-container")
let chatcontent = document.querySelector(" .all")

console.log(chatkicon)

chatcontent.style.display = "none"
chatcontent.style.overflow = 'hidden'

chatkicon.addEventListener('click', function () {
    let nontlist = chatBux.classList.toggle('profiles-container')
    console.log(nontlist)

    if (nontlist == true) {
        chatcontent.style.display = "block"
        chatButton.style.backgroundColor = "#E6F4F1"
        chatkicon.style.color = "blue"


    } else {

        chatcontent.style.display = "none"
        chatButton.style.backgroundColor = "#F0F2F5"
        chatkicon.style.color = "black"
    }
})




let reader = document.querySelectorAll(" .notification-text a");
let timer = 0;

function increaseTimer() {
    reader.forEach((a) => {
        let timercheck = ++timer;
        let speed = a.innerHTML = timercheck + " Minute ago";

        console.log(speed);

    });
}

setInterval(() => {
    increaseTimer();
}, 30000);


const searchInput = document.getElementById("search-input");
const userContainers = document.querySelectorAll(".user-container");
const usermessage = document.querySelectorAll(".useer-message")


function updateDisplay(filteredUsers) {

    const allUserContainers = document.querySelectorAll('.user-container');
    allUserContainers.forEach(container => {
        container.style.display = 'none';
    });

    usermessage.forEach(usermessage => {
        usermessage.style.position = "absolute"
        usermessage.style.marginTop = "-50px"
        usermessage.style.marginLeft = "80px"

    })

    // Display or suggest the filtered users
    filteredUsers.forEach(filteredUser => {
        // Assuming you have some logic to display or suggest users in your UI
        // Adjust this part based on your actual UI structure
        filteredUser.style.display = 'block';
    });
}



searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim().toLowerCase(); // Extra spaces ko trim karo

    const filteredUsers = Array.from(userContainers)
        .filter(userContainer => {
            const userName = (userContainer.dataset.name || '').toLowerCase();
            return userName.includes(searchTerm);
        })
        .sort((a, b) => {
            const nameA = (a.dataset.name || '').toLowerCase();
            const nameB = (b.dataset.name || '').toLowerCase();
            return nameA.localeCompare(nameB);
        });

    // Debugging ke liye searchTerm aur filteredUsers ko console mein log karo
    console.log('Search Term:', searchTerm);
    console.log('Filtered Users:', filteredUsers);

    // Filtered aur sorted users ke basis par display update karnay ke liye
    updateDisplay(filteredUsers);
});

// Yahan 'updateDisplay' function ko define karo







// visible the edit buttton when hovef

let puzzleContainer = document.querySelector(".puzzle-container")
let editOption = document.querySelector(".edit")

console.log(puzzleContainer)

puzzleContainer.addEventListener("mousemove", () => {
    editOption.style.display = "block"
})

puzzleContainer.addEventListener("mouseleave", () => {
    editOption.style.display = "none"
    console.log("me ooooo")
})

editOption.addEventListener("mousemove", () => {
    editOption.style.display = "block"
})




let emojis = [
    '<img src="photos/thumbs up.png" style="width:30px; height:30px">',
    '<img src="photos/love heart.png" style="width:30px; height:30px">',
    '<img src="photos/wow.jfif" style="width:30px; height:30px">',
    '<img src="photos/care.jfif" style="width:30px; height:30px">',
    '<img src="photos/haha.jfif" style="width:30px; height:30px">',
    '<img src="photos/weep.png" style="width:30px; height:30px">',
    '<img src="photos/angry.jfif" style="width:30px; height:30px">',
];

let Emojidiv = document.querySelector(".like #Emoji");
let like = document.querySelectorAll(".like #thumbs");
let liketext = document.querySelectorAll(".like p");
let rectonsEmojis = document.querySelectorAll(".like #Emoji img");

rectonsEmojis.forEach((img, index) => {
    img.addEventListener("click", () => {
        const postContainer = img.closest('.like');
        const thumbs = postContainer.querySelector('#thumbs');
        thumbs.innerHTML = emojis[index];
        thumbs.classList.remove("fa-thumbs-up");

        const p = postContainer.querySelector('p');

        switch (index) {
            case 0:
                p.innerHTML = "Like";
                p.style.color = "#4080FF";
                p.style.marginTop = "5px";
                break;
            case 1:
                p.innerHTML = "Love";
                p.style.color = "#ED4D64";
                p.style.marginTop = "5px";
                break;
            case 2:
                p.innerHTML = "Care";
                p.style.color = "#FAD861";
                p.style.marginTop = "5px";
                break;
            case 3:
                p.innerHTML = "WoW";
                p.style.color = "#FAD861";
                p.style.marginTop = "5px";
                break;
            case 4:
                p.innerHTML = "angry";
                p.style.color = "#F4856A";
                p.style.marginTop = "5px";
                break;
            case 5:
                p.innerHTML = "Haha";
                p.style.color = "#FAD861";
                p.style.marginTop = "5px";
                break;
            case 6:
                p.innerHTML = "Sad";
                p.style.color = "#FAD861";
                p.style.marginTop = "5px";
                break;
        }
    });
});




// Show sponsred after somedelay

let firstPair = document.querySelector(".first-pair")
let secondPair = document.querySelector(".second-pair")
let thirdPair = document.querySelector(".third-pair")

console.log(firstPair, secondPair, thirdPair)

function updateSponser() {


    setTimeout(() => {

        firstPair.style.display = "none"

    }, 5000);

    setTimeout(() => {

        secondPair.style.display = "block"

    }, 5000);

    setTimeout(() => {

        secondPair.style.display = "none"

    }, 15000);

    setTimeout(() => {

        thirdPair.style.display = "block"

    }, 15000);


    setTimeout(() => {

        thirdPair.style.display = "none"

    }, 20000);

    setTimeout(() => {

        firstPair.style.display = "block"

    }, 20000);


}

updateSponser()


setInterval(() => {

    updateSponser()

}, 27000);


// confirm Or delete the friend request on user chice

let friendcontainer = document.querySelector(".friendrequests-container");
let buttonParent = document.querySelector("#parent");
let confirm = document.querySelector(".confir");
let remove = document.querySelector(".diel");
let friuendpara = document.querySelector(".mututak");

console.log(confirm, remove, buttonParent);

confirm.addEventListener("click", () => {
    // Remove the entire buttonParent element from the HTML
    buttonParent.remove();

    // Clear the content of friuendpara

});

remove.addEventListener("click", () => {

    friendcontainer.remove()
})
