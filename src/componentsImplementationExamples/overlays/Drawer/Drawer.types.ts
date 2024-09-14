import { TDrawer as TCoreDrawer } from '@/components/overlays/Drawer';

export type TDrawer = Omit<TCoreDrawer, 'DialogComponent'>;
