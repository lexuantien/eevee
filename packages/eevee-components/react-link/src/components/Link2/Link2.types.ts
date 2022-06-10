import type { EeveeProps, EeveeState, EeveeSlot } from '@eevee/react-utilities';
import * as React from 'react';
import { EeveeIconsProps } from '@eevee/react-icons';

export type LinkSlots2 = {
  /**
   * Root of the component that renders as either an <a> or a <button> tag.
   */
  root: EeveeSlot<'a'>;

  iconAndText: NonNullable<EeveeSlot<'div'>>;
  text: NonNullable<EeveeSlot<'span'>>;
};

export type LinkType = 'hash' | 'external' | 'internal';

export type LinkProps2 = EeveeProps<Partial<LinkSlots2>> & {
  icon?: React.ReactNode;
  iconFill?: React.FC<EeveeIconsProps<React.SVGAttributes<SVGElement>>>;
  iconRegular?: React.FC<EeveeIconsProps<React.SVGAttributes<SVGElement>>>;
  // compoundIcon?: React.FC<EeveeIconsProps<React.SVGAttributes<SVGElement>>>;
};

export type LinkState2 = EeveeState<LinkSlots2> &
  Pick<LinkProps2, 'icon'> & {
    /**
     * There are three types of links
     * - Internal links to other pages within the same app
     * - External links, to other domains
     * - Hash links (#introduction), for the same page.
     * @type
     * @default 'internal'
     */
    linkType: LinkType;

    iconOnly?: boolean;

    compoundIcon?: React.FC<EeveeIconsProps<React.SVGAttributes<SVGElement>>>;

    isCurrent: boolean;
  };