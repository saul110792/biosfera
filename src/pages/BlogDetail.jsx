import { Link, useParams } from 'react-router-dom';
import { breadcrumbs } from '../data/pages';
import { getPost } from '../data/blog';
import { whatsappLink } from '../data/business';
import usePageTitle from '../hooks/usePageTitle';
import PageHeading from '../components/PageHeading';
import BlogSidebar from '../components/BlogSidebar';
import DreamCard from '../components/DreamCard';
import NotFound from './NotFound';

export default function BlogDetail() {
  const { blogId } = useParams();
  const post = getPost(blogId);
  usePageTitle(post ? post.title : 'Página no encontrada');

  if (!post) return <NotFound />;

  return (
    <>
      <PageHeading data={{ backgroundImage: '/assets/img/bio/perro-jardin.jpg', title: post.title, breadcrumbs: breadcrumbs('Blog') }} />
      <section>
        <div className="cs_height_100 cs_height_lg_70"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_post cs_style_1 cs_type_1">
                <div className="cs_post_thumb cs_radius_15">
                  <img src={post.image} alt={post.title} className="w-100 cs_radius_15" />
                </div>
                <div className="cs_post_info">
                  <div className="cs_post_meta cs_style_1 cs_ternary_color cs_semi_bold cs_primary_font">
                    <span className="cs_posted_by">{post.date}</span>
                    <Link to="/blog" className="cs_post_avatar">
                      {post.category}
                    </Link>
                  </div>
                  <h2 className="cs_post_title">{post.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
              </div>
              <div className="cs_height_30 cs_height_lg_30"></div>
              <h2 className="cs_fs_32 mb-0">¿Tienes una plaga en casa o en tu negocio?</h2>
              <div className="cs_height_5 cs_height_lg_5"></div>
              <p className="mb-0">Escríbenos y te ayudamos a encontrar la mejor solución para tu espacio.</p>
              <div className="cs_height_25 cs_height_lg_25"></div>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color">
                <span>Cotizar por WhatsApp</span>
              </a>
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
