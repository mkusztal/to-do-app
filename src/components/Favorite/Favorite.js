import PageTitle from '../PageTitle/PageTitle';
import styles from '../PageTitle/PageTitle.module.scss';

const Favorite = () => {
  return (
    <div className={styles.hero}>
      <PageTitle title="Favorite" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  );
};

export default Favorite;
