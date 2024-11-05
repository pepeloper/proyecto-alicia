import { clsx, type ClassValue } from 'clsx';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { twMerge } from 'tailwind-merge';

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));

export const formatRelativeTime = (dateString: string) => {
  const date = parseISO(dateString);
  return formatDistanceToNowStrict(date, { addSuffix: true, locale: es });
};
