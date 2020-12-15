import React from 'react'


class Search extends React.Component {

  state = {
    value: ""
  }
  
  localSearchHandler = (e) => {
    this.props.searchHandler(e.target.value)
  }

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={this.props.value} onChange={this.localSearchHandler} />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
