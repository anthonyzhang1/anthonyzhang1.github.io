import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

/** Displays the Gatormmunity work page, which contains a cover image, links, a description of the application,
 *  and multiple images with captions. */
export default function Gatormmunity() {
  return (
    <div className='gatormmunity-p work-p page-content'>
      <h1 className='page-title'>Gatormmunity</h1>
      <img className='cover' src='/images/works/gatormmunity/cover.png' alt="Gatormmunity" />

      {/* GitHub repository link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/Gatormmunity' target="_blank" rel="noopener noreferrer">
          https://github.com/anthonyzhang1/Gatormmunity
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        Gatormmunity is a social networking website and marketplace for San Francisco State University. <br /><br />

        Among other things, Gatormmunity features a forum for discussion, a marketplace to buy and sell items,
        groups that users can create and invite other users to, a live chat, and direct messaging.
        Furthermore, groups have their own private group chat and a private group forum. <br />
        New users must have their identity and account verified by a moderator before they can log in,
        so Gatormmunity is safer than anonymous marketplace websites like Craigslist.
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        Gatormmunity uses AWS as its server host, Ubuntu for the server, NGINX as its web server, and MySQL for the database.
        Express.js is used for its back end, and React for its front end. <br /><br />

        Gatormmunity was created for my university's Software Engineering course in Fall 2022,
        where I worked in a team with 4 other students. I was the team lead. <br />
        I worked on both the back and front end, and learned a lot about software engineering and teamwork! <br />
        I learned how to write reports, how to work in a team, how to assign tasks to team members,
        and I gained experience with MySQL, Express.js, React, and GitHub.
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>

      {/* Home Page image */}
      <CaptionedImage
        altText='The Home Page'
        caption="This is the Home page. It shows Gatormmunity's slogan and its features to entice new users."
        imagePath='/images/works/gatormmunity/home.png'
      />

      {/* About Us Page image */}
      <CaptionedImage
        altText='The About Us page'
        caption="This is the About Us page. It shows Gatormmunity's mission and the team that developed it."
        imagePath='/images/works/gatormmunity/about-us.png'
      />

      {/* Gatormmunity Forums Page image */}
      <CaptionedImage
        altText='The Gatormmunity Forums page'
        caption="This is the Gatormmunity Forums page. It shows all the threads that match the filters provided."
        imagePath='/images/works/gatormmunity/forums.png'
      />

      {/* Forum Thread Page image */}
      <CaptionedImage
        altText='A forum thread'
        caption="This is the page for a particular thread. Users may discuss things related to the thread's topic here."
        imagePath='/images/works/gatormmunity/thread.png'
      />

      {/* Marketplace Page image */}
      <CaptionedImage
        altText='The Gatormmunity Marketplace page'
        caption="This is the Marketplace page. It shows all the the listings that match the filters provided."
        imagePath='/images/works/gatormmunity/marketplace.png'
      />

      {/* Marketplace Listing Page image */}
      <CaptionedImage
        altText='A marketplace listing'
        caption="This is the page for a specific marketplace listing. It shows the listing's details."
        imagePath='/images/works/gatormmunity/listing.png'
      />

      {/* Group Home Page image */}
      <CaptionedImage
        altText="A group's home page"
        caption={
          `This is the home page for a group. \
          Here, the administrator of a group can post an announcement for group members to see.
          Also, the group forums, group members, and inviting to group features are accessible via the buttons on the left.`
        }
        imagePath='/images/works/gatormmunity/group.png'
      />

      {/* Gator Chat Page image */}
      <CaptionedImage
        altText="The Gator Chat page"
        caption={
          `This is the Gator Chat page. Users may chat in real time with other users here.
          The group chat page and direct message/inbox page looks identical to this.`
        }
        imagePath='/images/works/gatormmunity/gator-chat.png'
      />

      {/* Search Page image */}
      <CaptionedImage
        altText="The Search page"
        caption={
          `This is the search page. Users that are logged in may search for specific users, listings, or threads here.
          Users may also apply filters to their search results.`
        }
        imagePath='/images/works/gatormmunity/search.png'
      />

      <p className='page-last-updated'>Page Last Updated: July 22, 2023</p>
    </div>
  );
}