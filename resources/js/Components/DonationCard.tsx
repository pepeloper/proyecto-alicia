import { Donation } from '@/types';
import { cn, formatRelativeTime } from '@/utils';
import { Link } from '@inertiajs/react';
import Carousel from 'react-multi-carousel';
import { Icon } from './Icons/Icon';

export const CustomDot = ({
  onClick,
  active,
}: {
  index?: number;
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <button
      onClick={(e) => {
        onClick?.();
        e.preventDefault();
      }}
      className={cn('h-2 rounded-full bg-white', {
        'w-8': active,
        'w-2': !active,
      })}
    />
  );
};

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

export default function DonationCard({ donation }: { donation: Donation }) {
  return (
    <div
      key={donation.id}
      className="relative h-56 overflow-hidden rounded shadow-lg"
    >
      <Link
        className="absolute inset-0 z-50"
        href={route('donations.show', donation.uuid)}
      />
      <div className="absolute inset-0">
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
              src={
                image.url.startsWith('http')
                  ? image.url
                  : `/storage/${image.url}`
              }
              alt={donation.name}
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
      </div>
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-alicia-light-orange px-4 py-1 text-sm text-alicia-dark-orange">
        <Icon icon="treasureMap" />
        {donation.area}
      </div>
      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-4 py-1 text-sm text-white">
        {formatRelativeTime(donation.created_at)}
      </div>
      <div className="absolute inset-0 bottom-4 flex flex-col justify-end p-4">
        <h2 className="text-2xl font-bold text-white">{donation.name}</h2>
      </div>
    </div>
  );
}
