import * as styles from './styles.css';

const navLabels = ['소개', '활동', '관심사'];

type Props = {
  activePageIndex: number;
  setActivePageIndex: (index: number) => void;
};

function Header({ activePageIndex, setActivePageIndex }: Props) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {navLabels.map((label, index) => (
          <button
            type="button"
            key={index}
            className={`${styles.link} ${activePageIndex === index ? styles.active : ''}`}
            onClick={() => {
              setActivePageIndex(index);
              console.log('click');
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
