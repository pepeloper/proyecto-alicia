import DonationCard from '@/Components/DonationCard';
import GuestLayout from '@/Layouts/GuestLayout';
import { Category, Donation, PageProps } from '@/types';
import { cn } from '@/utils';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import 'react-multi-carousel/lib/styles.css';

export default function Index({
  categories,
  donations,
  section,
}: PageProps<{
  categories: Category[];
  donations: Donation[];
  section: string | null;
}>) {
  const categoryScrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (categoryScrollRef.current && section) {
      const activeCategory = categoryScrollRef.current.querySelector(
        `[href*="${section}"]`,
      );
      if (activeCategory) {
        activeCategory.scrollIntoView({
          behavior: 'instant',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [section]);

  return (
    <>
      <Head title="Proyecto Alicia" />

      <GuestLayout>
        <section
          ref={categoryScrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto py-2"
          // eslint-disable-next-line react/no-unknown-property
          scroll-region
        >
          <Link
            preserveScroll
            href={route('donations.index')}
            className={cn(
              'snap-start text-nowrap rounded-full px-3 py-1 text-xs uppercase text-alicia-blue',
              section === null ? 'bg-alicia-light-blue' : '',
            )}
          >
            Todo
          </Link>
          {categories.map((category) => (
            <Link
              preserveScroll
              key={category.id}
              href={route('donations.index', {
                section: category.slug,
              })}
              className={cn(
                'snap-start text-nowrap rounded-full px-3 py-1 text-xs uppercase text-alicia-blue',
                section === category.slug ? 'bg-alicia-light-blue' : '',
              )}
            >
              {category.name}
            </Link>
          ))}
        </section>

        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {donations.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </section>
      </GuestLayout>
    </>
  );
}
