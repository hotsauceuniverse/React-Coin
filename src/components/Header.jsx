import title_logo from '../img/React.png';
import '../App.css';

export default function header() {
  return (
    <div className="header">
      <img className="title" alt="title" src={title_logo} />
      <p className="comment">React Coin</p>
    </div>
  )
}