import routes from './routes';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

export const navbarMainLinks = [
  {
    name: 'Inicio',
    href: routes.home
  },
  {
    name: 'Servicios',
    href: routes.services
  },
  {
    name: 'Contacto',
    href: routes.contactus
  }
];

export const navbarSideLinks = [
  {
    name: 'User',
    href: routes.user,
    icon: BsPerson
  },
  {
    name: 'Cart',
    href: routes.cart,
    icon: AiOutlineShoppingCart
  }
];
