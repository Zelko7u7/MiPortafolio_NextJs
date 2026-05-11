import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.brand}>MiFooter</span>

      <ul className={styles.list}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/about">Acerca de</Link></li>
        <li><Link href="/favorite">Favoritos</Link></li>
      </ul>
    </footer>
  );
}