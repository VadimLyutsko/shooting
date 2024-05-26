import viewsImage from '@public/images/application/mainPage/updates-block/Eye.svg';

export const recentUpdatesPagePayloadData = {
  pageTitle: 'Последние обновления',
  contentData: [
    {
      id: '1',
      headerContentData: {
        title: 'Развлечения ',
        data: '29 сен',
        views: '4K',
        viewsImage: viewsImage,
      },
      description: 'Мы все разные: Словарь разработчика в переводе на язык обычного человека',
      linkData: {
        text: 'Читать на vc.ru',
        link: 'javascript:void(0);',
      },
      image: 'someImageAdress',
    },
    {
      id: '2',
      headerContentData: {
        title: 'Развлечения ',
        data: '29 сен',
        views: '4K',
        viewsImage: viewsImage,
      },
      description: 'Мы все разные: Словарь разработчика в переводе на язык обычного человека',
      linkData: {
        text: 'Читать на vc.ru',
        link: 'javascript:void(0);',
      },
      // image: null,
    },
    {
      id: '3',
      headerContentData: {
        title: 'Кейсы ',
        data: '29 сен',
        views: '4K',
        viewsImage: viewsImage,
      },
      description: 'Dobuy:\nИнтернет - магазин',
      // description: 'Мы все разные: Словарь разработчика в переводе на язык обычного человека',
      linkData: {
        text: 'Смотреть в портфолио',
        link: 'javascript:void(0);',
      },
      image: 'someImageAdress',
    },
    {
      id: '4',
      headerContentData: {
        title: 'Развлечения ',
        data: '29 сен',
        views: '4K',
        viewsImage: viewsImage,
      },
      description: 'Мы все разные: Словарь разработчика в переводе на язык обычного человека',
      linkData: {
        text: 'Читать на vc.ru',
        link: 'javascript:void(0);',
      },
      image: null,
    },
  ],

  toBlogText: 'Больше в нашем блоге',
  toBlogLink: 'javascript:void(0);',
};
