import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

/** Displays the Anthony Zhang's Website work page, which contains a cover image, links,
 *  a description of the application, and multiple images with captions. */
export default function AnthonyZhangWebsite() {
  return (
    <div className='anthony-zhang-website-p work-p page-content'>
      <h1 className='page-title'>Anthony Zhang's Website</h1>
      <img className='cover' src='/images/works/anthony-zhang-website/cover.png' alt="Anthony Zhang's Website" />

      {/* Live website link */}
      <h3 className='large-url'>
        Website URL:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://anthonyzhang1.github.io/' target="_blank" rel="noopener noreferrer">
          https://anthonyzhang1.github.io/
        </Link>
      </h3>

      {/* GitHub repository link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/anthonyzhang1.github.io'
          target="_blank" rel="noopener noreferrer"
        >
          https://github.com/anthonyzhang1/anthonyzhang1.github.io
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        Anthony Zhang's Website is where I present some information about myself and my works.
        The website is live, accessible via the link above! <br />
        Each work has their own GitHub page where the technical details and the source code are kept --
        the website is for providing background information and images of the work.
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        Anthony Zhang's Website uses React for the website and GitHub Pages to host the website. <br />
        The website was made in March 2023. <br /><br />

        I made Anthony Zhang's Website because I felt it made it easier for others to learn about my works. <br />
        I can organize the work's information and photos more easily on the website than on GitHub,
        and my works are distinguishable from each other since they have cards with images.
        On GitHub, every work had merely a title and a description. <br /><br />

        Currently, the work's cover image depicts Usada Pekora from Hololive.
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>

      {/* Home Page image */}
      <CaptionedImage
        altText='Home Page'
        caption="This is the home page. I show my featured works here."
        imagePath='/images/works/anthony-zhang-website/home.png'
      />

      {/* About Page image */}
      <CaptionedImage
        altText='About Page'
        caption="The about page gives a brief overview of my education and technologies."
        imagePath='/images/works/anthony-zhang-website/about.png'
      />

      {/* Works Page image */}
      <CaptionedImage
        altText='Works Page'
        caption="The works page is where I show all of my publicly available works."
        imagePath='/images/works/anthony-zhang-website/works-page.png'
      />

      {/* Work Page image */}
      <CaptionedImage
        altText='Work Page'
        caption="Each work has its own page containing links, an overview of the work, and some images of the work."
        imagePath='/images/works/anthony-zhang-website/work.png'
      />

      <p className='page-last-updated'>Page Last Updated: March 14, 2023</p>
    </div>
  );
}