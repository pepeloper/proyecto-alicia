import { Config } from 'ziggy-js';

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
  ziggy: Config & { location: string };
};

interface Category {
  id: number;
  name: string;
  slug: string;
  parent_id: number | null;
}

interface Image {
  id: number;
  url: string;
  created_at: string;
  updated_at: string;
  donation_id: number;
  order: number;
  is_primary: boolean;
}

interface Donation {
  id: number;
  uuid: string;
  category_id: number;
  name: string;
  description: string;
  width: number | null;
  height: number | null;
  depth: number | null;
  need_transport: boolean;
  street_address: string;
  city: string;
  postal_code: string;
  state: string | null;
  country: string;
  latitude: number | null;
  longitude: number | null;
  contact_channel: string;
  contact_value: string;
  created_at: string;
  updated_at: string;
  category?: Category;
  images: Image[];
}
