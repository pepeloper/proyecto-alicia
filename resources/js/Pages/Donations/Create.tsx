import Breadcrumb from '@/Components/Breadcrumb';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Category } from '@/types';
import { Select, Switch } from '@headlessui/react';
import { Head, Link, useForm } from '@inertiajs/react';

type ContactChannel = 'whatsapp' | 'email';

export default function Create({ categories }: { categories: Category[] }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    description: '',
    category_id: null as Category['id'] | null,
    width: null,
    height: null,
    depth: null,
    images: [] as File[],
    need_transport: false,
    street_address: '',
    contact_channel: 'whatsapp' as ContactChannel,
    contact_value: '',
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const key = e.target.id as keyof typeof data;
    const value = e.target.value;
    setData(key, value);
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post('/donacion', {
      preserveScroll: true,
      onSuccess: (e) => {
        console.log('🚀 ~ TODO handle success', e);
        reset();
      },
    });
  }

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

        <form className="mt-6 w-full" onSubmit={submit}>
          <div>
            <InputLabel htmlFor="name">Nombre</InputLabel>
            <TextInput id="name" name="name" onChange={handleChange} />
            {errors.name && <div className="to-red-700">{errors.name}</div>}
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="description">Descripción</InputLabel>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              className="mt-0.5 h-24 w-full rounded-md border-gray-300 shadow-sm focus:border-alicia-blue focus:ring-alicia-blue"
            />
            {errors.description && (
              <div className="to-red-700">{errors.description}</div>
            )}
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="category_id">Categoría</InputLabel>
            <Select
              id="category_id"
              name="category_id"
              className="mt-0.5 w-full rounded-md border-gray-300"
              onChange={(e) => setData('category_id', parseInt(e.target.value))}
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
            {errors.category_id && (
              <div className="to-red-700">{errors.category_id}</div>
            )}
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="width">Medidas del producto</InputLabel>
            <div className="mt-0.5 flex w-full items-center justify-between">
              <div className="flex flex-col gap-6">
                <TextInput
                  id="width"
                  name="width"
                  placeholder="(A) Ancho en cm  "
                  onChange={handleChange}
                />
                {errors.width && (
                  <div className="to-red-700">{errors.width}</div>
                )}
                <TextInput
                  id="height"
                  name="height"
                  placeholder="(B) Alto en cm"
                  onChange={handleChange}
                />
                {errors.height && (
                  <div className="to-red-700">{errors.height}</div>
                )}
                <TextInput
                  id="depth"
                  name="depth"
                  placeholder="(C) Fondo en cm"
                  onChange={handleChange}
                />
                {errors.depth && (
                  <div className="to-red-700">{errors.depth}</div>
                )}
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
              onChange={(e) => {
                const files = e.target.files;
                if (files) {
                  setData('images', Array.from(files));
                }
              }}
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
              checked={data.need_transport}
              onChange={(checked) => setData('need_transport', checked)}
              className="group relative mt-0.5 flex h-7 w-14 cursor-pointer rounded-full bg-neutral-300 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[checked]:bg-alicia-orange data-[focus]:outline-1 data-[focus]:outline-white"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
              />
            </Switch>
            {errors.need_transport && (
              <div className="to-red-700">{errors.need_transport}</div>
            )}
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="street_address">Ubicación</InputLabel>
            <p className="-mt-1 mb-1 text-sm text-neutral-500">
              Especifica tu barrio, zona o ciudad
            </p>
            <TextInput
              id="street_address"
              name="street_address"
              placeholder="Ejemplo: Patraix, Valencia"
              onChange={handleChange}
            />
            {errors.street_address && (
              <div className="to-red-700">{errors.street_address}</div>
            )}
          </div>
          <div className="mt-4">
            <p className="block text-lg font-bold text-alicia-blue">
              Quiero que me contacten por
            </p>
            <div className="mt-1">
              <InputLabel htmlFor="contact_value">Whatsapp</InputLabel>
              <TextInput
                id="contact_value"
                name="contact_value"
                placeholder="Introduce tu número de teléfono"
                onChange={handleChange}
              />
            </div>
            {/* <div className="mt-1">
              <InputLabel htmlFor="email">Email</InputLabel>
              <TextInput
                id="email"
                name="email"
                placeholder="Introduce tu correo electrónico"
                onChange={handleChange}
              />
            </div> */}
            {errors.contact_channel && (
              <div className="to-red-700">{errors.contact_channel}</div>
            )}
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
              <PrimaryButton
                type="submit"
                className="w-auto px-4"
                disabled={processing}
              >
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
