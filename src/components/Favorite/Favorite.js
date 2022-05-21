import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFilteredCards(state));
  console.log('favoriteCards: ', favoriteCards);

  return (
    <div className={styles.hero}>
      <PageTitle title="Favorite" />
      <ul className={styles.cards}>
        {favoriteCards.map((card) => (
          <Card
            key={card.id}
            cardId={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
