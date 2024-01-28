import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '57brdeh8',
    dataset: 'production',
    apiVersion: '2024-01-27',
    useCdn: true,
    token: 'skSwEN1MHnscZ71nOz15tcimprrQTPTCxMwUHDxYPjdM3RPU5riAzUo20VUugQybXQyK60V0BhSuk2lW1tvzhLzCYcRn8FFpOw9pit4d7Ua0PbdzB68j6K5MwjeuP8iK7w7LURIDMUsLyFdu5INzEIe3nrZe55yKHUUk87d0bxIB2Nv8FCTE',
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);