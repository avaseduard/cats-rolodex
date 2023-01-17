// import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = (
  { monsters } // we are destructuring the props directly
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
