import * as styles from './styles.css';

type Props = {
  pageLabels: string[];
  activePageIndex: number;
  setActivePageIndex: (index: number) => void;
};

function Header({ pageLabels, activePageIndex, setActivePageIndex }: Props) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {pageLabels.map((label, index) => (
          <button
            type="button"
            key={index}
            className={`${styles.link} ${activePageIndex === index ? styles.active : ''}`}
            onClick={() => {
              setActivePageIndex(index);
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
