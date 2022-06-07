import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { SideNavSlots, SideNavState } from './SideNav.types';
import { Top } from './top/index';
import { Middle } from './middle/index';

/**
 * Render the final JSX of SideNav
 */
export const renderSideNav = (state: SideNavState) => {
  const { slots, slotProps } = getSlots<SideNavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.content {...slotProps.content}>
        <Top />
        <Middle />
      </slots.content>
    </slots.root>
  );
};
