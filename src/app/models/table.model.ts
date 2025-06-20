export interface TableProperties {
  tableStyle: 'default' | 'striped' | 'bordered' | 'hover';
  hovered: boolean;
  search?: boolean;
}
export interface ActionConfig {
  name: string;
  tooltip: string;
  function: string;
  source: string;
  color: string;
}
export interface ColumnStyle {
  fontStyle?: 'muted' | 'bold' | 'italic' | 'normal';
  align?: 'start' | 'center' | 'end';
  width?: string;
}

export interface ColumnProperties {
  shape?: 'circle' | 'square' | 'rectangle' | 'oval' | 'flat' | 'default';
  background?: 'fill' | 'outline';
}

export interface ColumnItem {
  type: string;
  key?: string;
  class?: string;
  size?: string;
  shape?: string;
  style?: ColumnStyle;
  layout?: 'horizontal' | 'vertical';
  gap?: number;
  items?: ColumnItem[];
}

export interface ColumnMeta {
  layout: 'horizontal' | 'vertical';
  gap?: number;
  items: ColumnItem[];
}

export interface TableColumn {
  key: string;
  header: string;
  type: string;
  sort?: boolean;
  style?: ColumnStyle;
  shape?: string;
  meta?: ColumnMeta;
  properties?: ColumnProperties;
}


