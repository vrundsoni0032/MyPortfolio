import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import { Link } from "gatsby"
import * as React from "react"
import { Themed } from "theme-ui"

export interface LayoutProps {
  title: string // Heading
  video?: string // Embed Links only
  children: React.ReactNode // Data or Text
  demoLink?: string // Demo Link if available
}

const PageLayout: React.FC<LayoutProps> = ({
  title,
  children,
  video,
  demoLink
}) => {
  return (
    <Layout>
      <Seo title={`${title} - Vrund Soni`} />
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '4rem 1rem',
      }}>
        <a href="/" onClick={() => window.close()}>{"< Back"}</a>
        <Themed.h1>{title}</Themed.h1>

        {
          video ?
            <iframe
              width="100%"
              style={{ aspectRatio: '16/9' }}
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            : <></>
        }

        {
          demoLink ?
            <Themed.p>
              <a href={demoLink} target="_blank">View Demo</a>
            </Themed.p>
            : <></>
        }

        {
          children
        }
      </div>
    </Layout>
  );
}

export default PageLayout;