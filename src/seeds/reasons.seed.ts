export interface ReasonNode {
  code: string;
  label: string;
  children?: ReasonNode[];
}

export const REASONS_SEED: ReasonNode[] = [
  {
    code: 'NO_ORDER',
    label: 'No Order',
    children: [
      { code: 'PLANNED', label: 'Planned' },
      { code: 'UNPLANNED', label: 'Unplanned' }
    ]
  },
  {
    code: 'POWER',
    label: 'Power',
    children: [
      { code: 'GRID', label: 'Grid' },
      { code: 'INTERNAL', label: 'Internal' }
    ]
  },
  {
    code: 'CHANGEOVER',
    label: 'Changeover',
    children: [
      { code: 'TOOLING', label: 'Tooling' },
      { code: 'PRODUCT', label: 'Product' }
    ]
  }
];
