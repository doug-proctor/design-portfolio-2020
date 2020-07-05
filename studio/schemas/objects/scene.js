import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'pvwjwc00',
  dataset: 'production',
  // token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

function src(source) {
  return builder.image(source)
}

const style = {
  margin: 5,
  marginBottom: 0,
  display: 'inline-block',
}

const renderThumbnail = figure => (
  figure.asset && <img alt="Thumbnail" style={style} src={src(figure.asset._ref).height(45).url()} />
)

const Scene = props => {
  if (props.value && props.value.figures) {
    return props.value.figures.map(renderThumbnail)
  }
  return null
}

export default {
  name: 'scene',
  title: 'Scene',
  type: 'object',
  fields: [
    {
      title: 'Page-wide',
      name: 'pageWide',
      type: 'boolean',
      options: {
        isHighlighted: true,
        layout: 'checkbox'
      }
    },
    {
      name: 'figures',
      title: 'Figures',
      type: 'array',
      of: [{type: 'figure'}]
    }
  ],
  preview: {
    select: {
      figures: 'figures'
    },
    component: Scene
  }
}
