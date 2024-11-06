import Breadcrumb from '@/Components/Breadcrumb';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Category } from '@/types';
import { Select, Switch } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';

export default function Create({ categories }: { categories: Category[] }) {
  return (
    <>
      <Head title="Crear donación" />

      <GuestLayout showCreateButton={false}>
        <Breadcrumb
          items={[
            { label: 'Inicio', href: route('donations.index') },
            { label: 'Crear donación', href: route('donations.create') },
          ]}
        />

        <h1 className="mt-6 text-2xl font-bold text-alicia-orange">
          Donación de mobiliario
        </h1>

        <form className="mt-6 w-full">
          <div>
            <InputLabel htmlFor="name">Nombre</InputLabel>
            <TextInput id="name" name="name" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="description">Descripción</InputLabel>
            <textarea
              id="description"
              name="description"
              className="mt-0.5 h-24 w-full rounded-md border-gray-300 shadow-sm focus:border-alicia-blue focus:ring-alicia-blue"
            />
          </div>

          <div className="mt-4">
            <InputLabel>Categoría</InputLabel>
            <Select
              id="category"
              name="category"
              className="mt-0.5 w-full rounded-md border-gray-300"
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="width">Medidas del producto</InputLabel>
            <div className="mt-0.5 flex w-full items-center justify-between">
              <div className="flex flex-col gap-6">
                <TextInput
                  id="width"
                  name="width"
                  placeholder="(A) Ancho en cm  "
                />
                <TextInput
                  id="height"
                  name="height"
                  placeholder="(B) Fondo en cm"
                />
                <TextInput
                  id="depth"
                  name="depth"
                  placeholder="(C) Alto en cm"
                />
              </div>
              <img
                src="/images/medidas_del_producto_ayuda.png"
                alt="Explicación de las medidas"
              />
            </div>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="image">Imágenes</InputLabel>
            <input
              type="file"
              id="image"
              name="image"
              className="mt-0.5 w-full border-gray-300 shadow-sm focus:border-alicia-blue focus:ring-alicia-blue"
              max={3}
              multiple
            />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="transport">
              ¿Dispones de transporte?
            </InputLabel>
            <Switch
              checked={true}
              onChange={() => {}}
              className="group relative mt-0.5 flex h-7 w-14 cursor-pointer rounded-full bg-neutral-300 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[checked]:bg-alicia-orange data-[focus]:outline-1 data-[focus]:outline-white"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
              />
            </Switch>
          </div>

          <div className="mt-4">
            <InputLabel>Ubicación</InputLabel>
            <p className="-mt-1 mb-1 text-sm text-neutral-500">
              Especifica tu barrio, zona o ciudad
            </p>
            <TextInput
              id="location"
              name="location"
              placeholder="Ejemplo: Patraix, Valencia"
            />
          </div>
          <div className="mt-4">
            <p className="block text-lg font-bold text-alicia-blue">
              Quiero que me contacten por
            </p>
            <div className="mt-1">
              <InputLabel htmlFor="whatsapp">Whatsapp</InputLabel>
              <TextInput
                id="whatsapp"
                name="whatsapp"
                placeholder="Introduce tu número de teléfono"
              />
            </div>
            <div className="mt-1">
              <InputLabel htmlFor="email">Email</InputLabel>
              <TextInput
                id="email"
                name="email"
                placeholder="Introduce tu correo electrónico"
              />
            </div>
          </div>

          <div className="mt-4 text-pretty text-center">
            <p className="block text-xl font-bold text-alicia-blue">
              ¿Cómo borrar o modificar mi publicación?
            </p>
            <p className="text-base text-neutral-500">
              Al hacer la publicación, te mostraremos un enlace único que te
              permitirá hacerlo. <br /> Guárdalo, si lo pierdes puedes
              escribirnos a nuestro instagram
            </p>

            <div className="mt-4 flex flex-col items-center gap-4">
              <PrimaryButton type="submit" className="w-auto px-4">
                Publicar
              </PrimaryButton>
              <Link
                className="inline-flex w-auto items-center justify-center rounded-full border border-alicia-blue px-10 py-1.5 text-center text-alicia-blue"
                href={route('donations.index')}
              >
                Cancelar
              </Link>
            </div>
          </div>
        </form>
      </GuestLayout>
    </>
  );
}
