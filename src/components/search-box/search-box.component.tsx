import { ChangeEventHandler } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

// Functional component
const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

// // Class component
// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
