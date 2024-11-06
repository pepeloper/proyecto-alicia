import Breadcrumb from '@/Components/Breadcrumb';
import { CustomDot } from '@/Components/DonationCard';
import GuestLayout from '@/Layouts/GuestLayout';
import { Donation } from '@/types';
import { Head } from '@inertiajs/react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Show({ donation }: { donation: Donation }) {
  return (
    <>
      <Head title="Detalle donación" />

      <GuestLayout showCreateButton={false}>
        <Breadcrumb
          items={[
            { label: 'Donaciones', href: route('donations.index') },
            {
              label: donation.category?.name ?? 'Sin categoría',
              href: route('donations.index', {
                section: donation.category?.slug,
              }),
            },
            {
              label: donation.name,
              href: route('donations.show', donation.uuid),
            },
          ]}
        />
        <section className="mt-6">
          <div className="relative w-full rounded">
            <Carousel
              arrows={false}
              responsive={responsive}
              showDots
              customDot={<CustomDot />}
              renderDotsOutside
            >
              {donation.images.map((image) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={donation.name}
                  className="h-72 w-full rounded object-cover"
                />
              ))}
            </Carousel>

            <div className="absolute inset-0 rounded bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-alicia-orange">
            {donation.name}
          </h1>
        </section>
      </GuestLayout>
    </>
  );
}
