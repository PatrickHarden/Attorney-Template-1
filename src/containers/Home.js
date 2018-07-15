import React from 'react'
import { withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from "react-helmet";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
//
import Map from './Maps';

export default withSiteData(({ websiteData }) => (
  <article>
    <Helmet>
      <script defer src="/fontawesome/js/all.js"></script>
    </Helmet>
    <section id="home" style={{backgroundImage: "url(" + websiteData.welcome.img + ")"}}>
      <Container>
        <Row>
          <Col lg="7">
            <h1>{ReactHtmlParser(websiteData.welcome.content)}</h1>
            <a href="#contact" class="btn btn-red">Contact Us <i class="fas fa-comment-alt-edit"></i></a> <a href="#practice" class="btn btn-white">Our Services <i class="fas fa-chevron-circle-right"></i></a>
            {console.log(websiteData)}
          </Col>
        </Row>
      </Container>
    </section>
    <section id="firm">
      <Container>
        <Row>
          <Col sm="12">
            <div className="overview">
              <i className="fas fa-shield-check"></i>
              {ReactHtmlParser(websiteData.about)}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="practice">
      <Container>
        <Row>
        {websiteData.practice.map(practice => (
            (practice.check == "1") ? (
              <Col sm="4">
              <div className="single-area">
                <h3>{practice.title}</h3>
              </div>
            </Col>
            ) : <div></div>
          ))}
        </Row>
      </Container>
    </section>
    <section id="action">
      <Container>
        <Row>
          <Col sm="12">
            {ReactHtmlParser(websiteData.action)}
            <a href="#contact" class="btn btn-hollow">Send A Message <i class="fas fa-comment-alt-edit"></i></a>
            <a href="tel:PHONE NUMBER" class="btn btn-white"><i class="fas fa-phone"></i> PHONE NUMBER</a>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="staff">
      <Container>
        <Row>
          {websiteData.staff.map(staff => (
            (staff.check == "1") ? (
              <Col sm="6">
                <div className="single-staff">
                  <div className="staff-photo"></div>
                  <h2>{staff.name}</h2>
                  <h4>{staff.title}</h4>
                  <p>{staff.bio}</p>
                  <a href={"mailto:" + staff.email}>{staff.email}</a><a href={"tel:" + staff.phone}>{staff.phone}</a>
                </div>
              </Col>
            ) : <div></div>
          ))}
        </Row>
      </Container>
    </section>
    <section id="awards">
      <Container>
        <Row>
          <Col sm="12">
            {ReactHtmlParser(websiteData.awards)}
          </Col>
        </Row>
      </Container>
    </section>
    <Map lat={ websiteData.general.lat } lng={ websiteData.general.long } />
    <section id="contact">
      <Container>
        <Row>
          <Col sm="6">
            {ReactHtmlParser(websiteData.contact.content)}
            <div className="social">
              {websiteData.social.facebook && <a href={websiteData.social.facebook}><i className="fab fa-facebook-square"></i></a>}
              {websiteData.social.twitter && <a href={websiteData.social.twitter}><i className="fab fa-twitter-square"></i></a>}
              {websiteData.social.linkedin && <a href={websiteData.social.linkedin}><i className="fab fa-linkedin"></i></a>}
              {websiteData.social.instagram && <a href={websiteData.social.instagram}><i className="fab fa-instagram"></i></a>}
              {websiteData.social.google && <a href={websiteData.social.google}><i className="fab fa-google-plus-square"></i></a>}
              {websiteData.social.pinterest && <a href={websiteData.social.pinterest}><i className="fab fa-pinterest-square"></i></a>}
              {websiteData.social.youtube && <a href={websiteData.social.youtube}><i className="fab fa-youtube-square"></i></a>}
              {websiteData.social.vimeo && <a href={websiteData.social.vimeo}><i className="fab fa-vimeo-square"></i></a>}          
            </div>
            <a href="tel:PHONE NUMBER" className="btn btn-red"><i className="fas fa-phone"></i> PHONE NUMBER</a>
            <div className="address">
              {websiteData.general.address && websiteData.general.address}<br />
              {websiteData.general.city && websiteData.general.city}, {websiteData.general.state && websiteData.general.state} {websiteData.general.zip && websiteData.general.zip}
            </div>
          </Col>
          <Col sm="6">
            <form>
              <Row>
                <Col xs="12">{websiteData.contact.name == true && <input type="text" placeholder="Full Name" />}</Col>
                <Col xs="6">{websiteData.contact.email == true && <input type="email" placeholder="Email" />}</Col>
                <Col xs="6">{websiteData.contact.phone == true && <input type="text" placeholder="Phone" />}</Col>
                <Col xs="6">{websiteData.contact.preference == true && <div><input type="radio" name="pref" value="email" /> Please Contact Me By Email</div>}</Col>
                <Col xs="6">{websiteData.contact.preference == true && <div><input type="radio" name="pref" value="phone" /> Please Contact Me By Phone</div>}</Col>
                <Col xs="12">{websiteData.contact.message == true && <textarea placeholder="How Can We Help You?"></textarea>}</Col>
                <Col xs="12"><input type="submit" className="btn btn-red" value="Submit" /></Col>
              </Row>
            </form>
            <div className="disclaimer">{websiteData.contact.terms}</div>
          </Col>
        </Row>
      </Container>
    </section>
  </article>
))
