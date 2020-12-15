import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }

  flipSprite = (e)=>{
    if (!this.state.flipped) {
      e.target.src = this.props.pokemon.sprites.back
      this.setState({flipped: !this.state.flipped})
    } else {
      e.target.src = this.props.pokemon.sprites.front
      this.setState({flipped: !this.state.flipped})
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.front} onClick={this.flipSprite}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
