import { Suspense, lazy } from 'react';

const icons = ['close', 'treasureMap', 'share'] as const;

export type IconType = (typeof icons)[number];

const IconComponents = icons.reduce(
  (acc, icon) => {
    acc[icon] = lazy(() =>
      import(
        /* webpackChunkName: "icon-[request]" */
        `./assets/${icon}.svg?react`
      ).then((m) => ({
        default: m.ReactComponent || m.default || m,
      })),
    );
    return acc;
  },
  {} as Record<
    IconType,
    React.LazyExoticComponent<
      React.ComponentType<React.SVGProps<SVGSVGElement>>
    >
  >,
);

export interface IconProps {
  icon: IconType;
  className?: string;
  onClick?: () => void;
}

export function Icon(props: IconProps) {
  const { icon, ...rest } = props;
  const Component = IconComponents[icon];
  if (!Component) {
    console.warn(
      `<Icon /> component is missing "${icon}" icon. Rendering null`,
    );
    return null;
  }
  return (
    <Suspense fallback={null}>
      <Component {...rest} />
    </Suspense>
  );
}
