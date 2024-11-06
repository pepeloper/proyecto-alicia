import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex items-center bg-alicia-blue py-3">
        <div className="container mx-auto px-6">
          <ApplicationLogo className="w-10" />
        </div>
      </header>

      <main className="container mx-auto px-6 py-4">{children}</main>

      <section className="fixed bottom-4 right-4 z-50">
        <Link
          href={route('donations.create')}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-alicia-orange text-white"
        >
          <span className="sr-only">Publicar donación</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.24001C12.1909 6.24001 12.3741 6.31586 12.5091 6.45089C12.6441 6.58591 12.72 6.76905 12.72 6.96001V11.28H17.04C17.2309 11.28 17.4141 11.3559 17.5491 11.4909C17.6841 11.6259 17.76 11.809 17.76 12C17.76 12.191 17.6841 12.3741 17.5491 12.5091C17.4141 12.6441 17.2309 12.72 17.04 12.72H12.72V17.04C12.72 17.231 12.6441 17.4141 12.5091 17.5491C12.3741 17.6841 12.1909 17.76 12 17.76C11.809 17.76 11.6259 17.6841 11.4909 17.5491C11.3558 17.4141 11.28 17.231 11.28 17.04V12.72H6.95999C6.76903 12.72 6.5859 12.6441 6.45087 12.5091C6.31585 12.3741 6.23999 12.191 6.23999 12C6.23999 11.809 6.31585 11.6259 6.45087 11.4909C6.5859 11.3559 6.76903 11.28 6.95999 11.28H11.28V6.96001C11.28 6.76905 11.3558 6.58591 11.4909 6.45089C11.6259 6.31586 11.809 6.24001 12 6.24001Z"
              fill="white"
            />
          </svg>
        </Link>
      </section>
    </>
  );
}
