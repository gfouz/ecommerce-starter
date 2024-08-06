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
import { CoffeeIcon } from '../icons/icons.tsx';

let regex = /\//g;

export default function Navbar({ links }: { links: string[] }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  let { pathname } = useLocation();

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
          <CoffeeIcon />
          <p className='font-extrabold text-inherit'>RapidCoffee</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4 ' justify='center'>
        <NavbarBrand className='bg-rose-500 h-full px-4'>
          <CoffeeIcon />
          <p className='font-bold text-inherit text-white'>RapidCoffee</p>
        </NavbarBrand>

        {links?.map((link) => (
          <NavbarItem
            key={link}
            className={pathname !== link ? 'block' : 'hidden'}
          >
            <Link
              className='dark:text-white text-white hover:text-blue-400'
              to={link}
            >
              <span>
                {pathname !== link ? link.replace(regex, ' ') : null}{' '}
              </span>
              <span>{link === '/' && pathname !== link ? 'home' : null}</span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button as={Link} color='primary' to='/register' variant='flat'>
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='pt-16'>
        {links.map((link, index) => (
          <NavbarMenuItem
            key={index}
            className={pathname !== link ? 'block' : 'hidden'}
          >
            <Link
              className='text-slate-900 capitalize font-medium hover:tracking-wider hover:font-extrabold hover:text-slate-600'
              to={link}
            >
              <span className=''>
                {pathname !== link ? link.replace(regex, ' ') : null}{' '}
              </span>
              <span>{link === '/' && pathname !== link ? 'home' : null}</span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
