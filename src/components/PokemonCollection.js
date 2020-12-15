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

  displayPokemon(){
    return this.state.pokemonApi.map(pokemonObj => <PokemonCard pokemon={pokemonObj}/>)
  }

  render() {
    console.log(this.state)
    return (
      <Card.Group itemsPerRow={6}>
        {this.displayPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
