'use client';
import React from 'react';
import styles from './DiscussProject.module.scss';
import { DiscussProjectPayloadData } from './DiscussProjectPayloadData';
import Image from 'next/image';
import postImage1920 from '@public/images/application/mainPage/discuss-block/discuss-page-1920.png';
import postImage1440 from '@public/images/application/mainPage/discuss-block/discuss-page-1440.jpg';
import { Container } from '../../../generic/Container/Container';
import Link from 'next/link';
import { SpaceGrotesk } from 'src/app/fonts';
import clsx from 'clsx';
import { useStore } from 'src/app/store/store';

function getDiscussProjectPage() {
  // const res = await fetch(`https://api.example.com/artist/${username}`)
  // return res.json()
  return DiscussProjectPayloadData;
}

export default function DiscussProject() {
  const projectDescriptionData = getDiscussProjectPage();
  const setModalTrue = useStore((state) => state.setModalTrue);

  return (
    <Container left={true}>
      <div className={styles.discuss}>
        <h3 className={clsx(SpaceGrotesk.className, styles.titleText)}>{projectDescriptionData.title}</h3>
        <p className={styles.linkToProject} onClick={setModalTrue}>
          <Link href={'javascript:void(0);'}>{projectDescriptionData.linkToProject}</Link>
        </p>
        <div className={styles.imageContainer}>
          <div className={styles.image1920}>
            <Image src={postImage1920} className="object-cover" alt={`alt`} fill={false} />
          </div>

          <div className={styles.image1440}>
            <Image src={postImage1440} className="object-cover" alt={`alt`} fill={false} />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            <span className={styles.textPin}>{`${projectDescriptionData.descriptionText.textPin} `}</span>
            <span>{projectDescriptionData.descriptionText.textBlack}</span>
          </p>
          <Link href={'javascript:void(0);'} className={styles.about}>
            {projectDescriptionData.about}
          </Link>
        </div>
      </div>
    </Container>
  );
}
