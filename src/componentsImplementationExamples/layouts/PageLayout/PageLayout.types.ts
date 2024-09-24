import { TPageLayout as TCorePageLayout } from '@/components/layouts/PageLayout';

export type TPageLayout = Omit<
  TCorePageLayout,
  'headerContentSlot' | 'footerContentSlot'
>;
