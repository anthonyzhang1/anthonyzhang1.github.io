import { Link } from 'react-router-dom';

/**
 * An image with a caption. The image can be clicked on to open itself in a new tab.
 * By default, the caption is beneath the image.
 * 
 * @prop {string} altText The image's alt text.
 * @prop {string} caption The image's caption.
 * @prop {string} imagePath The path to the image of the work.
 */
export default function CaptionedImage(props) {
  const { altText, caption, imagePath } = props;

  return (
    <div className='captioned-image-c'>
      {/* Clicking on the image opens itself in a new tab. */}
      <Link className='image-link' to={imagePath} target="_blank" rel="noopener noreferrer">
        <img src={imagePath} alt={altText} />
      </Link>

      <p className='caption'>{caption}</p>
    </div>
  );
}