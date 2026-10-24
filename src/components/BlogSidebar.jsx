import { sentenceCase } from '../utils/text';
import { Link } from 'react-router-dom';
import { blogPosts, blogSidebar, postUrl } from '../data/blog';
import { services, serviceUrl } from '../data/services';
import { FaIcon, SidebarSearchIcon } from './Icons';

function IconLink({ to = '/blog', children }) {
  return (
    <Link to={to}>
      <i className="d-flex">
        <FaIcon name="link" size={16} width={20} />
      </i>
      {children}
    </Link>
  );
}

export default function BlogSidebar() {
  return (
    <div className="col-lg-4">
      <div className="cs_sidebar cs_right_sidebar">
        <div className="cs_sidebar_item widget_search">
          <form className="cs_sidebar_search" action="#" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Buscar..." />
            <button className="cs_sidebar_search_btn" aria-label="Buscar">
              <SidebarSearchIcon />
            </button>
          </form>
        </div>
        <div className="cs_sidebar_item widget_categories">
          <h4 className="cs_sidebar_widget_title">Categorías</h4>
          <ul>
            {blogSidebar.categories.map((category) => (
              <li className="cat-item" key={category}>
                <IconLink>{category}</IconLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="cs_sidebar_item">
          <h4 className="cs_sidebar_widget_title">Artículos recientes</h4>
          <ul className="cs_recent_posts">
            {blogPosts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <div className="cs_recent_post">
                  <Link to={postUrl(post)} className="cs_recent_post_thumb">
                    <div className="cs_recent_post_thumb_in cs_bg_filed" style={{ backgroundImage: `url(${post.image})` }}></div>
                  </Link>
                  <div className="cs_recent_post_info">
                    <h3 className="cs_recent_post_title">
                      <Link to={postUrl(post)}>{post.title.length > 32 ? `${post.title.slice(0, 32)}...` : post.title}</Link>
                    </h3>
                    <div className="cs_recent_post_date cs_primary_40_color">{post.date}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="cs_sidebar_item widget_archive">
          <h4 className="cs_sidebar_widget_title">Servicios</h4>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <IconLink to={serviceUrl(service)}>{sentenceCase(service.title)}</IconLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="cs_sidebar_item widget_tag_cloud">
          <h4 className="cs_sidebar_widget_title">Plagas</h4>
          <div className="tagcloud">
            {blogSidebar.tags.map((tag) => (
              <Link to="/blog" className="tag-cloud-link" key={tag}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
