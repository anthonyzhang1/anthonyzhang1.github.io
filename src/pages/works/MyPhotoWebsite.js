import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

/** Displays the My Photo Website work page, which contains a cover image, links, a description of the application,
 *  and multiple images with captions. */
export default function MyPhotoWebsite() {
  return (
    <div className='my-photo-website-p work-p page-content'>
      <h1 className='page-title'>My Photo Website</h1>
      <img className='cover' src='/images/works/my-photo-website/cover.png' alt="cover" />

      {/* GitHub repository link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/My-Photo-Website'
          target="_blank" rel="noopener noreferrer"
        >
          https://github.com/anthonyzhang1/My-Photo-Website
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        My Photo Website is a photo sharing website similar to Imgur, but with fewer features. <br />
        You can register for an account, view other users' photos, upload your own photos, and comment on photos.
        You may also search for photos with a matching title or description.
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        My Photo Website uses MySQL, Express, and Handlebars.
        MySQL is for the database, Express is for the back end, and Handlebars is for the front end. <br />
        My Photo Website was created for my university's Web Development course in Fall 2021. <br /><br />

        I love green and purple.
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>

      {/* Home Page image */}
      <CaptionedImage
        altText='Home Page'
        caption={
          `The home page. Here, users can see images uploaded by others.
          The image thumbnails have reduced quality in order to speed up load times for those with slow connections.`
        }
        imagePath='/images/works/my-photo-website/home.png'
      />

      {/* Registration Page image */}
      <CaptionedImage
        altText='Registration Page'
        caption="The registration page. Passwords are hashed before being inserted into the database!"
        imagePath='/images/works/my-photo-website/registration.png'
      />

      {/* Post Image Page image */}
      <CaptionedImage
        altText='Post Page'
        caption="Logged-in users can fill out this form in the Post Image page to upload images."
        imagePath='/images/works/my-photo-website/post-image.png'
      />

      {/* Search results image */}
      <CaptionedImage
        altText='Search results'
        caption="Users can search for images that contain the provided search term."
        imagePath='/images/works/my-photo-website/search.png'
      />

      {/* View Post Page image */}
      <CaptionedImage
        altText='View Post Page'
        caption={
          `Users can click on an image post to see a larger version of the image. \
          Also visible are the post's details and any comments left by others.
          Logged-in users can add their own comments.`
        }
        imagePath='/images/works/my-photo-website/view-post.png'
      />

      <p className='page-last-updated'>Page Last Updated: March 04, 2023</p>
    </div>
  );
}