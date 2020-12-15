import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    searchValue: "",
    newPokemon: null
  }

  searchHandler = (event)=> {
    this.setState({searchValue: event.target.value})
  }

  createPokemonHandler = (pokemonObj)=>{
    fetch(`http://localhost:3000/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(pokemonObj)
    })
    .then(r => r.json())
    .then(updatedPokemonObj => this.setState({newPokemon: updatedPokemonObj}))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createHandler={this.createPokemonHandler} />
        <br />
        <Search value={this.state.searchValue} searchHandler={this.searchHandler} />
        <br />
        <PokemonCollection searchValue={this.state.searchValue} newPokemon={this.state.newPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
