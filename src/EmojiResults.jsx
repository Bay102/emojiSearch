import React from 'react';
import { EmojiRow } from './EmojiRow';

export class EmojiResults extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.filteredEmojis.slice(0, 20).map((emoji) => (
            <li style={{ listStyle: 'none', margin: '8px 0' }} key={emoji.title}>
              <EmojiRow emoji={emoji} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
