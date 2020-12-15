import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  state = {
    pokemonApi: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(r => r.json())
    .then(pokemon => {
      this.setState({pokemonApi: pokemon})
    })
  }

  filterPokemon = () => {
    let newArray = this.state.pokemonApi.filter(pokemonObj => {
      return pokemonObj.name.toLowerCase().includes(this.props.searchValue.toLowerCase())
    })
    return newArray
  }

  displayPokemon(){
    return this.filterPokemon().map(pokemonObj => <PokemonCard pokemon={pokemonObj}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.displayPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
