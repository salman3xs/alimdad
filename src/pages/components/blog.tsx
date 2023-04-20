import React, { FC } from "react";
import img1 from "../../assets/img/blog-1.jpg";
import img2 from "../../assets/img/blog-2.jpg";
import img3 from "../../assets/img/blog-3.jpg";

const Blog: FC = (): JSX.Element => {
  return (
    <div className="blog">
      <div className="container">
        <div className="section-header text-center">
          <p>Our Blog</p>
          <h2>Latest news & articles directly from our blog</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-item">
              <div className="blog-img">
                <img src={img1} alt="Image" />
              </div>
              <div className="blog-text">
                <h3>
                  <a href="#">Lorem ipsum dolor sit</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                  facili ornare velit non vulpte liqum metus tortor
                </p>
              </div>
              <div className="blog-meta">
                <p>
                  <i className="fa fa-user"></i>
                  <a href="">Admin</a>
                </p>
                <p>
                  <i className="fa fa-comments"></i>
                  <a href="">15 Comments</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-item">
              <div className="blog-img">
                <img src={img2} alt="Image" />
              </div>
              <div className="blog-text">
                <h3>
                  <a href="#">Lorem ipsum dolor sit</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                  facili ornare velit non vulpte liqum metus tortor
                </p>
              </div>
              <div className="blog-meta">
                <p>
                  <i className="fa fa-user"></i>
                  <a href="">Admin</a>
                </p>
                <p>
                  <i className="fa fa-comments"></i>
                  <a href="">15 Comments</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-item">
              <div className="blog-img">
                <img src={img3} alt="Image" />
              </div>
              <div className="blog-text">
                <h3>
                  <a href="#">Lorem ipsum dolor sit</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                  facili ornare velit non vulpte liqum metus tortor
                </p>
              </div>
              <div className="blog-meta">
                <p>
                  <i className="fa fa-user"></i>
                  <a href="">Admin</a>
                </p>
                <p>
                  <i className="fa fa-comments"></i>
                  <a href="">15 Comments</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
