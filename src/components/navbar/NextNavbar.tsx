import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import CartPlus from '../icons/CartPlus.tsx';

let regex = /\//g;

export default function Navbar({ links }: { links: string[] }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  let { pathname } = useLocation();
  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <NextUINavbar
      className='bg-slate-800'
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          className='text-white'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent
        className='sm:hidden text-white bg-rose-500 p-3'
        justify='center'
      >
        <NavbarBrand>
          <CartPlus color='white' />
          <p className='font-extrabold text-inherit'>RapidCoffee</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4 ' justify='center'>
        <NavbarBrand className='bg-rose-500 h-full px-4'>
          <CartPlus color='white' />
          <p className='font-bold text-inherit text-white'>RapidCoffee</p>
        </NavbarBrand>

        {links?.map((link) => (
          <NavbarItem
            key={link}
            className={pathname !== link ? 'block' : 'hidden'}
          >
            <Link className='dark:text-white text-white' to={link}>
              <span>
                {pathname !== link ? link.replace(regex, ' ') : null}{' '}
              </span>
              <span>{link === '/' && pathname !== link ? 'home' : null}</span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link to='/login'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' to='/register' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='pt-16'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              to='#'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
