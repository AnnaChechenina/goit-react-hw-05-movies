import { Link } from 'react-router-dom';
import css from './BackBtn.module.css';

const BackBtn = ({ to, children }) => {
  return (
    <button className={css.btn} type="button">
      <Link to={to}>{children}</Link>
    </button>
  );
};

export default BackBtn;
