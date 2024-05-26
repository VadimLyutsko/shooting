import tg from '@public/images/application/mainPage/footer/TG.svg';
import vk from '@public/images/application/mainPage/footer/VK.svg';
import vc from '@public/images/application/mainPage/footer/VC.svg';
import logo from '@public/images/application/mainPage/footer/logo.svg';

export const footerPayloadData = {
  footerData: [
    {
      type: 'links',
      links: [
        { id: 0, address: 'javascript:void(0);', image: tg },
        { id: 1, address: 'javascript:void(0);', image: vk },
        { id: 2, address: 'javascript:void(0);', image: vc },
      ],
    },
    { type: 'mail', title: 'hello@hawkingbros.com', address: 'javascript:void(0);' },
    { type: 'noLink', title: '+7 920 941 -28-75', address: 'javascript:void(0);' },
    { type: 'link', title: 'Политика\nконфиденциальности', address: 'javascript:void(0);' },
    { type: 'noLink', title: '© 2014 - 2024\nHawking Bros', address: 'javascript:void(0);' },
  ],
  logo: logo,
  linkData: {
    title: 'Обсудить проект',
    address: 'javascript:void(0);',
  },
};
