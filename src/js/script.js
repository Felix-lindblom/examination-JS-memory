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


            var contli = document.createElement("li");
            contli.id = deck.valueOf(deck.cardnum)[i].cardnum;
            pl.appendChild(contli);
            
            var dimg = document.createElement("img")
            dimg.src = "img/minesweeper-img/" + deck.valueOf(deck.imgnum)[i].imgnum + ".png";
            dimg.className = "front"
            contli.appendChild(dimg);

            var bimg = document.createElement("img")
            bimg.src = "img/minesweeper-img/bak.png";
            bimg.className = "back"
            contli.appendChild(bimg)
            
            
        
        
        }
        

    }
    display()


    // click funktion sedan som vänder 2 i taget och kan göra ett vilkor test

    // sedan funktion som räknar poäng och sätter igång proces att avsluta

    // bonus är restarta utan refresha sidan

    // bonus är start knapp och vinn knapp som vanliga minesweeper. Smile som man klickar och om man vinner blir det sunglasses. 
    // detta må kräva lägga till en nav över spelet
    // bonus är när man hoovrar över ovända kort (kan göras med class back kanske)
    // bonus är göra en timmer som liknar minesweeper
    


   







// skapa en vändare function

// skapa en som ränkar vända kort och checkar om dom matchar

// function som hantera när alla kort är vända (går att kanske få in checkare med)