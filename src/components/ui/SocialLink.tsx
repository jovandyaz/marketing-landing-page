import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from 'react-icons';

interface SocialLinkProps {
  href: string;
  label: string;
  icon: IconType;
  className?: string;
  iconSize?: string;
};

export const SocialLink = ({ href, label, icon: Icon, className, iconSize = "size-7" }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "rounded-full text-gray-700 transition-all duration-200",
      "hover:bg-fuchsia-100 hover:text-fuchsia-500",
      className
    )}
    aria-label={label}
  >
    <Icon className={iconSize} />
  </Link>
);
