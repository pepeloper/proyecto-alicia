import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Create() {
  return (
    <>
      <Head title="Crear donación" />

      <GuestLayout showCreateButton={false}>
        <h1>Crear donación</h1>
      </GuestLayout>
    </>
  );
}
