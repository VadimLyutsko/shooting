import React from 'react';
import { SpaceGrotesk } from 'src/app/fonts';
import Link from 'next/link';
import SVG from 'react-inlinesvg';
import { ProjectConceptsPropsType } from 'src/common/types/componentsTypes';
import DoublePicture from '@components/generic/DoublePicture/DoublePicture';
import 'react-loading-skeleton/dist/skeleton.css';
import clsx from 'clsx';
import styles from './ProjectConcepts.module.scss';

const ProjectConcepts: React.FC<ProjectConceptsPropsType> = ({ technologies, title }) => {
  // clsx styles

  const longTechnologyClasses = clsx({
    [styles.project]: technologies.length > 3,
    [styles.projectWithoutPadding]: technologies.length < 3,
  });

  const textClassesContainer = clsx({
    [styles.title]: true,
    [SpaceGrotesk.className]: true,
  });

  const techn = technologies.map((t, i) => {
    return (
      <div className={styles.technology} key={i}>
        <Link href={t.linkToTechnology} className={styles.technology} key={i}>
          {t.doublePicture ? (
            <DoublePicture firstImage={t.doublePicture.firstImage} secondImage={t.doublePicture.secondImage} />
          ) : (
            <div className={styles.imageContainer1920}>
              <SVG src={t.technology?.src ? t.technology.src : ''} title={t.linkToTechnology} />
            </div>
          )}
        </Link>
      </div>
    );
  });

  return (
    <div className={longTechnologyClasses}>
      <div className={styles.technologiesContainer}>
        <div className={styles.technologies2}>{techn.slice(0, 2)}</div>

        {technologies.length < 3 ? <></> : <div className={styles.technologies4}>{techn.slice(2, 4)}</div>}
      </div>
      <div className={styles.textContainer}>
        <h5 className={textClassesContainer}>{title.text}</h5>
      </div>
    </div>
  );
};

export default ProjectConcepts;
