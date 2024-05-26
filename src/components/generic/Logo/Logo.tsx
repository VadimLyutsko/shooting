'use client';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './Logo.module.scss';
import { usePathname } from 'next/navigation';
import { LogoProps } from '@/app/common/types/componentsTypes';

export const Logo: React.FC<LogoProps> = ({ cursor, navLogo }) => {
  const path = usePathname();

  // styles
  const cursorStyle = clsx(styles.logoColor, {
    [styles.cursor]: !cursor,
    [styles.logoColorHover]: !cursor,
  });

  const navLogoClassName = clsx({
    [styles.logoContainer]: navLogo,
  });

  return (
    <div>
      {path === '/' ? (
        <Image src="/vercel.svg" alt="Vercel Logo" className={cursorStyle} width={100} height={24} priority />
      ) : (
        <Link href="/" className={navLogoClassName}>
          <Image src="/vercel.svg" alt="Vercel Logo" className={cursorStyle} width={100} height={24} priority />
        </Link>
      )}
    </div>
  );
};
