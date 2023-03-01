/* This file handles the Home page, which features a brief intro and some featured works. */

export default function Home() {
  return (
    <div className='home-p page-content'>
      <h1 className='page-title'>Anthony Zhang</h1>
      <p>
        I am a Computer Science graduate, and this website contains a number of projects I have worked on. <br />
        Learn more about me through the links in the navigation bar above!
      </p>

      {/* TODO: Add component with image of work, link, title, description, etc. */}
      <h3 className='featured-works'>Featured Works</h3>
      <p>To come... 🙏</p>
    </div>
  );
}