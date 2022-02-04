// function that picks a choice for computer
let computerPlay = function() {
    let a = Math.floor(Math.random()*10);
    return(a > 6 ? `scissors` : (a > 3 ? `paper` : `rock`));
}

// function that takes a user input for game

let playerPlay = function() {
    let a = (prompt(`what is your pick skinbag`, ``));
    return(a);
}

// well the game that compares two picks

let playRound = function(human,comp) {

    let a = human.toLowerCase();

    if (a == comp) {
        return(`Whoa we have a draw no way yikes that's cringe`);
    } else if (!!((a == `rock` && comp == `scissors`)||(a == `scissors` && comp == `paper`)||(a == `paper` && comp == `rock`))) {
        return(`Good job buster, ${human} beats ${comp}!`);
    } else if ((a != `rock`)&&(a != `scissors`)&&(a != `paper`)) { 
        return(`Da fug is a ${human}`);
    } else {
        return(`Sorry mate you lose ${comp} beats your ${human}`);
    }
    }

//loop it 5 times

let game = function() {
    for (let i = 0; i < 5; i++) {
        let playerPick = playerPlay();
        let compPick = computerPlay();

        console.log(playRound(playerPick,compPick));
    }
    return;
}

game();