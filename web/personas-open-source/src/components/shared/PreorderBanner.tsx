import { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

interface PreorderBannerProps {
  botName: string;
}

export function PreorderBanner({ botName }: PreorderBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Link href="https://www.omi.me/" target="_blank" rel="noopener noreferrer">
      <div className="relative cursor-pointer bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-center text-white">
        <p className="text-sm font-medium">
          Make {botName} AI uniquely customized to you. Pre-order your Omi now.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsVisible(false);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 transform text-white hover:text-gray-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </Link>
  );
}
