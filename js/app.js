import SearchPokemon from "./fetchPoke.js";

const d=document;
d.addEventListener("DOMContentLoaded",(e)=>{
    SearchPokemon("#buscar")
    e.preventDefault();
})