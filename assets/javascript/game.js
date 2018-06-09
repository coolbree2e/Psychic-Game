// the game will reset after wrong or no guesses

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var yes = 0;
// var computerChoices = ['b']
var no = 0;
var hide = "Can't tell if you're pshychic or curious"
var pguesses = [];
// var pguesses1
// starts the game
document.onkeyup = function (event) {
    // for when the palyer makesa choice
    var userGuess = event.key;
    // comp taking random letter
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // log of quesses

    document.querySelector('#pguess').innerHTML = "Your guesses so far:  " + pguesses;
    pguesses.push(userGuess);

    console.log({
        userGuess
    });
    // shows result of pick
    document.getElementsByClassName('result')[0].style.display = "none";
    console.log({
        compGuess
    })

    if (userGuess === compGuess) {
        yes++;
        // display you are pshycic
        document.getElementById('yesstmnt').style.display = 'block';
        document.getElementById('nostmnt').style.display = 'none';
        document.getElementById('user-win').innerHTML = yes;

    } else {
        no++;
        // dispplay no you are not
        document.getElementById('nostmnt').style.display = 'block';
        document.getElementById('yesstmnt').style.display = 'none';
        document.getElementById("user-loss").innerHTML = no;
        // console.log(no)

        // resets the # of tries
        if (no === 10 ) {
            yes = 0;
            no = 0;
            document.getElementById('user-win').innerHTML = yes;
            document.getElementById("user-loss").innerHTML = no;
        }


    };

    // reset the log of player guesses
    if (pguesses.length === 10) {
        console.log("Reset guesses");
        pguesses = [];
    };
};




console.log({
    pguess
});
console.log({
    no
})
console.log({
    yes
})









// this is just for fun
document.getElementById("hidden").addEventListener("click", function () {
    alert(hide)
});