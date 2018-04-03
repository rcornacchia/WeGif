import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react'
import Title from '../components/Title';
import { searchGiphy } from '../actions';

const Container = styled.div`
  display: inline-block;
  width: 200px;
  padding: 25px 50px;
`

const ButtonContainer = styled.div`
  margin: 10px 0;
`

class History extends Component {
  constructor(props) {
    super(props);
    this.onClick = (...args) => this.handleClick.bind(this, ...args);
  }

  handleClick(query, e) {
    e.preventDefault();
    this.props.search(query);
  }

  render() {
    const { history } = this.props;

    return (
      <Container>
        <Title>History</Title>
        { 
          history.slice().reverse().map((query, i) => (
            <ButtonContainer key={i}>
              <Button
                primary
                onClick={this.onClick(query)}
                size='huge'
              >
                {query}
              </Button>
            </ButtonContainer>
          ))
        }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history
})

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(searchGiphy(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
