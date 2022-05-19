import PageTitle from '../PageTitle/PageTitle';
import styles from '../PageTitle/PageTitle.module.scss';

const About = () => {
  return (
    <div className={styles.hero}>
      <PageTitle title="About" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  );
};

export default About;
