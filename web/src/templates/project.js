import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    sampleProject: sanitySampleProject(id: {eq: $id}) {
      id
      publishedAt
      title
      slug {
        current
      }
      keyValues {
        key
        value
      }
      _rawBody
    }
  }
`

const ProjectTemplate = props => {
  const { data, errors } = props
  const project = data && data.sampleProject
  return (
    <>
      {errors && <SEO title='GraphQL Error' />}
      {project && <SEO title={project.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} />}
    </>
  )
}

export default ProjectTemplate
