import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./card";
import "./main.css";

export function GetImages({
  diffculty,
  images,
  setImages,
  choice,
  setChoice,
  currentScore,
  bestScore,
  refresh,
}) {
  function diffcultyToNumber() {
    let number = 0;
    if (diffculty === "easy") {
      return (number = 4);
    } else if (diffculty === "medium") {
      return (number = 8);
    } else if (diffculty === "hard") {
      return (number = 12);
    }
  }

  function setLoader(setDisplay){
    const loadingIcon = document.querySelector(".loading-icon");
    loadingIcon.style.display = `${setDisplay}`
  }

  useEffect(() => {
    console.log("THis is re-rendering");
    function imageIndex() {
      const diffcultyInt = diffcultyToNumber();
      const pokemon = [
        "Bulbasaur",
        "Ivysaur",
        "Venusaur",
        "Charmander",
        "Charmeleon",
        "Charizard",
        "Squirtle",
        "Wartortle",
        "Blastoise",
        "Caterpie",
        "Metapod",
        "Butterfree",
        "Weedle",
        "Kakuna",
        "Beedrill",
        "Pidgey",
        "Pidgeotto",
        "Pidgeot",
        "Rattata",
        "Raticate",
        "Spearow",
        "Fearow",
        "Ekans",
        "Arbok",
        "Pikachu",
        "Raichu",
        "Sandshrew",
        "Sandslash",
        "Nidoran",
        "Nidorina",
        "Nidoqueen",
        "Nidorino",
        "Nidoking",
        "Clefairy",
        "Clefable",
        "Vulpix",
        "Ninetales",
        "Jigglypuff",
        "Wigglytuff",
        "Zubat",
        "Golbat",
        "Oddish",
        "Gloom",
        "Vileplume",
        "Paras",
        "Parasect",
        "Venonat",
        "Venomoth",
        "Diglett",
        "Dugtrio",
        "Meowth",
        "Persian",
        "Psyduck",
        "Golduck",
        "Mankey",
        "Primeape",
        "Growlithe",
        "Arcanine",
        "Poliwag",
        "Poliwhirl",
        "Poliwrath",
        "Abra",
        "Kadabra",
        "Alakazam",
        "Machop",
        "Machoke",
        "Machamp",
        "Bellsprout",
        "Weepinbell",
        "Victreebel",
        "Tentacool",
        "Tentacruel",
        "Geodude",
        "Graveler",
        "Golem",
        "Ponyta",
        "Rapidash",
        "Slowpoke",
        "Slowbro",
        "Magnemite",
        "Magneton",
        "Farfetch'd",
        "Doduo",
        "Dodrio",
        "Seel",
        "Dewgong",
        "Grimer",
        "Muk",
        "Shellder",
        "Cloyster",
        "Gastly",
        "Haunter",
        "Gengar",
        "Onix",
        "Drowzee",
        "Hypno",
        "Krabby",
        "Kingler",
        "Voltorb",
        "Electrode",
        "Exeggcute",
        "Exeggutor",
        "Cubone",
        "Marowak",
        "Hitmonlee",
        "Hitmonchan",
        "Lickitung",
        "Koffing",
        "Weezing",
        "Rhyhorn",
        "Rhydon",
        "Chansey",
        "Tangela",
        "Kangaskhan",
        "Horsea",
        "Seadra",
        "Goldeen",
        "Seaking",
        "Staryu",
        "Starmie",
        "Mr. Mime",
        "Scyther",
        "Jynx",
        "Electabuzz",
        "Magmar",
        "Pinsir",
        "Tauros",
        "Magikarp",
        "Gyarados",
        "Lapras",
        "Ditto",
        "Eevee",
        "Vaporeon",
        "Jolteon",
        "Flareon",
        "Porygon",
        "Omanyte",
        "Omastar",
        "Kabuto",
        "Kabutops",
        "Aerodactyl",
        "Snorlax",
        "Articuno",
        "Zapdos",
        "Moltres",
        "Dratini",
        "Dragonair",
        "Dragonite",
        "Mewtwo",
        "Mew",
      ];

      function randomNumber() {
        const choose = Math.random() * 150;
        const rounded = Math.floor(choose);
        return rounded;
      }

      const pokemonArray = [];

      do {
        const random = randomNumber();
        const set = new Set(pokemonArray);
        if (pokemonArray.length !== set.size) {
          pokemonArray.pop();
        } else {
          pokemonArray.push(pokemon[random]);
        }
      } while (pokemonArray.length < diffcultyInt);

      return pokemonArray;
    }

    const set = imageIndex();
    async function gettingImages(pokemonName) {
      setLoader("block")
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        );
        const data = await response.json();
        const result = data.sprites.back_default;
        setImages((prev) => [...prev, result]);
        return result;
      } catch {
        new Error("Oops, something went wrong!");
      } finally {
        setLoader("none")
      }
    }
    async function mapArrayToState() {
      setLoader("block")
      try{
      await Promise.all(
        set.map(async (url) => {
          await gettingImages(url);
        }),
      );
    } catch {
      new Error("Oops, an error occured.")
    }
    finally{
      setLoader("none")
    }
    }

    mapArrayToState();

    return () => {
      setImages([]);
    };
  }, [refresh]);

  function setCardDisplay() {
    try{
    const cardDiv = document.querySelector(".card-display");
    if (diffculty === "easy") {
      cardDiv.style.gridTemplateColumns = "repeat(2, 1fr)";
      cardDiv.style.gridTemplateRows = "repeat(2,1fr)";
    } else if (diffculty === "medium") {
      cardDiv.style.gridTemplateColumns = "repeat(4, 1fr)";
      cardDiv.style.gridTemplateRows = "repeat(2,1fr)";
    } else if (diffculty === "hard") {
      cardDiv.style.gridTemplateColumns = "repeat(3, 1fr)";
      cardDiv.style.gridTemplateRows = "repeat(4,1fr)";
    }
  } catch{
    console.log("Oops, that element doesn't exist yet!")
  }
  }

  setCardDisplay();



  return (
    <>
      <div className="display-images">
        <div className="p-elements">
          <p>Current Score: {currentScore}</p>
          <p>Best Score: {bestScore}</p>
        </div>
        <div className="card-display">
          {images.map((url) => (
            <Card image={url} choice={choice} setChoice={setChoice} />
          ))}
        </div>
      </div>
    </>
  );
}
