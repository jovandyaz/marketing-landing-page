import Image from 'next/image';

export const CompanyLogo = () => (
  <div className="size-10 sm:size-12 relative overflow-hidden rounded-full">
    <Image
      src="/logo.webp"
      alt="Company Logo"
      fill
      style={{ objectFit: 'cover' }}
      priority
      sizes="100%"
    />
  </div>
);
