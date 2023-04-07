const contentful = require('contentful-management')
const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGE_TOKEN,
    cache: false,
})
export const management = client.getSpace(process.env.CONTENTFUL_SPACE_ID).then((space) => {
    return space.getEnvironment('master')
}).catch((err) => {
    console.log(err)
})
