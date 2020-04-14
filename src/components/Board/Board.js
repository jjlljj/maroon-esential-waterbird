import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          name: 'Winnie',
          color: '#8e6e95',
          cards: [
          ],
        },
        {
          name: 'Bob',
          color: '#39a59c',
          cards: [
          ],
        },
        {
          name: 'Thomas',
          color: '#344759',
          cards: [
          ],
        },
        {
          name: 'George',
          color: '#e8741e',
          cards: [
          ],
        },
      ],
    };
  }

  componentDidMount = () => {
    const lists = JSON.parse(localStorage.getItem('lists'));

    this.setState({ lists });
  };

  addCard = (text, index) => {
    const { lists } = this.state;

    const nextLists = [...lists];
    nextLists[index].cards.push({ text });

    this.setState({ lists: nextLists, key: Date.now() }, () => {
      localStorage.setItem('lists', JSON.stringify(nextLists));
    });
  };

  moveCard = (to = 'right', card, listIndex) => {
    const { lists } = this.state;

    const nextLists = [...lists];

    const destinationIndex =
      to === 'right' ? listIndex + 1 : to == 'left' ? listIndex - 1 : listIndex;

    nextLists[listIndex].cards = nextLists[listIndex].cards.filter(item => {
      return item.key !== card.key;
    });

    nextLists[destinationIndex].cards.push(card);

    this.setState({
      lists: nextLists,
    }, () => {
      localStorage.setItem('lists', JSON.stringify(nextLists));
    });
  };

  render() {
    const { lists } = this.state;

    return (
      <div className="board">
        {lists &&
          lists.length &&
          lists.map((list, index) => {
            const { name, color, cards } = list;

            return (
              <CardList
                showMoveLeft={index !== 0}
                showMoveRight={index < lists.length - 1}
                handleMoveCard={this.moveCard}
                addCard={this.addCard}
                name={name}
                color={color}
                cards={cards}
                index={index}
              />
            );
          })}
      </div>
    );
  }
}

const CardList = ({
  name,
  cards,
  color,
  showMoveLeft,
  showMoveRight,
  addCard,
  index,
  handleMoveCard,
}) => {
  return (
    <div className="cardList">
      <div className="cardListHeader" style={{ backgroundColor: color }}>
        {name}
      </div>
      <div>
        {cards &&
          !!cards.length &&
          cards.map(item => {
            return (
              <CardItem
                item={item}
                showMoveLeft={showMoveLeft}
                showMoveRight={showMoveRight}
                handleMoveCard={to => {
                  handleMoveCard(to, item, index);
                }}
              />
            );
          })}
      </div>
      <div>
        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            const text = window.prompt(`Add a new card to ${name}`);
            addCard(text, index);
          }}
        >
          + Add a card
        </button>
      </div>
    </div>
  );
};

const CardItem = ({ item, showMoveLeft, showMoveRight, handleMoveCard }) => {
  return (
    <div className="cardItem">
      {showMoveLeft && (
        <button
          type="button"
          onClick={() => {
            handleMoveCard('left');
          }}
        >
          {'<'}
        </button>
      )}
      <p>{item.text} </p>
      {showMoveRight && (
        <button
          onClick={() => {
            handleMoveCard('right');
          }}
        >
          {'>'}
        </button>
      )}
    </div>
  );
};

export default Board;
