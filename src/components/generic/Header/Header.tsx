'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import clsx from 'clsx';
import { Container } from '../Container/Container';

type HeaderDataType = {
  pagesData: PageData[];
  mail: string;
  phone: string;
};

type PageData = {
  id: string;
  pageTitle: string;
  address: string;
};

const headerData = {
  pagesData: [
    { id: '0', pageTitle: 'Услуги', address: 'services' },
    { id: '1', pageTitle: 'Арсенал', address: 'arsenal' },
    { id: '2', pageTitle: 'Новости', address: 'news' },
    { id: '3', pageTitle: 'Контакты', address: 'contacts' },
  ],

  mail: 'tir300metrov@energo-oil.by',
  phone: '+375 29 150 07 74',
};

export const Header: React.FC = () => {
  const pagesData: HeaderDataType = headerData;

  const chapterContent = pagesData.pagesData.map((i) => {
    return (
      <li key={i.id} className={styles.chapter}>
        <Link className={styles.chapterLink} href={i.address}>
          {i.pageTitle}
        </Link>
      </li>
    );
  });

  const mailContent = (
    <p className={clsx(styles.mail, styles.desctopMail)}>
      <Link href={`mailto: ${headerData.mail}`}>{headerData.mail}</Link>
    </p>
  );

  const numberContent = (
    <p className={clsx(styles.phone, styles.desctopPhone)}>
      <Link href={`tel: ${headerData.phone}`}>{headerData.phone}</Link>
    </p>
  );

  return (
    <Container>
      <div className={styles.header}>
        <div className={styles.chapterContent}>
          <Logo />
          {chapterContent}
        </div>
        <div className={styles.theme}>color theme</div>
        <div className={styles.contactsContent}>
          {numberContent}
          {mailContent}
        </div>
        <button className={styles.callOrder}>Заказать звонок</button>
      </div>
    </Container>
  );
};
