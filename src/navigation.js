import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Servicios',
      href: getPermalink('/services'),
    },
    {
      text: 'Acerca de',
      href: getPermalink('/about'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Github', href: 'https://github.com/GoodCod3/', target: '_blank' }],
};

export const footerData = {
  links: [
    {},
    {},
    {},
    {
      title: 'Nuestra empresa',
      links: [
        { text: 'Acerca de', href: getPermalink('/about') },
        { text: 'Servicios', href: getPermalink('/services') },
        { text: 'Contacto', href: getPermalink('/contact') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Política de cookies', href: getPermalink('/terms') },
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Linkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/goodcode-solution/',
    },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/GoodCod3/' },
  ],
  footNote: `
    Hecho con
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 bg-cover inline md:-mt-0.5 md:h-6 md:w-6 mr-1.5 rounded-sm rtl:float-right rtl:ml-1.5 rtl:mr-0 feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> por <a class="text-blue-600 underline dark:text-muted" href="https://goodcodesolution.com/"> GoodCode Solution</a> · All rights reserved.
  `,
};
