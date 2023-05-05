import React from "react";
import Layout from "@/components/layout";
import Post from "@/components/post";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Layout
        title={"Blog"}
        description={"Blog de música, venta de guitarras y mucho más"}
      >
        <main className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className="grid">
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts } = await respuesta.json();
  return { props: { posts } };
}
