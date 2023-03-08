import React from 'react';
// import EmojiResults from './EmojiResults';
// import { emojis } from './emojis';

export class SearchInput extends React.Component {

 updateUserSearch = (state) => this.props.updateUserSearch(state);

 onChange = (e) => {
   e.preventDefault();
    this.updateUserSearch(e.target.value);
}
   

  filterData = () => {
    const { data, query } = this.state;
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    return filteredData;
  };

  render() {
    return (
      <div>
        <input
         //  value={this.props.mainState.userInput}
          onChange={this.onChange}
          type="search"
        />
      </div>
    );
  }
}
