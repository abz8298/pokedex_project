import Search from "../Search/Search";

//CSS import
import '../Pokedex/Pokedex.css';
import PokemonList from "../PokemonList/PokemonList";

function Pokedex(){
    return(
        <div className="pokedex-wrapper">
            <Search/>
            <PokemonList/>
        </div>
    )
}

export default Pokedex;