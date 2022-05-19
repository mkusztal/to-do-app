import styles from './PageTitle.module.scss';

const PageTitle = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );
};

export default PageTitle;
