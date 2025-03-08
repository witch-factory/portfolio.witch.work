import { motion } from 'motion/react';
import * as styles from './styles.css';
import { INTRO_TEXTS, INTRO_TITLE, Social, socialLinks } from '@/data/intro';

function SocialLink({ label, url, icon }: Social) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className={styles.socialLink}
      aria-label={label}
    >
      <img src={icon} alt={label} className={styles.socialLinkIcon} />
      {label}
    </motion.a>
  );
}

// TODO: 텍스트가 점점 나타나도록 애니메이션 추가
function IntroCard() {
  return (
    <motion.article className={styles.container}>
      <h1 className={styles.title}>{INTRO_TITLE}</h1>
      {INTRO_TEXTS.map((text, index) => (
        <p key={index} className={styles.description}>
          {text}
        </p>
      ))}
      <nav className={styles.socialLinkContainer}>
        {socialLinks.map(link => (
          <SocialLink key={link.label} {...link} />
        ))}
      </nav>
    </motion.article>
  );
}

export default IntroCard;
