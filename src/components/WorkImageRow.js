import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { WORK_ADDITIONAL_IMAGE_COL_WIDTH } from "./Constants.js";

/**
 * A row with 2 columns. The first column is an image, the second the image's caption.
 * The image can be clicked on to open itself in a new tab.
 * 
 * @prop {string} altText The image's alt text.
 * @prop {string} caption The image's caption.
 * @prop {string} imagePath The path to the image of the work.
 */
export default function WorkImageRow(props) {
  const { altText, caption, imagePath } = props;

  return (
    <Row className='work-image-row-c'>
      {/* The column with the image in it. The width of the column is dependent on the `md` value. */}
      <Col md={WORK_ADDITIONAL_IMAGE_COL_WIDTH}>
        {/* Clicking on the image opens itself in a new tab. */}
        <Link to={imagePath} target="_blank" rel="noopener noreferrer">
          <img src={imagePath} alt={altText} />
        </Link>
      </Col>

      {/* The column with the image caption in it. */}
      <Col className='caption-col'>
        <p className='caption'>{caption}</p>
      </Col>
    </Row>
  );
}