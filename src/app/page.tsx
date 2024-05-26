import React from 'react';
import styles from './Page.module.scss';
import { AboutUs } from '@/components/application/MainPage/AboutUs/AboutUs';


export default async function Page() {
  return (
    <div className={styles.stickyContainer}>
      <AboutUs />
         </div>
  );
}
