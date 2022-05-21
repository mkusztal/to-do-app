import styles from './Card.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeCard } from '../../redux/cardsRedux';
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

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard({ cardId }));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        className={clsx(styles.card_button, isFavorite && styles.isFavorite)}
        onClick={handleSubmit}
      >
        <i className="fa fa-star-o"></i>
      </button>
      <button className={styles.card_button} onClick={handleRemove}>
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default Card;
