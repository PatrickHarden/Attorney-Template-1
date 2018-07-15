import axios from 'axios'
import user from './websiteId.json'


export default {
  getSiteData: async () => {
    const ID = user.website_id
    const { data: websiteData } = await axios.get('http://dev.attorneywebbuilder.com/JSON/websites/' + ID)

    return {
      title: 'Attorney Template',
      siteRoot: '',
      websiteData
    }
  },
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        is404: true,
        component: 'src/containers/Home',
      },
    ]
  },
}
