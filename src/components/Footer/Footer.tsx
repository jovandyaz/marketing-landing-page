import { FloatingDock } from '../ui';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

export const Footer = () => {
  const links = [
    {
      title: 'Instagram',
      icon: <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#'
    },
    {
      title: 'Tiktok',
      icon: <FaTiktok className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#'
    }
  ];

  return (
    <div className="justify-left m-4 flex w-full items-center">
      <FloatingDock items={links} />
    </div>
  );
};
