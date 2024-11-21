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
          {text: "Update 0.1", link: "/api-examples"},
          {text: "Update 0.2", link: "/api-examples"}
        ]
      }
    ],

    sidebar: {
      '/api/' :[
        {
          text: '',
          collapsed: false,
          items: [
            { text: 'API Documentation', link: '/api/api-doc'}
          ]
        }
      ],

      '/content/':[
        {
          text: '',
          items:[
            {
              text: 'About Us', link: '/content/about-us'
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
