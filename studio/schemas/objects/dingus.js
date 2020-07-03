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

function urlFor(source) {
  return builder.image(source)
}

const style = {
  margin: 5,
  marginBottom: 0,
  display: 'inline-block',
}

const render = thing => (
  thing.asset && <img alt="Thumbnail" style={style} src={urlFor(thing.asset._ref).height(45).url()} />
)

const Dingus = props => {
  if (props.value && props.value.things) {
    return props.value.things.map(render)
  }
  return null
}

export default {
  name: 'dingus',
  title: 'Dingus',
  type: 'object',
  fields: [
    {
      name: 'things',
      title: 'Things',
      type: 'array',
      of: [{type: 'figure'}]
    }
  ],
  preview: {
    select: {
      things: 'things'
    },
    component: Dingus
  }
}
