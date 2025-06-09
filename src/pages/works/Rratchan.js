import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

/** Displays the rratchan work page, which contains a cover image, links, a description of the application,
 *  and multiple images with captions. */
export default function Rratchan() {
  return (
    <div className='rratchan-p work-p page-content'>
      <h1 className='page-title'>rratchan</h1>
      <img className='cover' src='/media/works/rratchan/cover.png' alt="rratchan" />

      {/* GitHub repository link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/rratchan' target="_blank" rel="noopener noreferrer">
          https://github.com/anthonyzhang1/rratchan
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        rratchan is an imageboard similar to 4channel. <br />
        You can register for an account, browse a board's catalog, view threads, anonymously start threads,
        anonymously reply to threads, bookmark threads, view users' pages, and more.
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        rratchan uses MySQL for its database, Express for its back end, and React for its front end. <br />
        rratchan was created for my university's Database Systems course in Spring 2022.
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>

      {/* Home Page image */}
      <CaptionedImage
        altText='Home Page'
        caption="The home page, which shows all the boards (topics). Clicking on a board shows you that board's threads."
        imagePath='/media/works/rratchan/home.png'
      />

      {/* Create Board Page image */}
      <CaptionedImage
        altText='Create Board Page'
        caption="Moderators may create new boards."
        imagePath='/media/works/rratchan/create-board.png'
      />

      {/* Board Catalog image */}
      <CaptionedImage
        altText='Board catalog'
        caption={
          `This is the Virtual Youtubers board. You can see the board's description and all of its threads here.
          Clicking on a thread's image takes you to that thread's page, where you can see all of its replies.`
        }
        imagePath='/media/works/rratchan/catalog.png'
      />

      {/* Create Thread image */}
      <CaptionedImage
        altText='Create Thread form'
        caption={
          `Anyone can create a thread in a board by filling out this form. An account is not required -- you can post anonymously.
          You can enter your credentials if you wish to create a thread under your username.`
        }
        imagePath='/media/works/rratchan/create-thread.png'
      />

      {/* View Thread image */}
      <CaptionedImage
        altText='View Thread'
        caption={
          `When viewing a thread, you can see the thread's image, its body, and all of its replies.
          Just like with threads, replies can be posted anonymously.`
        }
        imagePath='/media/works/rratchan/view-thread.png'
      />

      {/* Profile Page image */}
      <CaptionedImage
        altText='Profile Page'
        caption={
          `This is a user's profile. Everyone's profile is public, and it shows the user's recently started threads, \
          recently posted replies, and their bookmarked threads.`
        }
        imagePath='/media/works/rratchan/profile.png'
      />

      <p className='page-last-updated'>Page Last Updated: March 04, 2023</p>
    </div>
  );
}