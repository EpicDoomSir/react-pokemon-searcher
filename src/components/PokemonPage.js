import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    searchValue: ""
  }

  searchHandler = (newValue)=> {
    this.setState({searchValue: newValue})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search value={this.state.searchValue} searchHandler={this.searchHandler} />
        <br />
        <PokemonCollection searchValue={this.state.searchValue} />
      </Container>
    )
  }
}

export default PokemonPage
