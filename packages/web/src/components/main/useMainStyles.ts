import { SlotClassNames } from '@eevee/react-utilities';
import { mergeClasses, makeStyles, shorthands } from '@griffel/react';

import { breakPoints } from '@eevee/react-theme';
import { MainState, MainSlots } from './Main.types';
import { navHeight } from '../../constants/index';

export const mainClassNames: SlotClassNames<MainSlots> = {
  root: 'eve-Main',
  content: 'eve-Main__content',
};

const useMediaQueryStyles = makeStyles({
  query: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      marginBottom: 0,
    },

    [`@media ${breakPoints.lg}`]: {
      marginBottom: `${navHeight}px`,
    },

    [`@media ${breakPoints.md}`]: {
      marginBottom: `${navHeight}px`,
    },

    [`@media ${breakPoints.sm}`]: {
      marginBottom: `${navHeight}px`,
    },

    [`@media ${breakPoints.xs}`]: {
      marginBottom: `${navHeight}px`,
    },
  },

  contentQuery: {
    [`@media ${breakPoints.lgAndLarger}`]: {
      maxWidth: '770px', //'692px',
      ...shorthands.margin(0, '32px'),
    },

    [`@media ${breakPoints.lg}`]: {
      maxWidth: '900px', //'692px',
      ...shorthands.margin(0, '32px'),
    },

    [`@media ${breakPoints.md}`]: {
      maxWidth: '900px', //'692px',
      ...shorthands.margin(0, '32px'),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.margin(0, '24px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.margin(0, '24px'),
    },
  },
});

const useRootStyles = makeStyles({
  root: {
    display: 'block',
    minWidth: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
});

const useContentStyles = makeStyles({
  root: {
    width: '100%',
    minWidth: 0,
  },

  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
});

/** Applies style classnames to slots */
export const useMainStyles = (state: MainState): MainState => {
  const mediaQueryStyles = useMediaQueryStyles();
  const rootStyles = useRootStyles();
  const contentStyles = useContentStyles();

  state.root.className = mergeClasses(
    mainClassNames.root,
    rootStyles.root,
    mediaQueryStyles.query,
    state.root.className,
  );

  state.content.className = mergeClasses(
    mainClassNames.content,
    contentStyles.root,
    mediaQueryStyles.contentQuery,
    state.content.className,
  );

  state.flexCenterStyle = contentStyles.flexCenter;

  return state;
};
