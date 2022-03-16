// Antal bilder du har skriv här in
let decksizepair = 12;

const deck = [];

    for(let i = 1;i<=decksizepair  ;i++){

        for(let j=1;j<=2;j++){

            let memocard = { 
                imgnum: i,
                cardnum: (decksizepair*j) - i +1
            };

           

            deck.push(memocard)
        }
        
        
    }
//  console.log(deck), stämmer blir varan så ser lite udda men det innebär det är redan blandat med varan
console.log(deck)


    for (let i = 0; i <= 10*deck.length; i++){

        let place1 = Math.floor(Math.random()*deck.length);
        let place2 = Math.floor(Math.random()*deck.length);
        let tmp = deck[place1];

        deck[place1] = deck[place2];
        deck[place2] = tmp; 

    }


    // mer här med få det till rätt format och sånt
function inputDeckHTML (deck){

    // kort består en <li> som sedan har en <img> i sig.
    document.getElementById("playarea").innerHTML = "";

    for(let i = 0; i<deck.length;i++ ){
        let memocard = document.createElement("li");
        memocard.className = cardnum
        // Vill inom li skapa en <img> som använder bild för baksida, sedan ska en senare funktion byta ut den till imgnum. Men går att testa med imgnum till en början
        // tror classnamet är fel 
    }    

}


// skapa en vändare function

// skapa en som ränkar vända kort och checkar om dom matchar

// function som hantera när alla kort är vända (går att kanske få in checkare med)