import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = (props) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action(
      {
        title: title,
      },
      props.columnId
    );
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={'Add new card'}
        type="text"
      ></TextInput>
      <Button className={styles.button}>ADD CARD</Button>
    </form>
  );
};

export default CardForm;
