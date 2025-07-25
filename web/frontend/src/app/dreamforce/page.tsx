import DreamforceHeader from '@/src/components/dreamforce/dreamforce-header';
import TrendsError from '@/src/components/dreamforce/trends-error';
import GetTrendsMainPage from '@/src/components/trends/get-trends-main-page';
import TrendsTitle from '@/src/components/trends/trends-title';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Image from 'next/image';
import { Fragment } from 'react';

// Skip static generation - load this page dynamically
export const dynamic = 'force-dynamic';

export default function DreamforcePage() {
  return (
    <Fragment>
      <DreamforceHeader />
      <div className="flex min-h-screen w-full bg-gradient-to-t from-[#d2e3ff] via-white via-55% to-white px-4">
        <div className="mx-auto my-44 w-full max-w-screen-xl">
          <Image
            src={'/df-sf.png'}
            alt="Dreamforce Banner"
            width={1920}
            height={1080}
            className="mx-auto mb-10 h-[10rem] w-full rounded-3xl bg-cover object-cover md:h-[20rem] md:w-[80%]"
          />
          <TrendsTitle>
            <ErrorBoundary errorComponent={TrendsError}>
              <GetTrendsMainPage />
            </ErrorBoundary>
          </TrendsTitle>
        </div>
      </div>
    </Fragment>
  );
}
