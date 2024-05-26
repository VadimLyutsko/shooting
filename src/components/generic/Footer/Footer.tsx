'use client';
import React from 'react';
import { footerPayloadData } from './footerPayloadData';
import Link from 'next/link';
import { Container } from '../Container/Container';
import SVG from 'react-inlinesvg';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.scss';
import { useStore } from 'src/app/store/store';
import clsx from 'clsx';

// async
function getFooterPage() {
  // const res = await fetch(`https://api.example.com/artist/${username}`)
  // return res.json()
  return footerPayloadData;
}

export const Footer: React.FC = () => {
  const path = usePathname();
  const footerData = getFooterPage();
  const setModalTrue = useStore((state) => state.setModalTrue);

  const data = footerData.footerData.map((item, ind) => {
    return (
      <div key={ind} className={styles.item}>
        {item.type === 'links' &&
          item.links?.map((social) => {
            return (
              <Link key={social.id} href={social.address} className={styles.social}>
                <SVG src={social.image.src} title={'social'} />
              </Link>
            );
          })}
        {item.type === 'link' && (
          <Link href={item.address ? item.address : 'address'} className={styles.description}>
            <p>{item.title}</p>
          </Link>
        )}
        {item.type === 'noLink' && <p className={styles.noLinkDescription}>{item.title}</p>}
        {item.type === 'mail' && (
          <Link href={`mailto: ${item.title}`} className={styles.description}>
            <p className={styles.mail}>{item.title}</p>
          </Link>
        )}{' '}
        {item.type === 'num' && (
          <Link href={`tel: ${item.title}`} className={styles.description}>
            <p className={styles.number}>{item.title}</p>
          </Link>
        )}
      </div>
    );
  });

  return (
    <div className={styles.colorContainer}>
      <Container left>
        <div className={styles.footer}>{data}</div>

        <div className={styles.mobileFooter}>
          <div className={styles.footerHead}>
            <p onClick={setModalTrue} className={clsx(styles.mail, styles.title)}>
              {footerData.linkData.title}
            </p>

            <Link href={path === '/' ? '#' : '/'}>
              <SVG src={footerData.logo.src} title={'logo'} className={styles.logo} />
            </Link>
          </div>

          <div className={styles.mobSocials}>
            {footerData.footerData[0].links?.map((social) => {
              return (
                <Link key={social.id} href={social.address} className={styles.social}>
                  <SVG src={social.image.src} title={'social'} width={42} height={42} className={styles.image} />
                </Link>
              );
            })}
          </div>

          <p className={styles.mobMail}>
            <Link href={`mailto: ${footerData.footerData[1].address}`}>{footerData.footerData[1].title}</Link>
          </p>

          <p className={styles.mobPhone}>
            <Link href={`tel: ${footerData.footerData[2].address}`}>{footerData.footerData[2].title}</Link>
          </p>

          <p className={styles.mobMail}>
            <Link href={footerData.footerData[3].address ? footerData.footerData[3].address : 'address'}>
              {footerData.footerData[3].title}
            </Link>
          </p>

          <p className={styles.pravicy}>
            <Link
              href={footerData.footerData[4].address ? footerData.footerData[4].address : 'address'}
              className={styles.mobPhone}
            >
              {footerData.footerData[4].title}
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};
