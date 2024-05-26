'use client';
import React, { useEffect, useState } from 'react';
import { Container } from '../../../generic/Container/Container';
import ResearchesTabs from './ResearchesTabs/ResearchesTabs';
import styles from './Researches.module.scss';
import { researchesDataType } from 'src/common/types/fetchDataTypes';
// import { tabsPayloadData } from 'src/app/api/dataObjects/tabsPayloadData';

const getData = async () => {
  const res = await fetch('/api/researches');
  return res.json();
};

export default function Researches() {
  const [data, setData] = useState<researchesDataType>();

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    // <div className={styles.colorContainer}>
    <Container left={true}>
      <div className={styles.researches}>{data && <ResearchesTabs tabs={data.navigatePanel} />}</div>
    </Container>
    // </div>
  );
}
