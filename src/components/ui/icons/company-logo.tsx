import Image from 'next/image';

export const CompanyLogo = () => (
  <div className="size-12 relative overflow-hidden rounded-full">
    <Image src="/sinergia-logo.png" alt="Company Logo" layout="fill" objectFit="cover" />
  </div>
);
