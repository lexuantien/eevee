import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { BlogState, BlogSlots } from './Blog.types';
import { MDX } from '../../Mdx/index';
import { PageOrPageNotFound } from '../common/index';

/**
 * Render the final JSX of Blog
 */
export const renderBlog = (state: BlogState) => {
  const { post, postNotFound } = state;
  const { slots, slotProps } = getSlots<BlogSlots>(state);

  // TODO Add additional slots in the appropriate place

  return (
    <PageOrPageNotFound pageNotFound={postNotFound}>
      <slots.root {...slotProps.root}>{post && <MDX source={post.code} />}</slots.root>
    </PageOrPageNotFound>
  );
};
