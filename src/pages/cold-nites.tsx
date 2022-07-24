import * as React from "react"
import { Themed } from "theme-ui"
import PageLayout from "../../components/Layout"

export interface project1Props {

}

const Project1 = () => (
  <PageLayout
    title="ColdNites" // Title and Heading
    demoLink="https://github.com/vrundsoni0032/MyPortfolio" // Demo Link - Remove this line if don't have demo
    video="https://www.youtube.com/embed/dQw4w9WgXcQ" // Remove if doen't have video
  >
    <Themed.p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore reiciendis consequuntur? Dignissimos tenetur architecto commodi dolor mollitia expedita inventore modi fugiat vitae quidem illo, voluptates iusto nemo totam provident.
    </Themed.p>

    <Themed.p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore reiciendis consequuntur? Dignissimos tenetur architecto commodi dolor mollitia expedita inventore modi fugiat vitae quidem illo, voluptates iusto nemo totam provident.
    </Themed.p>
  </PageLayout>
)

export default Project1;