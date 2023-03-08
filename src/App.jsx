import React, { useState } from 'react';
import './App.css';
import { EmojiResults } from './EmojiResults';
import { EmojiRow } from './EmojiRow';
import { emojis } from './emojis';
import { Header } from './Header';
import { SearchInput } from './SearchInput';

export default class App extends React.Component {
  state = {
    emojis: emojis,
    userInput: '',
  };

  updateUserSearch = (state) => {
    this.setState({
      userInput: state,
    });
  };

  render() {
    const filteredEmojis = this.state.emojis.filter((emoji) =>
      emoji.title.toLowerCase().includes(this.state.userInput.toLowerCase())
    );
    return (
      <div>
        <Header />
        <SearchInput mainState={this.state} updateUserSearch={this.updateUserSearch} />
        <EmojiResults filteredEmojis={filteredEmojis} mainState={this.state} />
      </div>
    );
  }
}
