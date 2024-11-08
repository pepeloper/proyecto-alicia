import Breadcrumb from '@/Components/Breadcrumb';
import { CustomDot } from '@/Components/DonationCard';
import { Icon } from '@/Components/Icons/Icon';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Donation } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
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
  console.log('🚀 ~ Show ~ donation:', donation);

  const [showModal, setShowModal] = useState(false);

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
            <div className="absolute left-0 right-0 top-0 z-10 flex h-10 items-center gap-2 p-2">
              <div className="flex items-center gap-1 rounded-full bg-alicia-orange px-2 py-0.5 text-white">
                <Icon icon="treasureMap" />
                {donation.area}
              </div>
              <div className="rounded-full bg-alicia-blue px-2 py-0.5 text-white">
                {donation.category?.name}
              </div>
            </div>
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
                  className="h-72 w-full rounded object-cover"
                />
              ))}
            </Carousel>
            <div className="absolute inset-0 rounded bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
          </div>
        </section>
        <section className="mt-6">
          <h1 className="text-2xl font-bold text-alicia-orange">
            {donation.name}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-alicia-blue">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.27586e-09 5.25C3.27586e-09 4.65326 0.237053 4.08097 0.65901 3.65901C1.08097 3.23705 1.65326 3 2.25 3H15.75C16.3467 3 16.919 3.23705 17.341 3.65901C17.7629 4.08097 18 4.65326 18 5.25V7.5H19.53C19.8671 7.5003 20.1998 7.57635 20.5036 7.72252C20.8074 7.86869 21.0744 8.08126 21.285 8.3445L23.5065 11.1195C23.8261 11.5188 24.0002 12.015 24 12.5265V15.75C24 16.3467 23.7629 16.919 23.341 17.341C22.919 17.7629 22.3467 18 21.75 18H21C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21C17.2043 21 16.4413 20.6839 15.8787 20.1213C15.3161 19.5587 15 18.7957 15 18H7.5C7.50086 18.3999 7.42177 18.7959 7.26738 19.1648C7.11299 19.5336 6.88642 19.8679 6.60097 20.148C6.31553 20.428 5.97698 20.6481 5.60523 20.7955C5.23348 20.9428 4.83603 21.0143 4.43624 21.0058C4.03645 20.9973 3.6424 20.909 3.27725 20.746C2.91209 20.583 2.5832 20.3486 2.30992 20.0567C2.03664 19.7648 1.82447 19.4212 1.6859 19.0461C1.54733 18.671 1.48514 18.272 1.503 17.8725C1.06357 17.7178 0.682984 17.4306 0.413766 17.0504C0.144548 16.6702 -2.51279e-05 16.2159 3.27586e-09 15.75L3.27586e-09 5.25ZM1.941 16.434C2.21249 15.9904 2.59465 15.6249 3.04999 15.3736C3.50533 15.1222 4.0182 14.9935 4.53827 15.0002C5.05835 15.0068 5.56776 15.1486 6.01651 15.4115C6.46527 15.6745 6.83795 16.0496 7.098 16.5H15.402C15.6653 16.044 16.044 15.6653 16.5 15.402V5.25C16.5 5.05109 16.421 4.86032 16.2803 4.71967C16.1397 4.57902 15.9489 4.5 15.75 4.5H2.25C2.05109 4.5 1.86032 4.57902 1.71967 4.71967C1.57902 4.86032 1.5 5.05109 1.5 5.25V15.75C1.49988 15.8944 1.54143 16.0357 1.61966 16.157C1.69788 16.2783 1.80946 16.3745 1.941 16.434ZM18 15C18.5266 15 19.0439 15.1386 19.5 15.4019C19.956 15.6652 20.3347 16.044 20.598 16.5H21.75C21.9489 16.5 22.1397 16.421 22.2803 16.2803C22.421 16.1397 22.5 15.9489 22.5 15.75V12.525C22.4997 12.3548 22.4415 12.1898 22.335 12.057L20.115 9.282C20.0449 9.19416 19.9559 9.12321 19.8546 9.0744C19.7533 9.02559 19.6424 9.00016 19.53 9H18V15ZM4.5 16.5C4.10218 16.5 3.72064 16.658 3.43934 16.9393C3.15804 17.2206 3 17.6022 3 18C3 18.3978 3.15804 18.7794 3.43934 19.0607C3.72064 19.342 4.10218 19.5 4.5 19.5C4.89782 19.5 5.27936 19.342 5.56066 19.0607C5.84196 18.7794 6 18.3978 6 18C6 17.6022 5.84196 17.2206 5.56066 16.9393C5.27936 16.658 4.89782 16.5 4.5 16.5ZM18 16.5C17.6022 16.5 17.2206 16.658 16.9393 16.9393C16.658 17.2206 16.5 17.6022 16.5 18C16.5 18.3978 16.658 18.7794 16.9393 19.0607C17.2206 19.342 17.6022 19.5 18 19.5C18.3978 19.5 18.7794 19.342 19.0607 19.0607C19.342 18.7794 19.5 18.3978 19.5 18C19.5 17.6022 19.342 17.2206 19.0607 16.9393C18.7794 16.658 18.3978 16.5 18 16.5Z"
                fill="#003046"
              />
            </svg>

            <p className="text-base">
              {donation.need_transport
                ? 'Transporte necesario'
                : 'Transporte disponible'}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4 text-alicia-blue">
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 9C17.25 11.4577 15.7972 14.1902 13.978 16.6173C12.1803 19.0157 10.1259 20.9846 9.12213 21.8937C9.08237 21.9297 9.03937 21.9434 9 21.9434C8.96062 21.9434 8.9176 21.9297 8.87782 21.8937C7.87401 20.9845 5.81965 19.0157 4.022 16.6173C2.20281 14.1902 0.75 11.4577 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5564 0.75 17.25 4.44365 17.25 9ZM9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79089 5 5 6.79086 5 9C5 11.2091 6.79089 13 9 13Z"
                stroke="#003046"
                strokeWidth="1.5"
              />
            </svg>

            <p className="text-base">{donation.area}</p>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-alicia-blue">
            Descripción
          </h2>
          <p className="mt-2 text-base">{donation.description}</p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-alicia-blue">Medidas</h2>
          <div className="mt-2 flex items-center gap-4">
            <p className="w-24 font-semibold">Anchura</p>
            <p>{donation.width} cm</p>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <p className="w-24 font-semibold">Profundidad</p>
            <p>{donation.depth} cm</p>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <p className="w-24 font-semibold">Altura</p>
            <p>{donation.height} cm</p>
          </div>
        </section>

        <section className="mt-6 flex w-full justify-center">
          <PrimaryButton
            className="w-auto"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Contactar
          </PrimaryButton>
        </section>
      </GuestLayout>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {donation.contact_whatsapp ? (
          <div className="flex flex-col items-center gap-2">
            <a
              target="_blank"
              href={`https://wa.me/${donation.contact_whatsapp}`}
              className="text-lg font-semibold"
              rel="noreferrer"
            >
              Whatsapp
            </a>
            <p>{donation.contact_whatsapp}</p>
          </div>
        ) : null}
        {donation.contact_email ? (
          <div className="mt-6 flex flex-col items-center gap-2">
            <a
              target="_blank"
              href={`mailto:${donation.contact_email}`}
              className="text-lg font-semibold"
              rel="noreferrer"
            >
              Correo electrónico
            </a>
            <p>{donation.contact_email}</p>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
