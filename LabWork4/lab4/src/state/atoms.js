import { atom } from 'recoil';

import p1 from '../img/post1.png';
import p2 from '../img/post2.png';
import p3 from '../img/post3.png';

export const postItemsState = atom({
  key: 'postItemsState',
  default: [
    {
      id: 1,
      title: 'new collaborations',
      text: `This year we managed to cooperate with many famous companies such as: Nike, Dior, Supreme, etc. 
      In this post, we present to your attention the
      brightest models of them.`,
      img: p1,
    },
    {
      id: 2,
      title: 'new store',
      text: `The beginning of the month began with the opening of a new boutique in the center of Paris. New design, photo locations and much more. Hurry up to visit while promotions for our products are valid.`,
      img: p2,
    },
    {
      id: 3,
      title: 'DVTV: Appointment With Donatella',
      text: `Versace presents DVTV, the new series proposed on the brand\'s social media, in the name of Donatella Versace\'s meetings with old friends and new acquaintances to create looks with an unmistakably personal touch`,
      img: p3,
    },
  ],
});

export const menuItemsState = atom({
  key: 'menu',
  default: [
    { value: 'autumn-winter 21-22', href: '/ss21-22' },
    { value: "men's fashion", href: "/m's-f" },
    { value: "woman's fashion", href: "/w's-f" },
    { value: 'news & fashion shows', href: '/news' },
  ],
});
