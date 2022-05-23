import styles from './Card.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const dispatch = useDispatch();
  const cardId = props.cardId;

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    dispatch(addToFavorite({ cardId }));
    console.log('addToFavorite: ', addToFavorite);
  };

  const handleRemoveCard = (e) => {
    e.preventDefault();
    dispatch(removeCard({ cardId }));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        className={clsx(styles.star_button, isFavorite && styles.isFavorite)}
        onClick={handleAddToFavorite}
      >
        <i className="fa fa-star-o"></i>
      </button>
      <button className={styles.trash_button} onClick={handleRemoveCard}>
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default Card;
