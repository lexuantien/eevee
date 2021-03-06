import * as React from 'react';
import { getNativeElementProps } from '@eevee/react-utilities';
import type { BlogPageProps, BlogPageState } from './BlogPage.types';
import { useBlogPageState } from './useBlogPageState';

/**
 * Create the state required to render Blog.
 *
 * The returned state can be modified with hooks such as useBlogStyles_unstable,
 * before being passed to renderBlog_unstable.
 *
 * @param props - props from this instance of Blog
 * @param ref - reference to root HTMLElement of Blog
 */
export const useBlogPage = (props: BlogPageProps, ref: React.Ref<HTMLElement>): BlogPageState => {
  const state: BlogPageState = {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };

  useBlogPageState(state);

  return state;
};
