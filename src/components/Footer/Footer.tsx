import Link from 'next/link';
import { IconLogo } from '../ui';
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
    solutions: {
      title: 'Soluciones',
      items: [
        { label: 'Talleres', href: '#' },
        { label: 'Asesorias', href: '#' }
      ]
    },
    company: {
      title: 'Agencia',
      items: [
        { label: 'Acerca de nosotros', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Casos de éxito', href: '#', external: true }
      ]
    },
    resources: {
      title: 'Recursos',
      items: [
        { label: 'Contacto', href: '#' },
        { label: 'Política de Privacidad', href: '#' },
        { label: 'Terminos del Servicio', href: '#' }
      ]
    }
  };

  return (
    <div className="px-4 py-6 md:px-2">
      <footer id="footer" className="relative mx-auto flex max-w-6xl flex-wrap pt-4">
        <div className="mr-auto flex w-full justify-between md:w-fit md:flex-col">
          <Link
            href="/"
            className="flex items-center pl-2 font-medium text-gray-700 select-none sm:text-sm"
          >
            <IconLogo
              src="/logo.webp"
              alt="Solar Logo"
              width={40}
              height={40}
              className="mr-2 rounded-4xl"
            />

            <span className="sr-only">Solar Logo (go home)</span>
          </Link>

          <div>
            <div className="flex items-center">
              <Link
                href={SINERGIA_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <RiInstagramFill className="size-5" />
              </Link>
              <Link
                href={SINERGIA_TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <IoLogoTiktok className="size-5" />
              </Link>
              <Link
                href={SINERGIA_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <RiWhatsappFill className="size-5" />
              </Link>
            </div>
            <div className="ml-2 hidden text-sm text-gray-700 md:inline">
              &copy; {CURRENT_YEAR} Sinergia Studio.
            </div>
          </div>
        </div>

        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className="mt-10 min-w-44 pl-2 md:mt-0 md:pl-0">
            <h3 className="mb-4 font-medium text-gray-900 sm:text-sm">{section.title}</h3>
            <ul className="space-y-4">
              {section.items.map(item => (
                <li key={item.label} className="text-sm">
                  <Link
                    href={item.href}
                    className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </div>
  );
};
