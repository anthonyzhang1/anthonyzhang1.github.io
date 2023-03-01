/* This file handles the Page Not Found page, which tells the user the URL is invalid. */

export default function PageNotFound() {
  return (
    <div className='page-not-found-p page-content'>
      <h1 className='page-title'>Page Not Found</h1>
      <p>Sorry, this page does not exist. Use the links in the navigation bar above to leave this page!</p>
    </div>
  );
}