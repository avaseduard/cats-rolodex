import Card from '../card/card.component';
import { Cat } from '../../App';
import './card-list.styles.css';

type CardListProps = {
  cats: Cat[];
};

// Functional component
const CardList = (
  { cats }: CardListProps // directly destructuring the props directly
) => (
  <div className="card-list">
    {cats.map(cat => {
      return <Card cat={cat} />;
    })}
  </div>
);

// // Class component
// class CardList extends Component {
//   render() {
//     console.log('render card-list');

//     const { cats } = this.props;

//     return (
//       <div className="card-list">
//         {cats.map(cat => {
//           return <Card cat={cat} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
