import { Link } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import { WORK_ADDITIONAL_IMAGE_COL_WIDTH } from '../../components/Constants.js';

/** Displays the Gatormmunity page, with various images and captions. */
export default function Gatormmunity() {
  return (
    <div className='gatormmunity-p work-p page-content'>
      <h1 className='page-title'>Gatormmunity</h1>
      <img className='cover-image' src='/images/works/gatormmunity/card-image.png' alt="Gatormmunity" />

      {/* Live website link */}
      <h3 className='url'>
        Gatormmunity's URL:&nbsp;<wbr />
        <Link className='link' to='http://54.241.101.69/' target="_blank" rel="noopener noreferrer">
          http://54.241.101.69/
        </Link>
      </h3>

      {/* GitHub repository link */}
      <h3 className='url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='link' to='https://github.com/anthonyzhang1/Gatormmunity' target="_blank" rel="noopener noreferrer">
          https://github.com/anthonyzhang1/Gatormmunity
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        Gatormmunity is a social networking site and marketplace for San Francisco State University! <br /><br />

        Among other things, Gatormmunity features a forum for discussion, a marketplace to buy and sell items,
        groups that users can create and invite other users to, a live chat, and direct messaging.
        Furthermore, groups have their own private group chat and a private group forum. <br />
        New users must have their identity and account verified by a moderator before they can log in,
        so Gatormmunity is safer than anonymous marketplace websites like Craigslist. <br /><br />

        I encourage you to explore the website by logging in with this account: <br />
        SFSU ID Number: <strong>123123123</strong> <br />
        Password: <strong>github</strong>
      </p>

      {/* Additional Information and Reflection */}
      <h2 className='section-title'>Additional Information and Reflection</h2>
      <p className='section-body'>
        Gatormmunity uses AWS as its server host, Ubuntu for the server, NGINX as its web server, and MySQL for the database.
        Express is used for its back end, and React for its front end. <br /><br />

        Gatormmunity was created for my university's Software Engineering course in Fall 2022,
        where I worked in a team with 4 other students. I was the team lead. <br />
        I worked on both the back and front end, and learned a lot about Software Engineering and teamwork! <br />
        I learned how to write reports, plan out a project with a team, how to work in a team, how to manage deadlines,
        and of course, I gained a significant amount of experience with AWS, NGINX, MySQL, Express, React, and GitHub. <br /><br />

        Furthermore, in our Software Engineering class, there were 7 teams, each with their own project --
        Gatormmunity was deemed the best project in the class by the instructor! <br />
        Gatormmunity was the largest project I have ever worked on (so far) and I am proud of what our team accomplished.
      </p>

      {/* Additional Images */}
      <h2 className='section-title'>Additional Images</h2>

      {/* TODO: Refactor image rows by using a component. */}
      {/* Home Page row */}
      <Row className='left-align'>
        <Col xs={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
          <Link className='link' to='/images/works/gatormmunity/home.png' target="_blank" rel="noopener noreferrer">
            <img className='additional-image' src='/images/works/gatormmunity/home.png' alt="Home page" />
          </Link>
        </Col>
        <Col className='caption-col'>
          <p className='caption'>This is the Home page. It shows Gatormmunity's slogan and its features to entice new users.</p>
        </Col>
      </Row>

      {/* About Us Page row */}
      <Row className='left-align'>
        <Col xs={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
          <Link className='link' to='/images/works/gatormmunity/about-us.png' target="_blank" rel="noopener noreferrer">
            <img className='additional-image' src='/images/works/gatormmunity/about-us.png' alt="The team!" />
          </Link>
        </Col>
        <Col className='caption-col'>
          <p className='caption'>This is the About Us page. It shows Gatormmunity's mission and the team that developed it.</p>
        </Col>
      </Row>

      {/* Gatormmunity Forums Page row */}
      <Row className='left-align'>
        <Col xs={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
          <Link className='link' to='/images/works/gatormmunity/forums.png' target="_blank" rel="noopener noreferrer">
            <img className='additional-image' src='/images/works/gatormmunity/forums.png' alt="Gatormmunity Forums" />
          </Link>
        </Col>
        <Col className='caption-col'>
          <p className='caption'>
            This is the Gatormmunity Forums page. It shows all the threads that match the filters provided.
          </p>
        </Col>
      </Row>

      {/* Forum Thread row */}
      <Row className='left-align'>
        <Col xs={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
          <Link className='link' to='/images/works/gatormmunity/thread.png' target="_blank" rel="noopener noreferrer">
            <img className='additional-image' src='/images/works/gatormmunity/thread.png' alt="A forum thread" />
          </Link>
        </Col>
        <Col className='caption-col'>
          <p className='caption'>
            This is the page for a particular thread. Users may discuss things related to the thread's topic here.
          </p>
        </Col>
      </Row>

      {/* Marketplace Page row */}
      <Row className='left-align'>
        <Col xs={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
          <Link className='link' to='/images/works/gatormmunity/marketplace.png' target="_blank" rel="noopener noreferrer">
            <img className='additional-image' src='/images/works/gatormmunity/marketplace.png' alt="The marketplace" />
          </Link>
        </Col>
        <Col className='caption-col'>
          <p className='caption'>
            This is the Marketplace page. It shows all the the listings that match the filters provided.
          </p>
        </Col>
      </Row>

      {/* Marketplace Listing Page row */}
      <Row className='image-row left-align'>
        <Col xs={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
          <Link className='link' to='/images/works/gatormmunity/listing.png' target="_blank" rel="noopener noreferrer">
            <img className='additional-image' src='/images/works/gatormmunity/listing.png' alt="A marketplace listing" />
          </Link>
        </Col>
        <Col className='caption-col'>
          <p className='caption'>
            This is the page for a specific marketplace listing. It shows the listing's details.
          </p>
        </Col>
      </Row>

      {/* Group Home Page row */}
      <Row className='image-row left-align'>
        <Col xs={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
          <Link className='link' to='/images/works/gatormmunity/group.png' target="_blank" rel="noopener noreferrer">
            <img className='additional-image' src='/images/works/gatormmunity/group.png' alt="Pekora Fan Club group" />
          </Link>
        </Col>
        <Col className='caption-col'>
          <p className='caption'>
            This is the home page for a group.
            Here, the administrator of a group can post an announcement for group members to see. <br />
            Also, the group forums, group members, and inviting to group features are accessible via the buttons on the left.
          </p>
        </Col>
      </Row>

      {/* Gator Chat Page row */}
      <Row className='image-row left-align'>
        <Col xs={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
          <Link className='link' to='/images/works/gatormmunity/gator-chat.png' target="_blank" rel="noopener noreferrer">
            <img className='additional-image' src='/images/works/gatormmunity/gator-chat.png' alt="Gator Chat" />
          </Link>
        </Col>
        <Col className='caption-col'>
          <p className='caption'>
            This is the Gator Chat page. Users may chat in real time with other users here.
            The group chat page looks identical to this.
          </p>
        </Col>
      </Row>

      {/* Search Listings Page row */}
      <Row className='image-row left-align'>
        <Col xs={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
          <Link className='link' to='/images/works/gatormmunity/search-listings.png' target="_blank" rel="noopener noreferrer">
            <img className='additional-image' src='/images/works/gatormmunity/search-listings.png' alt="Searching for listings" />
          </Link>
        </Col>
        <Col className='caption-col'>
          <p className='caption'>
            This is the search page. Users that are logged in may search for specific users, listings, or threads here.
            Users may also apply filters to their search results.
          </p>
        </Col>
      </Row>

      <p className='last-updated'>Last Updated: March 03, 2023</p>
    </div>
  );
}