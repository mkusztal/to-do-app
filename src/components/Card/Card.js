import styles from './Card.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const dispatch = useDispatch();
  const cardId = props.cardId;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToFavorite({ cardId }));
    setIsFavorite(!isFavorite);
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        className={clsx(
          styles.favorite_button,
          isFavorite && styles.isFavorite
        )}
        onClick={handleSubmit}
      >
        <i className="fa fa-star-o"></i>
      </button>
    </li>
  );
};

export default Card;
