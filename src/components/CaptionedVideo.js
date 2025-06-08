/**
* A video with a caption below it.
* 
* @param {object} props The wrapping opject.
* @param {string} props.caption The video's caption.
* @param {string} props.path The video's source path.
* @returns {JSX.Element} The captioned video.
*/
export default function CaptionedVideo({caption, path}) {
  return (
    <div className='captioned-video-c media'>
      <video controls src={path} />
      <p className='caption'>{caption}</p>
    </div>
  );
}