import React, { Component } from "react";
import { fetchCharacters } from "../services/characterService";
import uniqueId from "lodash.uniqueid";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      userQuery: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    fetchCharacters().then(data => {
      const dataWithId = data.map(item => {
        return {
          ...item,
          id: uniqueId()
        };
      });

      this.setState({ characters: dataWithId });
    });
  }

  handleInputChange(event) {
    const currentQuery = event.currentTarget.value;
    this.setState({ userQuery: currentQuery });
  }

  filterByName() {
    const { characters, userQuery } = this.state;
    const filteredCharacters = characters.filter(character => {
      const characterName = character.name.toLowerCase();
      return !userQuery || characterName.includes(userQuery.toLowerCase());
    });
    return filteredCharacters;
  }

  render() {
    const { characters, userQuery } = this.state;
    const filteredCharacters = this.filterByName();
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Harry Potter Characters</h1>

          <Filter
            userQuery={userQuery}
            handleInputChange={this.handleInputChange}
          />
        </header>

        <main className="app__main">
          <CharacterList filteredCharacters={filteredCharacters} />
        </main>
      </div>
    );
  }
}

export default App;
