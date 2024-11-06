import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Show() {
  return (
    <>
      <Head title="Detalle donación" />

      <GuestLayout showCreateButton={false}>
        <h1>Detalle donación</h1>
      </GuestLayout>
    </>
  );
}
