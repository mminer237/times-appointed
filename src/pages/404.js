import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout title="404">
      <main>
        <h2>Page not found</h2>
        <p>
          Somehow, this is currently an unknown page. Perhaps you visited it…before its time.
          <br />
          <Link to="/">Go home.</Link>
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
