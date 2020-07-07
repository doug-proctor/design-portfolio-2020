import React, { useRef } from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'

import Nav from '../components/nav'
import SEO from '../components/seo'
import Header from '../components/header'
import Spacer from '../components/spacer'

import SectionStrengths from '../components/section-strengths'
import SectionToolkit from '../components/section-toolkit'
import SectionStudies from '../components/section-studies'
import SectionSides from '../components/section-sides'
import SectionContact from '../components/section-contact'

import '../styles/layout.css'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      limit: 3
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          title
          client
          previewImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  const sidesRef = useRef(null);
  const studiesRef = useRef(null);
  const contactRef = useRef(null);
  const toolkitRef = useRef(null);
  const strengthRef = useRef(null);

  if (errors) {
    return (
      <GraphQLErrorList errors={errors} />
    )
  }

  const site = (data || {}).site

  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing site settings.'
    )
  }

  const jumpTo = target => {
    let node = undefined

    if (target === 'strengths') {
      if (strengthRef) node = strengthRef
    }

    if (target === 'toolkit') {
      if (toolkitRef) node = toolkitRef
    }

    if (target === 'studies') {
      if (studiesRef) node = studiesRef
    }

    if (target === 'sides') {
      if (sidesRef) node = sidesRef
    }

    if (target === 'contact') {
      if (contactRef) node = contactRef
    }

    if (node) {
      node.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  return (
    <>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

        <Header jumpTo={jumpTo} />

        <Nav jumpTo={jumpTo} />
        <Spacer mb={100} />

        <div ref={strengthRef}>
          <SectionStrengths />
        </div>

        <div ref={toolkitRef}>
          <SectionToolkit />
          <Spacer mb={100} />
        </div>

        <div ref={studiesRef}>
          <SectionStudies studies={projectNodes} />
          <Spacer mb={100} />
        </div>

        <div ref={sidesRef}>
          <SectionSides />
          <Spacer mb={100} />
        </div>

        <div ref={contactRef}>
          <SectionContact />
          <Spacer pb={100} />
        </div>
    </>
  )
}

export default IndexPage
