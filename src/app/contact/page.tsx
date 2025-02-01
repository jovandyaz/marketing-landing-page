import { FloatingDock } from '@/components/ui';
import {
  SINERGIA_INSTAGRAM_URL,
  SINERGIA_TIKTOK_URL,
  SINERGIA_WHATSAPP_URL
} from '@/lib/constants';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';

export default function Contact() {
  const links = [
    {
      title: 'Instagram',
      icon: <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: `${SINERGIA_INSTAGRAM_URL}`
    },
    {
      title: 'Tiktok',
      icon: <FaTiktok className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: `${SINERGIA_TIKTOK_URL}`
    },
    {
      title: 'WhatsApp',
      icon: <RiWhatsappFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: `${SINERGIA_WHATSAPP_URL}`
    }
  ];

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <FloatingDock items={links} />
    </main>
  );
}
