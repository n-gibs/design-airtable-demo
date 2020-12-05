const airtableQuery = `
{
    allAirtable(filter: { table: { eq: "Projects" } }) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                    src
                    aspectRatio
                    base64
                    sizes
                    srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`

function transform({ id, data: { name, type, date, image } }) {
  return {
    objectID: id,
    name,
    type,
    date,
    image: { ...image.localFiles[0].childImageSharp.fluid },
  }
}

const queries = [
  {
    query: airtableQuery,
    transformer: ({ data }) => {
      data.allAirtable.nodes.map(transform(data))
    },
  },
]

module.exports = queries
