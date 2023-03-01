// import { Component } from 'react';
import { Cat } from '../../App';
import './card.styles.css';

type CardProps = {
  cat: Cat;
}

// Functional component
const Card = ({cat}: CardProps) => {
  const { id, name, email } = cat

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id + 100}?set=set4&size=180x180`}
        alt={`cat ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// // Class component
// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.cat;

//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id + 100}?set=set2&size=180x180`}
//           alt={`cat ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
