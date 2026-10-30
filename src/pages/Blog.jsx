import { Link } from 'react-router-dom';
import { breadcrumbs } from '../data/pages';
import { blogPosts, postUrl } from '../data/blog';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import BlogSidebar from '../components/BlogSidebar';
import DreamCard from '../components/DreamCard';

const heading = { backgroundImage: '/assets/img/bio/perro-jardin.jpg', title: 'BLOG', breadcrumbs: breadcrumbs('Blog') };

export default function Blog() {
  usePageTitle('Blog');

  return (
    <>
      <PageHeading data={heading} />
      <section>
        <div className="cs_height_100 cs_height_lg_70"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_post_1_list">
                {blogPosts.map((post) => (
                  <div className="cs_post cs_style_1" key={post.slug}>
                    <Link to={postUrl(post)} className="cs_post_thumb cs_radius_15">
                      <img src={post.image} alt={post.title} className="w-100 cs_radius_15" />
                    </Link>
                    <div className="cs_post_info">
                      <div className="cs_post_meta cs_style_1">
                        <span className="cs_posted_by">{post.date}</span>
                        <Link to="/blog" className="cs_post_avatar">
                          {post.category}
                        </Link>
                      </div>
                      <h2 className="cs_post_title cs_fs_40">
                        <Link to={postUrl(post)}>{post.title}</Link>
                      </h2>
                      <div className="cs_post_sub_title">{post.excerpt}</div>
                      <Link to={postUrl(post)} className="cs_btn cs_style_2 cs_bold cs_heading_color">
                        Leer más
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70"></div>
      </section>
      <DreamCard />
    </>
  );
}
