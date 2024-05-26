import React from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';
import { ContainerPropsType } from '@/app/common/types/componentsTypes';

export const Container: React.FC<ContainerPropsType> = ({ children }) => {
  const classes = clsx(styles.content);
  return (
    <div className={classes}>
      {children}
    </div>
  );
};
