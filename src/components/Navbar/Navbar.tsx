import { FloatingNav } from '../ui';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 w-full">
      <FloatingNav
        navItems={[
          {
            name: 'Servicios',
            link: '/services'
          },
          {
            name: 'Contacto',
            link: '/contact'
          }
        ]}
      />
    </nav>
  );
};
