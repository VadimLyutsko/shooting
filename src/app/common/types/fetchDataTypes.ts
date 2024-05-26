import { StaticImageData } from 'next/image';

// ResearchesTabsData

export type researchesDataType = {
  navigatePanel: navigatePanelType[];
  tabsData: tabType[];
};

type navigatePanelType = {
  label: string;
  id: string;
};

type tabType = {
  id: string;
  article: string;
  basicDescription: string;
  additionalDescription: string;
  priceContent: priceContentItemType;
  icons: IconsContent1Type[];
  panelData: string[];
  moreDetailed?: string;
};

type IconsContent1Type = { image: StaticImageData; linkToWebSite: string };

type priceContentItemType = {
  coast: string;
  text: string;
};

// AnoutUs

export type aboutUsDataType = {
  mainText: string;
  // content: string | TrustedHTML;
  title: string;
  items: AchievementType[];
};

export type AchievementType = {
  id: string;
  year: string;
  place: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
};

//  portfolio

export type portfolioDataType = {
  portfolioTitle: string;
  linkToAllProjects: string;
};
