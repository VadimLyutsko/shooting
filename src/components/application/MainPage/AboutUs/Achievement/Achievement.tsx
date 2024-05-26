import React from 'react';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import { AldrichFont, SpaceGrotesk } from 'src/app/fonts';
import styles from './Achievement.module.scss';

type AchievementProps = {
  id: string;
  year: string;
  place: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
};

export const Achievement: React.FC<AchievementProps> = ({ id, year, place, text, image, imageAlt }) => {
  return (
    <li key={id} className={styles.itemContainer}>
      <div className={styles.achieveBlock}>
        <p className={styles.title}>{year}</p>
        <div className={styles.occupiedPlace}>
          <p className={clsx(styles.bracket, AldrichFont.className)}>(</p>
          <p className={clsx(styles.num, SpaceGrotesk.className)}>{place}</p>
          <p className={clsx(styles.bracket, AldrichFont.className)}>)</p>
        </div>
        <div className={styles.imgContainer}>
          <Image className="object-cover" src={image} alt={imageAlt} width={25} height={25} />
        </div>
      </div>

      <p className={styles.description}>{text}</p>
    </li>
  );
};
