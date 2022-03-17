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



    for (let i = 0; i <= 10*deck.length; i++){

        let place1 = Math.floor(Math.random()*deck.length);
        let place2 = Math.floor(Math.random()*deck.length);
        let tmp = deck[place1];

        deck[place1] = deck[place2];
        deck[place2] = tmp; 

    }





    function display() {

        for(let i = 0; i<=deck.length;i++){
            var pl = document.querySelector('.playarea');

            // börjar bli sent nu...
            // får inte till att skapa <li>, för jag vill gör en li som har bilden i sig. Li ska hålla cardnum även. 
 
            // var cardli = document.createElement("li");
            // cardli.setAttribute("${i}");
            // pl.appendChild(cardli);

            var pic = document.createElement("img");
            pic.src = "img/minesweeper-img/bak.png";
            pl.appendChild(pic);
        
        
        }
        

    }
    display()


    // jag tänkte göra om man clicka byter man ut bak.png till matchade bild till cardnum. 
    // Dock vet jag ej om den är dålig id med man inte kan flippa. 
    


   







// skapa en vändare function

// skapa en som ränkar vända kort och checkar om dom matchar

// function som hantera när alla kort är vända (går att kanske få in checkare med)