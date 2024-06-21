import React from 'react'

import { Helmet } from 'react-helmet'

import './a01.css'

const A01 = (props) => {
  return (
    <div className="a01-container">
      <Helmet>
        <title>A01 - Ecstatic Merry Trout</title>
        <meta property="og:title" content="A01 - Ecstatic Merry Trout" />
      </Helmet>
      <div className="a01-login-cover">
        <div className="a01-container1">
          <img
            alt="image"
            src="/Images/oqci8x0-1500h.jpg"
            className="a01-image"
          />
        </div>
        <div className="a01-image1">
          <div className="a01-deta">
            <div className="a01-heading-text">
              <span className="a01-text LightBasicTypographyH3Heading">
                Welcome to Freedom Media! 👋
              </span>
              <span className="a01-text01 LightBasicTypographyParagraph">
                Please sign in to your account and start the adventure
              </span>
            </div>
            <div className="a01-form">
              <div className="a01-row">
                <div className="a01-form-with-label">
                  <div className="a01-label">
                    <span className="a01-text02 LightFormInput3)Labelsm">
                      <span>Email or Username</span>
                    </span>
                  </div>
                  <div className="a01-form1">
                    <form className="a01-form2"></form>
                  </div>
                </div>
              </div>
              <div className="a01-row1">
                <div className="a01-form-with-label1">
                  <div className="a01-label1">
                    <span className="a01-text04 LightFormInput3)Labelsm">
                      <span>Password</span>
                    </span>
                    <span className="a01-text06 LightFormInput3)Labelsm">
                      <span>Forgot Password?</span>
                    </span>
                  </div>
                  <div className="a01-form3">
                    <div className="a01-frame-form">
                      <span className="a01-text08 LightFormInput8)PlaceholderDefault">
                        <span>············</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="a01-form-checkbox">
                <button className="a01-frame-form-checkbox-button"></button>
                <span className="a01-text10 LightBasicTypographyParagraph">
                  <span>Remember Me</span>
                </span>
              </div>
              <button className="a01-button">
                <button className="a01-button1">
                  <span className="a01-text12 LightButton2)ButtonDefault">
                    <span>Sign in</span>
                  </span>
                </button>
              </button>
              <span className="a01-text14 LightBasicTypographyParagraph">
                <span className="a01-text15">
                  New on our platform?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Create an account</span>
              </span>
            </div>
            <div className="a01-divider">
              <img
                alt="Divider3934"
                src="/external/divider3934-1zwa.svg"
                className="a01-divider1"
              />
              <span className="a01-text17 LightBasicTypographyParagraphSmall">
                <span>or</span>
              </span>
              <img
                alt="Divider3934"
                src="/external/divider3934-gpq.svg"
                className="a01-divider2"
              />
            </div>
            <div className="a01-action">
              <div className="a01-facebook">
                <img
                  alt="Logo3934"
                  src="/external/logo3934-da1.svg"
                  className="a01-logo"
                />
              </div>
              <div className="a01-twitter">
                <img
                  alt="Logo3934"
                  src="/external/logo3934-1fsh.svg"
                  className="a01-logo1"
                />
              </div>
              <div className="a01-google">
                <img
                  alt="Vector3934"
                  src="/external/vector3934-t4e6.svg"
                  className="a01-vector"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default A01
