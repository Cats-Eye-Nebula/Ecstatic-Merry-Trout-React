import React from 'react'

import { Helmet } from 'react-helmet'

import './a02.css'

const A02 = (props) => {
  return (
    <div className="a02-container">
      <Helmet>
        <title>A02 - Ecstatic Merry Trout</title>
        <meta property="og:title" content="A02 - Ecstatic Merry Trout" />
      </Helmet>
      <div className="a02-login-cover">
        <div className="a02-container1">
          <img
            alt="image"
            src="/Images/oqci8x0-1500h.jpg"
            className="a02-image"
          />
        </div>
        <div className="a02-image1">
          <div className="a02-deta">
            <div className="a02-heading-text">
              <span className="a02-text LightBasicTypographyH3Heading">
                <span>Adventure starts here 🚀</span>
              </span>
              <span className="a02-text02 LightBasicTypographyParagraph">
                <span>Make your app management easy and fun!</span>
              </span>
            </div>
            <div className="a02-form">
              <div className="a02-row">
                <div className="a02-form-with-label">
                  <div className="a02-label">
                    <span className="a02-text04 LightFormInput3)Labelsm">
                      <span>First Name</span>
                    </span>
                  </div>
                  <div className="a02-form1">
                    <div className="a02-frame-form">
                      <span className="a02-text06 LightFormInput8)PlaceholderDefault">
                        <span>John</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="a02-form-with-label1">
                  <div className="a02-label1">
                    <span className="a02-text08 LightFormInput3)Labelsm">
                      <span>Last Name</span>
                    </span>
                  </div>
                  <div className="a02-form2">
                    <div className="a02-frame-form1">
                      <span className="a02-text10 LightFormInput8)PlaceholderDefault">
                        <span>Doe</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="a02-row1">
                <div className="a02-form-with-label2">
                  <div className="a02-label2">
                    <span className="a02-text12 LightFormInput3)Labelsm">
                      Email Address
                    </span>
                  </div>
                  <div className="a02-form3">
                    <div className="a02-frame-form2">
                      <span className="a02-text13 LightFormInput8)PlaceholderDefault">
                        john@doe.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="a02-row2">
                <div className="a02-form-with-label3">
                  <div className="a02-label3">
                    <span className="a02-text14 LightFormInput3)Labelsm">
                      Password
                    </span>
                  </div>
                  <div className="a02-form4">
                    <div className="a02-frame-form3">
                      <span className="a02-text15 LightFormInput8)PlaceholderDefault">
                        *******
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="a02-form-checkbox">
              <button className="a02-frame-form-checkbox-button"></button>
              <span className="a02-text16 LightBasicTypographyParagraph">
                <span className="a02-text17">
                  I agree to
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>privacy policy &amp; terms</span>
              </span>
            </div>
            <button className="a02-button button">
              <button className="a02-button1">
                <span className="a02-text19 LightButton2)ButtonDefault">
                  <span>Sign up</span>
                </span>
              </button>
            </button>
            <span className="a02-text21 LightBasicTypographyParagraph">
              <span className="a02-text22">
                Already have an account?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Sign in instead</span>
            </span>
            <div className="a02-divider">
              <img
                alt="Divider3934"
                src="/external/divider3934-1zwa.svg"
                className="a02-divider1"
              />
              <span className="a02-text24 LightBasicTypographyParagraphSmall">
                <span>or</span>
              </span>
              <img
                alt="Divider3934"
                src="/external/divider3934-gpq.svg"
                className="a02-divider2"
              />
            </div>
            <div className="a02-action">
              <div className="a02-facebook">
                <img
                  alt="Logo3934"
                  src="/external/logo3934-da1.svg"
                  className="a02-logo"
                />
              </div>
              <div className="a02-twitter">
                <img
                  alt="Logo3934"
                  src="/external/logo3934-1fsh.svg"
                  className="a02-logo1"
                />
              </div>
              <div className="a02-google">
                <img
                  alt="Vector3934"
                  src="/external/vector3934-t4e6.svg"
                  className="a02-vector"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default A02
