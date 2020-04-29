export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea9cd0d347d3a7d93b77a4b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ios9efep',
                  apiId: 'a3e2faf7-81b1-49eb-9f3b-93675b9ad7b6'
                },
                {
                  buildHookId: '5ea9cd0ddb09adc2f26ca7b5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-49otwn1q',
                  apiId: '37dddea2-0a9b-4d7e-b8c5-ad9a28bd6f4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stefankarlbergz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-49otwn1q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
