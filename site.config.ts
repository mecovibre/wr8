import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c2164772d31f46079e9be72e1731ad3e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'MECO on the Rock',
  domain: 'mecovibre.vercel.app',
  author: 'MECO',
  seotitle: 'MECO on the Rock',

  // open graph metadata (optional)
  description: 'MECO on the Rock',

  // social usernames (optional)
  twitter: 'meco_vibre',
  // github: 'verfasor',
  // linkedin: 'verfasor',
  newsletter: 'https://www.dawoom-t4c.org/dadadat', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: '#',
  defaultPageCover: '#',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'Blog',
      pageId: '1c308c168e5a45928cae8c614de34106'
    },    
    {
      title: 'About',
      pageId: '34ccb98b157441b489eb8ec2958022c5'
    },
    //{
    //  title: 'Contact',
    //  pageId: '8591d5c39264426289ad4008d817fd11'
    //}
  ]
})
