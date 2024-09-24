import { TPageLayout as TCorePageLayout } from '@/aether-ui-core/components/layouts/PageLayout';

export type TPageLayout = Omit<
  TCorePageLayout,
  'headerContentSlot' | 'footerContentSlot'
>;
