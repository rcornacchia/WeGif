import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react'
import { searchGiphy } from '../actions';

const Container = styled.div`
  display: inline-block;
  margin: 25px 0;
`

const SearchButton = styled.div`
  display: inline-block;
  margin: 0 5px;
`

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ query: '' });
    this.props.search(this.state.query);
  }

  render() {
    return (
      <Container>
        <form>
          <Input
            size='huge'
            placeholder='Search for GIFs'
            value={this.state.query}
            onChange={this.handleChange}
          />
          <SearchButton>
            <Button primary
              size='huge'
              type='submit'
              value='submit'
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </SearchButton>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(searchGiphy(query))
});

export default connect(null, mapDispatchToProps)(SearchBar);