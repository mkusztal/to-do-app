import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = (props) => {
  const searchStringSelector = useSelector((state) => state.setSearchString);
  const cards = useSelector((state) =>
    state.cards.filter(
      (card) =>
        card.columnId === props.id &&
        card.title?.toLowerCase().includes(searchStringSelector?.toLowerCase())
    )
  ); /* state is a callback function */

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;

// {columns.map(column => <Column key={column.id} id={column.id} title={column.title} icon={column.icon} cards={column.cards} />)}
