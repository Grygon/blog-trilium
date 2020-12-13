import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

const EmailForm = styled.form`
    display: grid;
    grid-template-columns: 8ch 1fr;
    grid-template-rows: 1.5em 1.5em 1.5em 1fr;
    grid-gap: 4px;
`
const SendButton = styled.button`
    margin: auto;
    grid-column: 1 / 3;
    width: 8em;
    background-color: #c12e2a;
    background-image: linear-gradient(to bottom,#d9534f 0,#c12e2a 100%);
    background-repeat: repeat-x;
    text-shadow: 0 -1px 0 rgba(0,0,0,.2);
    color: #fff;
    border-color: #ac2925;
    display: block;
    width: 30%;
`



const Contact = ({ location, data }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;

    return (
        <Layout location={location} title={siteTitle}>
            <h2>Need to contact me?</h2>
            <p>Feel free to reach out to me here, I'll do my best to review responses regularly!</p>
            <EmailForm method="post" action="https://formspree.io/f/mdopwwwk">
                <label>
                    Name
                </label>
                <input type="text" name="name" id="name" />
                <label>
                    Email
                </label>
                <input type="email" name="_replyto" />
                <label>
                    Subject
                </label>
                <input type="text" name="subject" id="subject" />
                <label>
                    Message
                </label>
                <textarea name="message" id="message" rows="5" />
                <SendButton type="submit">Send ➡</SendButton>
            </EmailForm>
        </Layout>
    )
};

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`