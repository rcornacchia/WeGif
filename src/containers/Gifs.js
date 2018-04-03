import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTrending } from '../actions';

const Container = styled.div`
  display: inline-block;
  width: 100%;
`

const Gif = styled.img`
  display: inline-block;
`

class Gifs extends Component {
  componentDidMount() {
    this.props.getTrending();
  }

  render() {
    const { gifs } = this.props;

    return (
      <Container>
        {
          gifs && gifs.map((gif, i) => (
            <Gif key={i} src={gif.images.fixed_height.url} />
          ))
        }
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getTrending: () => dispatch(fetchTrending())
})

const mapStateToProps = state => ({
  gifs: state.searches[state.current]
});

export default connect(mapStateToProps, mapDispatchToProps)(Gifs);
