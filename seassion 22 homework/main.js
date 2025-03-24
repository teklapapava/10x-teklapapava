// 1. Pokémon Battle – Function Basics


function compareAttack(pokemon1, attack1, pokemon2, attack2){
    if(attack1 > attack2){
        console.log(`${pokemon1} is stronger!`);
    }else{
        console.log(`${pokemon2} is stronger!`)
    }
}

compareAttack("Pikachu", 95, "Charizard", 84);



// 2. Hogwarts Spell Casting – Function Parameters

function castSpell(spell, wizard){
    console.log(`${wizard}  casts ${spell}`);
}

castSpell("Expelliarmus", "Hermione");

// 3. One Piece Bounty Calculator – Return Values

function calculateBounty(currentBounty, increase){
    return  currentBounty + increase;
}

let newBounty = calculateBounty(1_500_000_000, 500_000_000);
console.log(newBounty);


// 4. Jedi Training – Default Parameters

function trainJedi(name, strength = 50){
    return `${name} has  ${strength} Power`;
}

console.log(trainJedi("Luke", 100));
console.log(trainJedi("Rey"));


// 5. Gollum’s Precious – String Manipulation

function gollumSays(phrase){
    return `${phrase}...${phrase}...${phrase} ...`;
}

console.log(gollumSays("My precious"));



// 6. Super Mario Power-Up – Function Expressions

function powerUp(jumpHeight){
    return jumpHeight * 2;
}

console.log(powerUp(5));


// 7. Naruto’s Shadow Clone Jutsu – Arrow Functions

function shadowClone(count){
    return  count * 5 + " clones created! ";
}

console.log(shadowClone(10));

// 8. Sorting the Sorting Hat – Callback Functions

function sortStudent(name, Callback){
    console.log(`Sorting  ${name} into ${Callback()}`);
}

function house(){
    return "Gryffindor"
}

sortStudent("Hermione ",  house);


// 9. Infinity Gauntlet – Function Scope

function snapFingers(){
     let  stones = 6; 

    function checkStones(){
        console.log(`Thanos has ${stones} stones.`);
    } 
    checkStones();
}


snapFingers();


// 10. Time-Turner – Function Hoisting

turnBackTime();

function turnBackTime(){
    console.log("Going back in time!");
}


// 11. Batman’s Secret Identity – Function Closures

function batMan(){
    let btm = "I am a Batman"


        function darkKing(){
            return btm
        }
        return darkKing;

}

let darkMen = batMan();
console.log(darkMen());


// 12. The Enchanted Mirror – Higher-Order Functions


// function magicMirror (message){
//     return "The mirror says:";

//         function transformFunction(message){
//             return "Will I be rich?";
//         }
//     // console.log(magicMirror() + transformFunction());
//         // console.log(magicMirror()) + console.log(transformFunction());
// }




function  magicMirror(message, transformFunction){
    let transformedMessage = transformFunction(message);
    return "The mirror says: " + transformedMessage;
}


console.log(magicMirror("Will I be rich?", str => str.toUpperCase()));


// str => str.toUpperCase() → ეს არის ფუნქცია, რომელიც შეტანილ ტექსტს uppercase-ში გადაიყვანს
    






