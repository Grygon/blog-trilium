import React from "react"
import { Link } from "gatsby"


const PostList = ({ posts, num=0 }) => {

    // We'll take <=0 as "show all", under the assumption you wouldn't use this with 0 ever
    if (num > 0) {
        posts = posts.slice(0,num);
    }

    return posts.map(post => {
        let titleSlug = post.fields.slug.substring(1, post.fields.slug.length - 1);
        const title = post.frontmatter.title || titleSlug;

        return (
          <li key={post.fields.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={`/blog${post.fields.slug}`} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        )
    });
}

export default PostList