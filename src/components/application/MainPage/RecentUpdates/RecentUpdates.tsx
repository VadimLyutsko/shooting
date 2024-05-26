import styles from './RecentUpdates.module.scss';
import React from 'react';
import { recentUpdatesPagePayloadData } from './recentUpdatesPagePayloadData';
import { Article } from '../../../generic/Article/Article';
import { Container } from '../../../generic/Container/Container';
import { AldrichFont, SpaceGrotesk } from 'src/app/fonts';
import Link from 'next/link';
import clsx from 'clsx';

// async
function getRecentUpdatesPage() {
  // const res = await fetch(`https://api.example.com/artist/${username}`)
  // return res.json()
  return recentUpdatesPagePayloadData;
}

export default function RecentUpdates() {
  const recentUpdates = getRecentUpdatesPage();

  const pageContent = recentUpdates.contentData.map((article) => {
    return (
      <>
        <Article
          key={article.id}
          id={article.id}
          title={article.headerContentData.title}
          data={article.headerContentData.data}
          description={article.description}
          linkData={article.linkData}
          image={article.image}
          views={article.headerContentData.views}
          viewsImage={article.headerContentData.viewsImage}
        />
      </>
    );
  });

  return (
    <Container left={true}>
      <div className={styles.recentUpdates}>
        <div className={styles.titleContainer}>
          <span className={clsx(styles.bracket, AldrichFont.className)}>(</span>
          <p className={`${styles.titleText} ${SpaceGrotesk.className}`}>{recentUpdates.pageTitle}</p>
          <span className={clsx(styles.bracket, AldrichFont.className)}>)</span>
        </div>

        <div className={styles.articlesContainer}>{pageContent}</div>
        <Link href={recentUpdates.toBlogLink} className={styles.toBlog}>
          <p>{recentUpdates.toBlogText}</p>
          {/* <p className={styles.arrow}>
            <Image className={styles.arrow} src={arrow} alt="arrow" fill={false} />
          </p> */}
        </Link>
      </div>
    </Container>
  );
}
