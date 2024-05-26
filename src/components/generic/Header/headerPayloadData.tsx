import consultationImage from '@public/images/application/mainPage/nav-block/mobile-button.svg';
import tg from '@public/images/application/mainPage/header/TG.svg';
import vk from '@public/images/application/mainPage/header/VK.svg';
import vc from '@public/images/application/mainPage/header/VC.svg';

export const headerPayloadData = {
  social: [
    { id: '0', image: tg },
    { id: '1', image: vk },
    { id: '2', image: vc },
  ],
  mail: 'hello@hawkingbros.com',
  phone: '+7 920 941-28-75',
  logoImage: ['item-H', 'item-B'],
  menuDataGeneral: [
    { text: 'О компании', tabIndex: '0', link: 'about' },
    { text: 'Портфолио', tabIndex: '1', link: 'javascript:void(0);' },
    { text: 'Услуги', tabIndex: '2', link: 'services' },
    { text: 'Вакансии', tabIndex: '3', link: 'vacancies' },
    { text: 'Блог', tabIndex: '4', link: 'javascript:void(0);' },
    { text: 'Контакты', tabIndex: '5', link: 'javascript:void(0);' },
  ],
  getConsultation: 'Получить консультацию',
  consultationImage: consultationImage,
};
