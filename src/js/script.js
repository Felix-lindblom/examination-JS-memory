// Antal bilder du har skriv här in
let decksizepair = "12"

function memoDeck(){
    let deck = new Array();
    for(let i = 0; i < 2*decksizepair; i++){
        for(let x = 0; x < 2; x++){

            let memocard = {imgnum: i + 1, cardnum: 2 * decksizepair - i }
            // tror detta skapar ett unikt kort för varsit och unkit tal. 
            // Kan krävas gör om matten där jag vet ej om flertal matte i js funkar.
            

        }

    }
}

function shuffleDeck(deck){

    for (let i = 0; i < 100; i++){

        let place1 = math.ceil((Math.random()* deck.length));
        let place2 = math.ceil((Math.random()* deck.length));
        let tmp = deck[place1];
        
        deck[place1] = deck[place2];
        deck[place2] = tmp; 


    }
}

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