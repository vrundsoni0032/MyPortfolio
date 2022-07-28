import * as React from "react"
import { Themed } from "theme-ui"
import PageLayout from "../../components/Layout"

export interface project1Props {

}

const Project1 = () => (
  <PageLayout
    title="Kick Some Bass" // Title and Heading
    //demoLink="https://github.com/vrundsoni0032/MyPortfolio" // Demo Link - Remove this line if don't have demo
    video="https://www.youtube.com/embed/353Bkl_6pk8" // Remove if doen't have video
  >
    <Themed.p>
    </Themed.p>

    <Themed.p>
    </Themed.p>
  </PageLayout>
)

export default Project1;
