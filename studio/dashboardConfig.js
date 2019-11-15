export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dce710acc27b8720c15e07a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b89d6pjn',
                  apiId: 'a9c0aa4d-dfdc-4752-987c-f23fb2d722d6'
                },
                {
                  buildHookId: '5dce710a0b8c72bc058f5c38',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-26fd7diz',
                  apiId: '5f1b7e80-5f55-413d-8241-68d6bf38e52e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NouhaC/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-26fd7diz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
