const config = {
  gatsby: {
    pathPrefix: '/en/learn/',
    siteUrl: 'https://www.latin-is-simple.com',
    gaTrackingId: null,
    trailingSlash: true,
  },
  header: {
    logo: 'https://www.latin-is-simple.com/static/img/icons/apple-icon-120x120.png',
    logoLink: 'https://www.latin-is-simple.com/',
    title: "<a href='https://www.latin-is-simple.com/learn/'>learn</a>",
    githubUrl: 'https://github.com/MrP01/latin-wiki',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://facebook.com/LatinIsSimple" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='//www.latin-is-simple.com/static/img/facebook-icon.png' alt={'Facebook'}/>
		      </div>
		    </a>
		  </li>`,
    links: [
        {text: 'Dictionary', link: 'https://www.latin-is-simple.com/vocabulary/'},
        {text: 'Sentence Analysis', link: 'https://www.latin-is-simple.com/analysis/'},
        {text: 'Library', link: 'https://www.latin-is-simple.com/library/'},
    ],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/latin-quick-start/', // add trailing slash if enabled above
      '/wordtypes/',
    ],
    collapsedNav: [
      // '/wordtypes/', // add trailing slash if enabled above
    ],
    links: [{text: 'Latin Online Dictionary', link: 'https://www.latin-is-simple.com'}],
    frontline: false,
    ignoreIndex: true,
    title: "<a href='https://www.latin-is-simple.com/'>Latin is Simple </a><div class='greenCircle'></div>" +
      "<a href='https://www.latin-is-simple.com/learn/'>Wiki</a>",
  },
  siteMetadata: {
    title: 'Latin Wiki - a Latin is Simple Learning Resource',
    description: 'The Latin is Simple Wiki is a learning resource and reference for beginners',
    ogImage: null,
    docsLocation: 'https://github.com/MrP01/latin-wiki/tree/master/content',
    favicon: 'https://www.latin-is-simple.com/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {},
  },
};

module.exports = config;
