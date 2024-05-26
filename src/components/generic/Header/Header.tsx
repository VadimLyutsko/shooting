'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';

const pagesData = [
  { id: '0', pageTitle: 'Услуги', address: 'services' },
  { id: '1', pageTitle: 'Арсенал', address: 'arsenal' },
  { id: '2', pageTitle: 'Новости', address: 'news' },
  { id: '3', pageTitle: 'Контакты', address: 'contacts' },
];

export const Header: React.FC = () => {
  const chapterContent = pagesData.map((i) => {
    return (
      <li key={i.id} className={styles.chapter}>
        <Link className={styles.chapterLink} href={i.address}>
          {i.pageTitle}
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.header}>
      <Logo />
      {chapterContent}
    </div>
  );
};
