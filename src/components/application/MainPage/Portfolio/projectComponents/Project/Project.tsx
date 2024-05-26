import React from 'react';
import Image from 'next/image';
import styles from './Project.module.scss';
import { SpaceGrotesk } from 'src/app/fonts';
import Link from 'next/link';
import { ProjectPropsType } from 'src/common/types/componentsTypes';
import SVG from 'react-inlinesvg';
import clsx from 'clsx';

const Project: React.FC<ProjectPropsType> = ({ image, technology, title, description, arrow }) => {
  return (
    <div className={styles.project}>
      <>
        <Image
          className={styles.logo1920}
          sizes="Почему не работает (три разные картинки в одну)???"
          src={image.image1920}
          alt={image.imageDescription}
          fill={false}
        />

        <Image
          className={styles.logo1440}
          sizes="Почему не работает, разобраться"
          src={image.image1440}
          alt={image.imageDescription}
          fill={false}
        />

        <Image
          className={styles.logo420}
          sizes="Почему не работает, разобраться"
          src={image.image480}
          alt={image.imageDescription}
          fill={false}
        />
      </>
      <Link target="_blank" href={title.linkToWebSite} className={styles.container}>
        <div className={styles.technology}>
          <SVG src={technology.src} title={'technologyTitle'} />
        </div>

        <div className={styles.textContainer}>
          <p className={clsx(styles.title, SpaceGrotesk.className)}>{title.text}</p>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{description}</p>
            {arrow && <SVG src={arrow.src} title={'arrow'} className={styles.arrow} />}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
