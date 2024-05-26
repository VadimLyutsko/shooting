'use client';
import React from 'react';
import { Container } from '@components/generic/Container/Container';
import Link from 'next/link';
import { AldrichFont, SpaceGrotesk } from 'src/app/fonts';
import Project from './projectComponents/Project/Project';
import ProjectConcepts from './projectComponents/ProjectConcepts/ProjectConcepts';
import clsx from 'clsx';
import styles from './Portfolio.module.scss';
import { data } from '../../../../../data';
import { projectsPayloadData } from 'src/app/api/dataObjects/projectsPayloadData';
import { projectsPayloadProps } from 'src/common/types/componentsTypes';
import { usePathname } from 'next/navigation';

export default async function Portfolio() {
  const projectsData: projectsPayloadProps = projectsPayloadData;
  const res = data.portfolioData;
  const pathname = usePathname();
  return (
    <Container left={true}>
      <div className={styles.portfolio}>
        {pathname === '/' && (
          <div className={styles.titleContainer}>
            <div className={styles.textWidthBrackets}>
              <div className={clsx(styles.bracket, AldrichFont.className)}>(</div>
              <h2 className={clsx(styles.titleText, SpaceGrotesk.className)}>{res.portfolioTitle}</h2>
              <div className={clsx(styles.bracket, AldrichFont.className)}>)</div>
            </div>
            <Link href={'javascript:void(0);'} className={styles.linkContainer}>
              <p>{res.linkToAllProjects}</p>
              {/* <Image className={styles.arrow} src={arrow} alt="arrow" fill={false} /> */}
            </Link>
          </div>
        )}

        <section className={styles.projectsContainer}>
          <section className={styles.desktop}>
            <div className={styles.leftColum}>
              <Project
                id={projectsData.khabensky.id}
                image={projectsData.khabensky.image}
                technology={projectsData.khabensky.technology}
                title={projectsData.khabensky.title}
                description={projectsData.khabensky.description}
                arrow={projectsData.khabensky.arrow}
              />
              <div className={styles.largeBlock}>
                <ProjectConcepts
                  id={projectsData.concepts.id}
                  technologies={projectsData.concepts.technologies}
                  title={projectsData.concepts.title}
                />
              </div>
              <div className={styles.largeBlock}>
                <Project
                  id={projectsData.sovest.id}
                  image={projectsData.sovest.image}
                  technology={projectsData.sovest.technology}
                  title={projectsData.sovest.title}
                  description={projectsData.sovest.description}
                  arrow={projectsData.sovest.arrow}
                />
              </div>
            </div>

            <div className={styles.rightColum}>
              <div className={styles.upperBlock}>
                {/* <MiddleBlock /> */}
                <div className={styles.projectContainer}>
                  <Project
                    id={projectsData.djet.id}
                    image={projectsData.djet.image}
                    technology={projectsData.djet.technology}
                    title={projectsData.djet.title}
                    description={projectsData.djet.description}
                    arrow={projectsData.djet.arrow}
                  />
                </div>
                <div className={styles.projectContainer}>
                  <Project
                    id={projectsData.leasing.id}
                    image={projectsData.leasing.image}
                    title={projectsData.leasing.title}
                    technology={projectsData.leasing.technology}
                    arrow={projectsData.leasing.arrow}
                    description={projectsData.leasing.description}
                  />
                </div>
              </div>

              <div className={styles.middleBlock}>
                <div className={styles.bigBlock}>
                  <Project
                    id={projectsData.onlineRu.id}
                    image={projectsData.onlineRu.image}
                    technology={projectsData.onlineRu.technology}
                    title={projectsData.onlineRu.title}
                    description={projectsData.onlineRu.description}
                    arrow={projectsData.onlineRu.arrow}
                  />
                </div>

                <div className={styles.middleRight}>
                  <Project
                    id={projectsData.tbm.id}
                    image={projectsData.tbm.image}
                    title={projectsData.tbm.title}
                    description={projectsData.tbm.description}
                    arrow={projectsData.tbm.arrow}
                    technology={projectsData.tbm.technology}
                  />
                </div>
              </div>

              <div className={styles.lowerBlock}>
                <div className={styles.item}>
                  <Project
                    id={projectsData.dobuy.id}
                    image={projectsData.dobuy.image}
                    title={projectsData.dobuy.title}
                    technology={projectsData.dobuy.technology}
                    description={projectsData.dobuy.description}
                    arrow={projectsData.dobuy.arrow}
                  />
                </div>

                <div className={styles.item}>
                  <ProjectConcepts
                    id={projectsData.kaspersky.id}
                    title={projectsData.kaspersky.title}
                    technologies={projectsData.kaspersky.technologies}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.table}>
            <div className={styles.leftColumtable}>
              <div className={styles.lefttableFirst}>
                <Project
                  id={projectsData.khabensky.id}
                  image={projectsData.khabensky.image}
                  technology={projectsData.khabensky.technology}
                  title={projectsData.khabensky.title}
                  description={projectsData.khabensky.description}
                  arrow={projectsData.khabensky.arrow}
                />
              </div>
              <div className={styles.lefttableSecond}>
                <ProjectConcepts
                  id={projectsData.concepts.id}
                  technologies={projectsData.concepts.technologies}
                  title={projectsData.concepts.title}
                />
              </div>
              <div className={styles.lefttableThird}>
                <Project
                  id={projectsData.sovest.id}
                  image={projectsData.sovest.image}
                  technology={projectsData.sovest.technology}
                  title={projectsData.sovest.title}
                  description={projectsData.sovest.description}
                  arrow={projectsData.sovest.arrow}
                />
              </div>

              <div className={styles.lefttableFourth}>
                <Project
                  id={projectsData.leasing.id}
                  image={projectsData.leasing.image}
                  title={projectsData.leasing.title}
                  description={projectsData.leasing.description}
                  arrow={projectsData.leasing.arrow}
                  technology={projectsData.leasing.technology}
                />
              </div>
            </div>

            <div className={styles.rightColumtable}>
              <div className={styles.righttableFirst}>
                <Project
                  id={projectsData.djet.id}
                  image={projectsData.djet.image}
                  technology={projectsData.djet.technology}
                  title={projectsData.djet.title}
                  description={projectsData.djet.description}
                  arrow={projectsData.djet.arrow}
                />
              </div>
              <div className={styles.righttableSecond}>
                <Project
                  id={projectsData.tbm.id}
                  image={projectsData.tbm.image}
                  technology={projectsData.tbm.technology}
                  title={projectsData.tbm.title}
                  description={projectsData.tbm.description}
                  arrow={projectsData.tbm.arrow}
                />
              </div>
              <div className={styles.righttableThird}>
                <Project
                  id={projectsData.onlineRu.id}
                  image={projectsData.onlineRu.image}
                  title={projectsData.onlineRu.title}
                  technology={projectsData.onlineRu.technology}
                  arrow={projectsData.onlineRu.arrow}
                  description={projectsData.onlineRu.description}
                />
              </div>{' '}
              <div className={styles.lowerBlock}>
                <div className={styles.item}>
                  <Project
                    id={projectsData.dobuy.id}
                    image={projectsData.dobuy.image}
                    title={projectsData.dobuy.title}
                    technology={projectsData.dobuy.technology}
                    description={projectsData.dobuy.description}
                    arrow={projectsData.dobuy.arrow}
                  />
                </div>

                <div className={styles.item}>
                  <ProjectConcepts
                    id={projectsData.kaspersky.id}
                    title={projectsData.kaspersky.title}
                    technologies={projectsData.kaspersky.technologies}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.mobile}>
            <div>
              <Project
                id={projectsData.khabensky.id}
                image={projectsData.khabensky.image}
                technology={projectsData.khabensky.technology}
                title={projectsData.khabensky.title}
                description={projectsData.khabensky.description}
                arrow={projectsData.khabensky.arrow}
              />
            </div>
            <div className={styles.upperBlock}>
              {/* <MiddleBlock /> */}
              <div className={styles.projectContainer}>
                <Project
                  id={projectsData.djet.id}
                  image={projectsData.djet.image}
                  technology={projectsData.djet.technology}
                  title={projectsData.djet.title}
                  description={projectsData.djet.description}
                  arrow={projectsData.djet.arrow}
                />
              </div>
              <div className={styles.projectContainer}>
                <Project
                  id={projectsData.leasing.id}
                  image={projectsData.leasing.image}
                  title={projectsData.leasing.title}
                  technology={projectsData.leasing.technology}
                  arrow={projectsData.leasing.arrow}
                  description={projectsData.leasing.description}
                />
              </div>
            </div>
            <ProjectConcepts
              id={projectsData.concepts.id}
              technologies={projectsData.concepts.technologies}
              title={projectsData.concepts.title}
            />
            <div className={styles.diubleMobileBlock}>
              <div className={styles.item}>
                {' '}
                <Project
                  id={projectsData.onlineRu.id}
                  image={projectsData.onlineRu.image}
                  technology={projectsData.onlineRu.technology}
                  title={projectsData.onlineRu.title}
                  description={projectsData.onlineRu.description}
                  arrow={projectsData.onlineRu.arrow}
                />
              </div>{' '}
              <div className={styles.item}>
                <Project
                  id={projectsData.tbm.id}
                  image={projectsData.tbm.image}
                  title={projectsData.tbm.title}
                  description={projectsData.tbm.description}
                  arrow={projectsData.tbm.arrow}
                  technology={projectsData.tbm.technology}
                />
              </div>
            </div>
            <div>
              <Project
                id={projectsData.sovest.id}
                image={projectsData.sovest.image}
                technology={projectsData.sovest.technology}
                title={projectsData.sovest.title}
                description={projectsData.sovest.description}
                arrow={projectsData.sovest.arrow}
              />
            </div>
            <div className={styles.diubleMobileBlock}>
              <div className={styles.item}>
                <Project
                  id={projectsData.dobuy.id}
                  image={projectsData.dobuy.image}
                  title={projectsData.dobuy.title}
                  technology={projectsData.dobuy.technology}
                  description={projectsData.dobuy.description}
                  arrow={projectsData.dobuy.arrow}
                />
              </div>

              <div className={styles.item}>
                <ProjectConcepts
                  id={projectsData.kaspersky.id}
                  title={projectsData.kaspersky.title}
                  technologies={projectsData.kaspersky.technologies}
                />
              </div>
            </div>
            <div></div>
          </section>
        </section>
      </div>
    </Container>
  );
}
