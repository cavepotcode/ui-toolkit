export interface IFooter {
  columns: Column[];
  imgs: Imgs;
  redes: IRedes;
}

export interface Imgs {
  img1: string;
  img2?: string;
}

export interface IColumnItem {
  link?: string;
  label: string;
}

export interface Column {
  title: string;
  type: string;
  texts: IColumnItem[];
}

export interface IRedes {
  links: IColumnItem[];
}
