interface BlobAnimationProps {
  children?: React.ReactNode;
}

export const BlobAnimation = ({ children }: BlobAnimationProps) => {
  return (
    <div className="flex h-full w-full items-center md:h-screen">
      <div className="w-full max-w-lg">
        <div className="animate-blob absolute top-0 left-4 h-72 w-72 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute top-0 -right-2 h-72 w-72 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-4000 absolute bottom-8 left-20 h-72 w-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter" />
        {children}
      </div>
    </div>
  );
};
