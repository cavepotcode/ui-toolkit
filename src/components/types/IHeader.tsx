import { ReactNode } from "react";

export interface IHeader {
  logo: ReactNode;
  links: ILinks[];
  backgroundColor?: string;
  textColor?: string;
  menuBtnColor?: string;
  contactBtnColor?: string;
  contactBtnColorText?: string;
}

export interface ILinks {
  label: string;
  link: string;
}

export interface IHeaderItem {
  item: ILinks;
  size: Size;
  onShowMenu: () => void;
}

export interface Size {
  width: number;
  height: number;
}
