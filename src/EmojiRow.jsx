import React from 'react';

export class EmojiRow extends React.Component {
 
  render() {
    const { emoji } = this.props 
    return (
      <div className="hover">
        <button
          style={{ fontSize: '1.5rem', marginLeft: '-30px' }}
          onClick={() => {
            navigator.clipboard.writeText(emoji.symbol);
          }}
        >
          {emoji.symbol} - {emoji.title}
        </button>
      </div>
    );
  }
}
