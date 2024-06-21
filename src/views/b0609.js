import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './b0609.css'

const B0609 = (props) => {
  return (
    <div className="b0609-container">
      <Helmet>
        <title>B0609 - Ecstatic Merry Trout</title>
        <meta property="og:title" content="B0609 - Ecstatic Merry Trout" />
      </Helmet>
      <div className="b0609-advertising-a">
        <div className="Sidemenu-Layout">
          <div className="b0609-logo">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="b0609-image"
            />
          </div>
          <Link to="/">
            <div className="b0609-overview sidemenu-reg">
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"></path>
              </svg>
              <span className="sidemenu-typo-reg">Overview</span>
            </div>
          </Link>
          <Link to="/b02">
            <div className="b0609-my-workspace sidemenu-reg">
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M854 256q36 0 60 25t24 61v468q0 36-24 61t-60 25h-684q-36 0-60-25t-24-61v-468q0-36 24-61t60-25h172v-86q0-36 24-60t60-24h172q36 0 60 24t24 60v86h172zM170 342v468h684v-468h-684zM598 256v-86h-172v86h172z"></path>
              </svg>
              <span className="sidemenu-typo-reg">My Workspace</span>
            </div>
          </Link>
          <Link to="/b03">
            <div className="b0609-calendar-cont sidemenu-reg">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="sidemenu-icon-reg"
              >
                <path d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"></path>
              </svg>
              <span className="b0609-calendar-text sidemenu-typo-reg">
                Calendar
              </span>
            </div>
          </Link>
          <Link to="/b04">
            <div className="b0609-assets-cont sidemenu-reg">
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M854 768v-426h-684v426h684zM854 256q34 0 59 26t25 60v426q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h256l86 86h342z"></path>
              </svg>
              <span className="b0609-assets-text LightBasicTypographyParagraph sidemenu-typo-reg">
                Assets
              </span>
            </div>
          </Link>
          <Link to="/b0501">
            <div className="b0609-marketing-cont sidemenu-reg">
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M1024 429.256c0-200.926-58.792-363.938-131.482-365.226 0.292-0.006 0.578-0.030 0.872-0.030h-82.942c0 0-194.8 146.336-475.23 203.754-8.56 45.292-14.030 99.274-14.030 161.502s5.466 116.208 14.030 161.5c280.428 57.418 475.23 203.756 475.23 203.756h82.942c-0.292 0-0.578-0.024-0.872-0.032 72.696-1.288 131.482-164.298 131.482-365.224zM864.824 739.252c-9.382 0-19.532-9.742-24.746-15.548-12.63-14.064-24.792-35.96-35.188-63.328-23.256-61.232-36.066-143.31-36.066-231.124 0-87.81 12.81-169.89 36.066-231.122 10.394-27.368 22.562-49.266 35.188-63.328 5.214-5.812 15.364-15.552 24.746-15.552 9.38 0 19.536 9.744 24.744 15.552 12.634 14.064 24.796 35.958 35.188 63.328 23.258 61.23 36.068 143.312 36.068 231.122 0 87.804-12.81 169.888-36.068 231.124-10.39 27.368-22.562 49.264-35.188 63.328-5.208 5.806-15.36 15.548-24.744 15.548zM251.812 429.256c0-51.95 3.81-102.43 11.052-149.094-47.372 6.554-88.942 10.324-140.34 10.324-67.058 0-67.058 0-67.058 0l-55.466 94.686v88.17l55.46 94.686c0 0 0 0 67.060 0 51.398 0 92.968 3.774 140.34 10.324-7.236-46.664-11.048-97.146-11.048-149.096zM368.15 642.172l-127.998-24.51 81.842 321.544c4.236 16.634 20.744 25.038 36.686 18.654l118.556-47.452c15.944-6.376 22.328-23.964 14.196-39.084l-123.282-229.152zM864.824 548.73c-3.618 0-7.528-3.754-9.538-5.992-4.87-5.42-9.556-13.86-13.562-24.408-8.962-23.6-13.9-55.234-13.9-89.078s4.938-65.478 13.9-89.078c4.006-10.548 8.696-18.988 13.562-24.408 2.010-2.24 5.92-5.994 9.538-5.994 3.616 0 7.53 3.756 9.538 5.994 4.87 5.42 9.556 13.858 13.56 24.408 8.964 23.598 13.902 55.234 13.902 89.078 0 33.842-4.938 65.478-13.902 89.078-4.004 10.548-8.696 18.988-13.56 24.408-2.008 2.238-5.92 5.992-9.538 5.992z"></path>
              </svg>
              <span className="b0609-marketing-text sidemenu-typo-reg">
                Marketing
              </span>
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
              </svg>
            </div>
          </Link>
          <div className="b0609-advertising sidemenu-reg">
            <div className="b0609-advertising1 sidemenu-reg">
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM810.667 512c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467-157.184 33.493-211.2 87.467-87.467 128.725-87.467 211.2 33.493 157.184 87.467 211.2 128.725 87.467 211.2 87.467 157.184-33.493 211.2-87.467 87.467-128.725 87.467-211.2zM725.333 512c0 58.923-23.851 112.213-62.464 150.869s-91.947 62.464-150.869 62.464-112.213-23.851-150.869-62.464-62.464-91.947-62.464-150.869 23.851-112.213 62.464-150.869 91.947-62.464 150.869-62.464 112.213 23.851 150.869 62.464 62.464 91.947 62.464 150.869zM640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165z"></path>
              </svg>
              <span className="b0609-advertising-text sidemenu-typo-reg">
                Advertising
              </span>
              <svg viewBox="0 0 1024 1024" className="b0609-icon07">
                <path d="M225.835 414.165l256 256c16.683 16.683 43.691 16.683 60.331 0l256-256c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <Link to="/b0601" className="b0609-navlink05">
              <div className="b0609-ads-overview light-ssm-reg">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="light-ssm-icon-reg"
                >
                  <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="b0609-marketing-website sidemenu-typo-reg">
                  <span>Overview</span>
                  <br></br>
                </span>
              </div>
            </Link>
            <Link to="/b0602" className="b0609-navlink06">
              <div className="b0609-ads-ct light-ssm-reg">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="light-ssm-icon-reg"
                >
                  <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="b0609-marketing-ct sidemenu-typo-reg">
                  Calendar &amp; Task
                </span>
              </div>
            </Link>
            <Link to="/b0603" className="b0609-navlink07">
              <div className="b0609-ads-sem light-ssm-reg">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="b0609-marketing-icon-c light-ssm-icon-reg"
                >
                  <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="b0609-marketing-website1 sidemenu-typo-reg">
                  Search Engine Mktg
                </span>
              </div>
            </Link>
            <Link to="/b0604" className="b0609-navlink08">
              <div className="b0609-ads-smm light-ssm-reg">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="light-ssm-icon-reg"
                >
                  <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="b0609-marketing-website2 sidemenu-typo-reg">
                  Social Media Mktg
                </span>
              </div>
            </Link>
            <Link to="/b0605" className="b0609-navlink09">
              <div className="b0609-ads-display light-ssm-reg">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="light-ssm-icon-reg"
                >
                  <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="b0609-marketing-website3 sidemenu-typo-reg">
                  Display Mktg
                </span>
              </div>
            </Link>
            <Link to="/b0606" className="b0609-navlink10">
              <div className="b0609-ads-mail light-ssm-reg">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="light-ssm-icon-reg"
                >
                  <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="b0609-marketing-website4 sidemenu-typo-reg">
                  Direct Mail
                </span>
              </div>
            </Link>
            <Link to="/b0607" className="b0609-navlink11">
              <div className="b0609-ads-native light-ssm-reg">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="light-ssm-icon-reg"
                >
                  <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="b0609-marketing-website5 sidemenu-typo-reg">
                  Native Ads
                </span>
              </div>
            </Link>
            <Link to="/b0608l" className="b0609-navlink12">
              <div className="b0609-ads-influencer light-ssm-reg">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="light-ssm-icon-reg"
                >
                  <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="b0609-marketing-website6 sidemenu-typo-reg">
                  <span>Influencer Mktg</span>
                  <br></br>
                </span>
              </div>
            </Link>
            <div className="b0609-ads-others light-ssm-active light-ssm-reg">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="b0609-marketing-icon-b1 light-ssm-icon-reg"
              >
                <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="b0609-marketing-ct1 sm-typo-active">Others</span>
            </div>
            <Link to="/b0610" className="b0609-navlink13">
              <div className="b0609-ads-settings light-ssm-reg">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="light-ssm-icon-reg"
                >
                  <path d="M438.857 201.143c-171.429 0-310.857 139.429-310.857 310.857s139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857-139.429-310.857-310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="b0609-marketing-website7 sidemenu-typo-reg">
                  <span>Settings</span>
                  <br></br>
                </span>
              </div>
            </Link>
          </div>
          <Link to="/b07">
            <div className="b0609-sales-cont sidemenu-reg">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="sidemenu-icon-reg"
              >
                <path d="M121.143 438.857l356 380-171.429-380h-184.571zM585.143 880l199.429-441.143h-398.857zM307.429 365.714l116.571-219.429h-149.714l-164.571 219.429h197.714zM693.143 818.857l356-380h-184.571zM390.286 365.714h389.714l-116.571-219.429h-156.571zM862.857 365.714h197.714l-164.571-219.429h-149.714zM943.429 88l219.429 292.571c10.857 13.714 9.714 33.714-2.286 46.857l-548.571 585.143c-6.857 7.429-16.571 11.429-26.857 11.429s-20-4-26.857-11.429l-548.571-585.143c-12-13.143-13.143-33.143-2.286-46.857l219.429-292.571c6.857-9.714 17.714-14.857 29.143-14.857h658.286c11.429 0 22.286 5.143 29.143 14.857z"></path>
              </svg>
              <span className="b0609-sales-text sidemenu-typo-reg">Sales</span>
            </div>
          </Link>
          <Link to="/b08">
            <div className="b0609-project-cont sidemenu-reg">
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M1009.996 828.976l-301.544-301.544c-18.668-18.668-49.214-18.668-67.882 0l-22.626 22.626-184-184 302.056-302.058h-320l-142.058 142.058-14.060-14.058h-67.882v67.882l14.058 14.058-206.058 206.060 160 160 206.058-206.058 184 184-22.626 22.626c-18.668 18.668-18.668 49.214 0 67.882l301.544 301.544c18.668 18.668 49.214 18.668 67.882 0l113.136-113.136c18.67-18.666 18.67-49.214 0.002-67.882z"></path>
              </svg>
              <span className="b0609-project-text sidemenu-typo-reg">
                Project
              </span>
            </div>
          </Link>
          <Link to="/b09">
            <div className="b0609-cs-cont sidemenu-reg">
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M512 42q160 0 272 113t112 271v428q0 52-38 90t-90 38h-256v-86h298v-42h-170v-342h170v-86q0-124-87-211t-211-87-211 87-87 211v86h170v342h-128q-52 0-90-38t-38-90v-300q0-158 112-271t272-113z"></path>
              </svg>
              <span className="b0609-cs-text sidemenu-typo-reg">
                Customer Service
              </span>
            </div>
          </Link>
          <Link to="/b1001">
            <div className="b0609-hr-cont sidemenu-reg">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="sidemenu-icon-reg"
              >
                <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
              </svg>
              <span className="b0609-hr-text sidemenu-typo-reg">HR Mgmt</span>
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
              </svg>
            </div>
          </Link>
          <Link to="/b12">
            <div className="b0609-learn-help sidemenu-reg">
              <svg
                viewBox="0 0 585.1428571428571 1024"
                className="sidemenu-icon-reg"
              >
                <path d="M420.571 329.143c0 9.714-8.571 18.286-18.286 18.286s-18.286-8.571-18.286-18.286c0-39.429-61.143-54.857-91.429-54.857-9.714 0-18.286-8.571-18.286-18.286s8.571-18.286 18.286-18.286c53.143 0 128 28 128 91.429zM512 329.143c0-114.286-116-182.857-219.429-182.857s-219.429 68.571-219.429 182.857c0 36.571 14.857 74.857 38.857 102.857 10.857 12.571 23.429 24.571 34.857 37.714 40.571 48.571 74.857 105.714 80.571 170.286h130.286c5.714-64.571 40-121.714 80.571-170.286 11.429-13.143 24-25.143 34.857-37.714 24-28 38.857-66.286 38.857-102.857zM585.143 329.143c0 58.857-19.429 109.714-58.857 153.143s-91.429 104.571-96 165.714c16.571 9.714 26.857 28 26.857 46.857 0 13.714-5.143 26.857-14.286 36.571 9.143 9.714 14.286 22.857 14.286 36.571 0 18.857-9.714 36-25.714 46.286 4.571 8 7.429 17.714 7.429 26.857 0 37.143-29.143 54.857-62.286 54.857-14.857 33.143-48 54.857-84 54.857s-69.143-21.714-84-54.857c-33.143 0-62.286-17.714-62.286-54.857 0-9.143 2.857-18.857 7.429-26.857-16-10.286-25.714-27.429-25.714-46.286 0-13.714 5.143-26.857 14.286-36.571-9.143-9.714-14.286-22.857-14.286-36.571 0-18.857 10.286-37.143 26.857-46.857-4.571-61.143-56.571-122.286-96-165.714s-58.857-94.286-58.857-153.143c0-155.429 148-256 292.571-256s292.571 100.571 292.571 256z"></path>
              </svg>
              <span className="b0609-lh-text sidemenu-typo-reg">
                Learn &amp; Help
              </span>
            </div>
          </Link>
          <Link to="/b11">
            <div className="b0609-reports-cont sidemenu-reg">
              <svg viewBox="0 0 1024 1024" className="sidemenu-icon-reg">
                <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
                <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
              </svg>
              <span className="b0609-reports-text sidemenu-typo-reg">
                Reports
              </span>
            </div>
          </Link>
          <Link to="/b13">
            <div className="b0609-settings sidemenu-reg">
              <svg
                viewBox="0 0 961.6822857142856 1024"
                className="sidemenu-icon-reg"
              >
                <path d="M219.429 841.143c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM587.429 601.143l-389.714 389.714c-13.143 13.143-32 21.143-51.429 21.143s-38.286-8-52-21.143l-60.571-61.714c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-52l389.143-389.143c29.714 74.857 89.714 134.857 164.571 164.571zM949.714 352.571c0 18.857-6.857 42.286-13.143 60.571-36 101.714-133.714 172-241.714 172-141.143 0-256-114.857-256-256s114.857-256 256-256c41.714 0 96 12.571 130.857 36 5.714 4 9.143 9.143 9.143 16 0 6.286-4 12.571-9.143 16l-167.429 96.571v128l110.286 61.143c18.857-10.857 151.429-94.286 162.857-94.286s18.286 8.571 18.286 20z"></path>
              </svg>
              <span className="b0609-settings-text sidemenu-typo-reg">
                Settings
              </span>
            </div>
          </Link>
        </div>
        <div className="content-body-layout"></div>
      </div>
    </div>
  )
}

export default B0609
