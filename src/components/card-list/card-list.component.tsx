// import { Component } from 'react';
import Card from '../card/card.component';
import { Monster } from '../../App';
import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
};

const CardList = (
  { monsters }: CardListProps // directly destructuring the props directly
) => (
  <div className="card-list">
    {monsters.map(monster => {
      return <Card monster={monster} />;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     console.log('render card-list');

//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map(monster => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
