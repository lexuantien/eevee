import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
// import { iconFilledClassName, iconRegularClassName } from '@eevee/react-icons';
import type { LinkSlots2, LinkState2 } from './Link2.types';
import {
  commonRootStyles,
  commonTextStyles,
  commonTextStyles2,
  commonWrapperStyles,
  SlotClassNames,
} from '@eevee/react-utilities';

export const linkClassNames: SlotClassNames<LinkSlots2> = {
  root: 'eve-Link',
  iconAndText: 'eve-Link2__iconAndText',
  text: 'eve-Link2__text',
};

const useLinkStyles = makeStyles({
  base: commonTextStyles(),
  base1: commonRootStyles(),
  focusIndicator: {
    ':focus': {
      ...shorthands.outline('2px', 'auto', tokens.foreground3),
      outlineOffset: '2px',
    },

    '&:focus:not(.focus-visible)': {
      ...shorthands.outline('none'),
    },
  },
  root: {
    textDecorationLine: 'none',
    display: 'inline-flex',
    // ...shorthands.borderRadius('9999px'),
    // ...shorthands.borderStyle('solid'),
    // ...shorthands.borderWidth(tokens.strokeWidthThin), // 1px
    // ...shorthands.borderColor(tokens.background4),
    // marginBottom: 'calc(-12px)',
    // marginTop: 'calc(-12px)',
    userSelect: 'none',
    cursor: 'pointer',
    transitionDuration: '0.2s',
    transitionProperty: 'background-color, box-shadow',
    outlineStyle: 'none',
    backgroundColor: tokens.background4,
  },

  forIcon: {
    ...shorthands.borderRadius('9999px'),
    minHeight: '36px',
    minWidth: '36px',
  },
});

const useIconAndTextStyles = makeStyles({
  base: commonWrapperStyles(),
  root: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '0px',
    overflowWrap: 'break-word',
    lineHeight: tokens.lineHeightBase300,
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.foreground1, // inject
  },
});

const useTextStyles = makeStyles({
  base: commonWrapperStyles(),
  base2: commonTextStyles(),
  base3: commonTextStyles2(),
  root: {
    color: tokens.foreground3,
    minWidth: '0px',
    overflowWrap: 'break-word',
    lineHeight: tokens.lineHeightBase300,
    fontSize: tokens.fontSizeBase400,
    fontFamily: 'inherit',
    // ...shorthands.borderBottom('2px', 'solid', tokens.background3), // inject
  },
});

const useHoverStyles = makeStyles({
  root: {
    '@media (hover: hover)': {
      boxShadow: `0px 0px 0px ${tokens.foreground3}`, // rgb(29, 155, 240)
      ':hover': {
        // borderBottomColor: tokens.colorForeground3,
        color: tokens.foreground3, // rgb(29, 155, 240)

        transitionProperty: 'box-shadow',
        transitionDuration: '200ms',
        boxShadow: `0px 2px 0px ${tokens.foreground3}`, // rgb(29, 155, 240)
      },
    },
  },
  iconOnly: {
    '@media (hover: hover)': {
      ':hover': {
        backgroundColor: tokens.hover5,
      },
    },
  },
});

export const useLinkStyles2 = (state: LinkState2): LinkState2 => {
  const linkStyles = useLinkStyles();
  const iconAndTextStyles = useIconAndTextStyles();
  const textStyles = useTextStyles();
  const hoverStyles = useHoverStyles();

  const { iconOnly } = state;

  state.root.className = mergeClasses(
    linkClassNames.root,
    linkStyles.base,
    linkStyles.base1,
    linkStyles.focusIndicator,
    linkStyles.root,
    iconOnly && linkStyles.forIcon,
    iconOnly && hoverStyles.iconOnly,
    !iconOnly && hoverStyles.root,
    state.root.className,
  );

  state.iconAndText.className = mergeClasses(
    linkClassNames.iconAndText,
    iconAndTextStyles.base,
    iconAndTextStyles.root,
    state.iconAndText?.className,
  );

  state.text.className = mergeClasses(
    linkClassNames.text,
    textStyles.base,
    textStyles.base2,
    textStyles.base3,
    textStyles.root,
    state.text?.className,
  );

  return state;
};
