"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const arena = document.querySelector(".arenas");

    // Create new characters and place them on the page (arena)
    class Character {
        constructor(name, hp, img, weapon) {
            this.name = name;
            this.hp = hp;
            this.img = img;
            this.weapon = weapon;
        }

        attack() {
            console.log(`${this.name} Fight...`);
        }
    }

    let char1 = new Character("Sonya", 75, "http://reactmarathon-api.herokuapp.com/assets/sonya.gif", ["Knife", "Bow"]),
        char2 = new Character ("Scorpion", 90, "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif", ["Bow", "Sword"]);

    function createPlayer(blockClass, character) {
        let player = document.createElement("div");
        player.classList.add(blockClass);
        player.innerHTML = `
            <div class="progressbar">
                <div class="life" style="width: ${character.hp}%"></div>
                <div class="name">${character.name}</div>
            </div>
            <div class="character">
                <img src=${character.img} />
            </div>
        `;
        return player;
    }

    function placeCharacters() {
        arena.appendChild(createPlayer("player1", char1));
        arena.appendChild(createPlayer("player2", char2))
    }

    placeCharacters();
});