'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { TabsPanelProps } from '../../../../../common/types/componentsTypes';
import TabsSwiper from '../../../../generic/Swipers/MySwiper/TabsSwiper';
import Tab from '../../../../generic/Tab/Tab';
import SVG from 'react-inlinesvg';

import { tabsPayloadData } from 'src/app/api/dataObjects/tabsPayloadData';
import stylesDesktop from './ResearchesTabsDesktop.module.scss';

const ResearchesTabs: React.FC<TabsPanelProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>('0');
  const tabsData = tabsPayloadData;

  const handleTabClick = (index: string) => {
    setActiveTab(() => index);
  };

  return (
    <div className={stylesDesktop.tabsContainer}>
      <div className={stylesDesktop.desktop}>
        <div className={stylesDesktop.tabs}>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.label}
              onClick={() => handleTabClick(tab.id)}
              isActive={tab.id === activeTab}
              className={'pin'}
            />
          ))}
        </div>

        {/* <hr className={stylesDesktop.hr} /> */}

        {tabsData.tabsData.map((item) =>
          item.id === activeTab ? (
            <div className={stylesDesktop.columnContainer} key={item.id}>
              <div className={stylesDesktop.leftColumn}>
                <p className={stylesDesktop.basicDescription}>{item.basicDescription}</p>
                <div className={stylesDesktop.partners}>
                  {item.panelData.map((i, ind) => {
                    return (
                      <div className={stylesDesktop.partner} key={ind}>
                        <p>{i}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={stylesDesktop.rightColumn}>
                <div>
                  <div className={stylesDesktop.additionalDescription}>
                    <p className={stylesDesktop.description}>{item.additionalDescription}</p>
                  </div>
                  {item.article !== 'Поддержка' ? (
                    <div className={stylesDesktop.priceContainer}>
                      <p className={stylesDesktop.price}>{item.priceContent.coast}</p>
                      <p className={stylesDesktop.priceComment}>{item.priceContent.text}</p>
                      <Link href={'javascript:void(0);'} className={stylesDesktop.moreDetailed}>
                        {item.moreDetailed}
                      </Link>
                    </div>
                  ) : (
                    <div className={stylesDesktop.priceContainerWithoutLink}>
                      <p className={stylesDesktop.price}>{item.priceContent.coast}</p>
                      <p className={stylesDesktop.priceComment}>{item.priceContent.text}</p>
                    </div>
                  )}
                </div>
                <div className={stylesDesktop.iconsBlock}>
                  <p className={stylesDesktop.iconsContainerTitle}> {tabsData.iconsComment}</p>
                  <div className={stylesDesktop.iconsContainer}>
                    {item.icons.map((icon, ind) => {
                      return (
                        <div className={stylesDesktop.image} key={ind}>
                          <Link href={icon.linkToWebSite}>
                            <SVG src={icon.image.src} title={'Nab-title'} />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          ),
        )}
      </div>

      <div className={stylesDesktop.mobile}>
        <TabsSwiper tabsData={tabsData} />
        <hr className={stylesDesktop.hr} />
      </div>
    </div>
  );
};

export default ResearchesTabs;
