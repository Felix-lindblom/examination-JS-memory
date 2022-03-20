// Antal bilder du har lagt in och vill köra med skriv in det här
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


//      Tyckte deck.length*10 var inte tillräckligt 


    for (let i = 0; i <= deck.length**2; i++){

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

    let timeshere = 0
    let firstcard = ""
    let score = 0

    // cotc = class of the card    
    function unturn(cotc){
        let elmt = document.querySelectorAll("." + cotc)
            if(elmt.length > 0) {
            elmt[0].classList.remove(cotc); 
            elmt[1].classList.remove(cotc); 
        }                        
    }

    document.querySelectorAll(".card").forEach(elmt => {

            // lcotc = looking (for) class of the card acotc = Added class of the card
            function turn(lcotc,acotc){
                elmt.querySelector("."+ lcotc).classList.add(acotc); 
            }
                
                elmt.addEventListener("click",(celmt)=>{

                    if(timeshere < 2){
                        if(timeshere===1){
                    
                            if(Math.abs(firstcard - (celmt.path[1]).id) === decksizepair ){
                                turn("front","hit")
                                turn("back","lockback") 
                                timeshere = 1
                                firstcard = ""
                                score++
                                console.log("hit")
                            }else{
                                turn("front","activecard")
                                turn("back","onback")
                                timeshere++
                                firstcard = ""
                            }

                        }else{
                            timeshere++
                            firstcard = (celmt.path[1]).id
                            elmt.querySelector(".front").classList.add("activecard"); 
                            elmt.querySelector(".back").classList.add("onback");
                        }

                    }else{
                        timeshere = 0
                        unturn("activecard");
                        unturn("onback");
                    }
                
                    
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