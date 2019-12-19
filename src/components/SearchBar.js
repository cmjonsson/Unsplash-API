import React from 'react';

class SearchBar extends React.Component {
  state = { searchterm: '' }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchterm)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input type="text"
              value={this.state.searchterm}
              onChange={(e) => this.setState({ searchterm: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;