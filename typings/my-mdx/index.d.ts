import type { ReadTimeResults } from "reading-time"
/**
  * It's annoying that all these are set to optional I know, but there's
  * no great way to ensure that the MDX files have these properties,
  * especially when a common use case will be to edit them without running
  * the app or build. So we're going to force you to handle situations when
  * these values are missing to avoid runtime errors.
*/

/**
 * @example
 */
export type Frontmatter = {
  // require
  categories: Array<string>
  description: string,
  meta: {
    keywords: Array<string>
    [key: string]: string | Array<string>
  },
  title: string
  author: {
    name: string,
    id: string,
    url: string
  },
  // optional
  id?: string,
  archived?: boolean
  date?: string
  draft?: boolean
  bannerCloudinaryId?: string
  bannerCredit?: string
  bannerAlt?: string
  bannerTitle?: string
}

export type MdxPage = {
  code: string,
  frontmatter: Frontmatter
}

/**
 * This is a separate type from MdxPage because the code string is often
 * pretty big and the pages that simply list the pages shouldn't include the code.
 */
export type MdxListItem = Omit<MdxPage, 'code'>

export type MDXCollection = MdxPage & {
  readTime: ReadTimeResults
}

export type Post = MDXCollection

export type GitHubFile = { path: string; content: string }
