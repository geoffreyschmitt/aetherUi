import { TDrawer as TCoreDrawer } from '@/aether-ui-core/components/overlays/Drawer';

export type TDrawer = Omit<TCoreDrawer, 'DialogComponent'>;
