import * as React from "react"
import { Themed } from "theme-ui"
import PageLayout from "../../components/Layout"

export interface project1Props {

}

const Project1 = () => (
  <PageLayout
    title="Bubble Shooter" // Title and Heading
    demoLink="https://github.com/vrundsoni0032/MyPortfolio" // Demo Link - Remove this line if don't have demo
    video="https://www.youtube.com/embed/iT_VYneHezE" // Remove if doen't have video
  >
    <Themed.p>
      part 1.
    </Themed.p>

    <Themed.p>
     part 2.. again...
    </Themed.p>
  </PageLayout>
)

export default Project1;