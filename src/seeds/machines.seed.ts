import { Machine } from '@store/machine.store';

export const MACHINES_SEED: Machine[] = [
  {
    id: 'M-101',
    name: 'Cutter 1',
    type: 'cutter',
    status: 'RUN'
  },
  {
    id: 'M-102',
    name: 'Roller A',
    type: 'roller',
    status: 'IDLE'
  },
  {
    id: 'M-103',
    name: 'Packing West',
    type: 'packer',
    status: 'OFF'
  }
];
