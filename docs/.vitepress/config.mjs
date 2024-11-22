import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', {rel: 'icon', href: '/public/favicon.ico'}]],
  title: '[Tribe Name] - Technical Documentation',
  //description: "This Template for Collecting Technical Documentation",
  themeConfig: {
    siteTitle: 'Telkom Indonesia',
    logo: '/telkom.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Help', link: '/markdown-examples' },
      { text: 'Contact Us', link: '/markdown-examples' },
      {
        text: 'Version',
        items: [
          {text: "Update 24.2", link: "/versioning/24.2/api"},
        ]
      }
    ],

    sidebar: {
      '/api/' :[
        {
          text: '',
          collapsed: false,
          items: [
            { text: 'About API', link: '/api/api-doc'},
            { text: 'Authentication', link: '/api/auth'},
            { text: 'Product', link: '/api/product'}
          ]
        }
      ],
      '/diagram/' :[
        {
          text: '',
          collapsed: false,
          items: [
            { text: 'Architecture Representation', link: '/diagram/architecture'},
            { text: 'Sequence Diagram', link: '/diagram/sequence'}
          ]
        }
      ],

      '/about-us/':[
        {
          text: '',
          items:[
            {
              text: 'Organization', link: '/about-us/organization'
            },
            {
              text: 'Teams', link: '/about-us/teams'
            }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: '',
      copyright: '© 2024 Copyright by PT Telkom Indonesia (Persero) Tbk.'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cecepkrn/tribename-technical-documentation.git' }
    ]
  }
})
