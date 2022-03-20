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



    for (let i = 0; i <= deck.length*10; i++){

        let place1 = Math.floor(Math.random()*deck.length);
        let place2 = Math.floor(Math.random()*deck.length);
        let tmp = deck[place1];

        deck[place1] = deck[place2];
        deck[place2] = tmp; 

    }


    function display() {

        for(let i = 0; i<=deck.length-1;i++){
            var pl = document.querySelector('.playarea');


            var contli = document.createElement("li");
            contli.id = deck.valueOf(deck.cardnum)[i].cardnum;
            contli.className = "card"
            pl.appendChild(contli);
            // bimg = back image
            var bimg = document.createElement("img")
            bimg.src = "img/minesweeper-img/bak.png";
            bimg.className = "back"
            contli.appendChild(bimg)
            // dimg = deck image
            var dimg = document.createElement("img")                      
            dimg.src = "img/minesweeper-img/" + deck.valueOf(deck.imgnum)[i].imgnum + ".png";
            dimg.className = "front";
            contli.appendChild(dimg);

            

        
        };
        

    };
    // kan göra så man kan starta spelet med starta funktion display
    display();


    document.querySelectorAll(".card").forEach(elmt => {
    
            elmt.addEventListener("click",()=>{
                elmt.querySelector(".front").classList.toggle("activecard"); 
                elmt.querySelector(".back").classList.toggle("onback"); 
                
            })
            
    });

   

    // gör en funktion som läser om det finns det finns 2 activa kort och om det blir ett trejde så tar den bort alla aktiva kort. 
    // Men om 2 aktiv har matchade id lägg till ny class som är "matched"

    // sedan funktion som räknar poäng och sätter igång proces att avsluta
    // funktionen kan räkna matched och sedan jämföra med decksizepair för vet om det är klart

    // bonus är restarta utan refresha sidan

    // bonus är start knapp och vinn knapp som vanliga minesweeper. Smile som man klickar och om man vinner blir det sunglasses. 
    // detta må kräva lägga till en nav över spelet
    // bonus är när man hoovrar över ovända kort (kan göras med class back kanske)
    // bonus är göra en timmer som liknar minesweeper
    

    // bonus också är leta font

    console.log("Om du ser mig i consolen kan alla kod köras igenom typ, kanske spara dig 3 timmar om tro ny kod körs igenom")


   







// skapa en vändare function

// skapa en som ränkar vända kort och checkar om dom matchar

// function som hantera när alla kort är vända (går att kanske få in checkare med)