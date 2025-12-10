import { DefineComponent } from 'vue'
import type { ButtonProps } from './components/Button/types'
import type { InputProps } from './components/Input/types'
import type { TextProps } from './components/Text/types'
import type { ModalProps } from './components/Modal/types'
import type { FormProps, FormItemProps } from './components/Form/types'
import type { 
  LayoutProps, 
  LayoutHeaderProps, 
  LayoutSidebarProps, 
  LayoutContentProps, 
  LayoutFooterProps 
} from './components/Layout/types'
import type { NavbarProps, NavbarItemProps } from './components/Navbar/types'
import type { SidebarProps, SidebarItemProps } from './components/Sidebar/types'
import type { FlexProps } from './components/Flex/types'
import type { GridProps } from './components/Grid/types'
import type { CardProps } from './components/Card/types'

export const VNButton: DefineComponent<ButtonProps>
export const VNInput: DefineComponent<InputProps>
export const VNText: DefineComponent<TextProps>
export const VNModal: DefineComponent<ModalProps>
export const VNForm: DefineComponent<FormProps>
export const VNFormItem: DefineComponent<FormItemProps>
export const VNLayout: DefineComponent<LayoutProps>
export const VNLayoutHeader: DefineComponent<LayoutHeaderProps>
export const VNLayoutSidebar: DefineComponent<LayoutSidebarProps>
export const VNLayoutContent: DefineComponent<LayoutContentProps>
export const VNLayoutFooter: DefineComponent<LayoutFooterProps>
export const VNNavbar: DefineComponent<NavbarProps>
export const VNNavbarItem: DefineComponent<NavbarItemProps>
export const VNSidebar: DefineComponent<SidebarProps>
export const VNSidebarItem: DefineComponent<SidebarItemProps>
export const VNFlex: DefineComponent<FlexProps>
export const VNGrid: DefineComponent<GridProps>
export const VNCard: DefineComponent<CardProps>

export type {
  ButtonProps,
  InputProps,
  TextProps,
  ModalProps,
  FormProps,
  FormItemProps,
  LayoutProps,
  LayoutHeaderProps,
  LayoutSidebarProps,
  LayoutContentProps,
  LayoutFooterProps,
  NavbarProps,
  NavbarItemProps,
  SidebarProps,
  SidebarItemProps,
  FlexProps,
  GridProps,
  CardProps
}
