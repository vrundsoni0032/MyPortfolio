import * as React from "react"
import { Themed } from "theme-ui"
import PageLayout from "../../components/Layout"

export interface project1Props {

}

const Project1 = () => (
  <PageLayout
    title="ColdNites" // Title and Heading
    //demoLink="https://github.com/vrundsoni0032/MyPortfolio" // Demo Link - Remove this line if don't have demo
    video="https://www.youtube.com/embed/D7zN8swMrRQ" // Remove if doen't have video
  >
    <Themed.p>
    </Themed.p>

    <Themed.p>
    </Themed.p>
  </PageLayout>
)

export default Project1;