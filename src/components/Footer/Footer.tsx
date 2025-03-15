import Link from 'next/link';
import { IconLogo, SocialLink } from '../ui';
import {
  CURRENT_YEAR,
  SINERGIA_INSTAGRAM_URL,
  SINERGIA_TIKTOK_URL,
  SINERGIA_WHATSAPP_URL
} from '@/lib/constants';
import { IoLogoTiktok } from 'react-icons/io5';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

export const Footer = () => {
  const sections = {
    resources: {
      title: 'Recursos',
      items: [
        { label: 'Contacto', href: '/contact' },
        { label: 'Política de Privacidad', href: '#' },
        { label: 'Terminos del Servicio', href: '#' }
      ]
    }
  };

  const socialLinks = [
    {
      href: SINERGIA_INSTAGRAM_URL,
      icon: RiInstagramFill,
      label: 'Instagram'
    },
    {
      href: SINERGIA_TIKTOK_URL,
      icon: IoLogoTiktok,
      label: 'TikTok'
    },
    {
      href: SINERGIA_WHATSAPP_URL,
      icon: RiWhatsappFill,
      label: 'WhatsApp'
    }
  ];

  return (
    <div className="bg-white px-4 py-8 md:px-6 md:py-12">
      <footer id="footer" className="mx-auto max-w-7xl">
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8">
          <div className="flex justify-between items-start md:flex-col md:space-y-4">
            <Link
              href="/"
              className="flex items-center font-medium text-gray-700 select-none"
            >
              <IconLogo
                src="/logo.webp"
                alt="Sinergia Logo"
                width={50}
                height={50}
                className="mr-2 rounded-full"
              />
              <span className="sr-only">Sinergia Logo (go home)</span>
            </Link>

            <div className="hidden md:block">
              <div className="text-sm text-gray-500 pl-2">
                &copy; {CURRENT_YEAR} Sinergia Studio.
              </div>
            </div>

            <div className="flex items-center space-x-2 md:hidden">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  className="p-2"
                />
              ))}
            </div>
          </div>

          <div className={"hidden md:flex md:flex-col md:items-center"}>
            <h3 className="mb-6 font-medium text-gray-900 relative">
              <span className="after:content-[''] after:absolute after:h-1 after:bg-yellow-400 after:left-0 after:right-0 after:-bottom-2">
                Síguenos
              </span>
            </h3>

            <div className="flex items-center space-x-6 mt-4">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  className="p-3 hover:scale-110"
                  iconSize="size-8"
                />
              ))}
            </div>
          </div>

          <div className={"mt-10 justify-start md:mt-0 flex md:justify-end"}>
            {Object.entries(sections).map(([key, section]) => (
              <div
                key={key}
                className="min-w-44 pl-2 mb-10 md:mb-0"
              >
                <h3 className="mb-4 font-medium text-gray-900 border-l-4 border-fuchsia-400 pl-2">
                  {section.title}
                </h3>
                <ul className="space-y-4 md:space-y-3">
                  {section.items.map(item => (
                    <li key={item.label} className="text-sm">
                      <Link
                        href={item.href}
                        className="text-gray-600 transition-colors duration-200 hover:text-fuchsia-500"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-sm text-gray-500 text-center border-t border-gray-100 pt-4 md:hidden">
          &copy; {CURRENT_YEAR} Sinergia Studio.
        </div>
      </footer>
    </div>
  );
};
