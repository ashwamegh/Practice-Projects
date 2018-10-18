import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'

const Page = withRouter((props) => (
    <Layout>
       <Content router={props.router}/>
    </Layout>
))

const Content = (props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

export default Page;