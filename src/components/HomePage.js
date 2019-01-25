import React, { Component, Fragment } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from './Footer';

class HomePage extends Component {
  render() {
    const { characters, filteredCharacters, userQuery, isFetching, handleInputChange } = this.props;
    return (
      <Fragment>
        <Header
          page="app__header"
          userQuery={userQuery}
          handleInputChange={handleInputChange}
        />

        <Main
          isFetching={isFetching}
          characters={characters}
          filteredCharacters={filteredCharacters}
        />

        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;