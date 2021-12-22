export default function SearchPokemon(buttonSearch){
const d=document;
d.addEventListener('click',(e)=>{
    if(e.target.matches(buttonSearch)){
        console.log("hola");
        
        const namePoke=d.getElementById("namePoke");
        const pokemon=d.getElementById('pokemon').value
        const tipoPoke=d.getElementById('tipoPoke');
        const tipoPoke2=d.getElementById('tipoPoke2');
        const numberPoke=d.getElementById('numberPoke');
       fetchData(pokemon);
        
    }
})
const fetchData=async(poke)=>{
    try{
        const res=await  fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const data=await res.json();
        console.log(data)
        pintarPoke(data)
    }catch(error){
        console.log(error)
    }
}
const pintarPoke=(pokeData)=>{
    const vida=d.getElementById('hp').innerText=pokeData.stats[0].base_stat
    const attack=d.getElementById('attack').innerText=pokeData.stats[1].base_stat
    const defense=d.getElementById('defense').innerText=pokeData.stats[2].base_stat
    const Sattack=d.getElementById('Sattack').innerText=pokeData.stats[3].base_stat
    const Sdefense=d.getElementById("Sdefense").innerText=pokeData.stats[4].base_stat
    const speed=d.getElementById('speed').innerText=pokeData.stats[5].base_stat
    const imgPoke=d.getElementById("pokeImg").src=`${pokeData.sprites.other.dream_world.front_default}`
    numberPoke.innerHTML=`#${pokeData.id}`
    namePoke.innerHTML=pokeData.species.name;
    tipoPoke.innerHTML=pokeData.types[0].type.name;
   
    if(pokeData.types[1]){
        tipoPoke2.innerHTML=pokeData.types[1].type.name;
    }else{
        tipoPoke2.innerHTML="--"
    }
    e.preventDefault();
}

}