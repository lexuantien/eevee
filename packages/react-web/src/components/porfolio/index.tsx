import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { tokens } from '@eevee/react-theme';
import { useBlogContext } from '@context/index';
import { useBlogAPISWR } from '../../feature/blog/index';

const useDisplayStyles = makeStyles({
  'mt-16': {
    marginTop: '16px',
  },

  'mt-4': {
    marginTop: '4px',
  },

  'mt-12': {
    marginTop: '12px',
  },

  'mt-24': {
    marginTop: '24px',
  },
});

const useRootStyles = makeStyles({
  root: {},

  avatar: {
    ...shorthands.borderRadius('50%'),
  },

  textInherit: {
    fill: 'inherit',
    color: 'inherit',
    fontSize: 'inherit',
  },

  title: {
    fontSize: '16px',
    lineHeight: '20px',
    color: tokens.f1,
  },
});

type Props = JSX.IntrinsicElements['div'] & {
  slug?: string;
};

export const Porfolio = ({ slug, ...props }: Props) => {
  const rootStyles = useRootStyles();
  const displayStyles = useDisplayStyles();

  const blog = useBlogAPISWR(slug);

  return blog ? (
    <div {...props}>
      <Link to={`/@${blog.frontmatter.author[1]}`}>
        <img width={69} height={69} className={rootStyles.avatar} src="https://source.unsplash.com/random" />
      </Link>
      <div className={displayStyles['mt-16']} />
      <Link className={rootStyles.textInherit} to={`/@${blog.frontmatter.author[1]}`}>
        <h2 className={rootStyles.title}>{blog.frontmatter.author[0]}</h2>
      </Link>
      <div className={displayStyles['mt-4']} />
      <span>61 followers</span>
      <div className={displayStyles['mt-12']} />
      <p>{blog.frontmatter.author[3]}</p>
    </div>
  ) : (
    <></>
  );
};
