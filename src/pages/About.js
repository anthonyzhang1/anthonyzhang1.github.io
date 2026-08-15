/** Displays the About page, which features details about Anthony! */
export default function About() {
  return (
    <div className='about-p page-content'>
      <h1 className='page-title'>About Anthony</h1>

      <h2 className='left-indent section-title'>Education</h2>
      <p className='left-indent section-body'>
        <b>San Francisco State University, California, USA</b> <br />
        Bachelor of Science, Computer Science <br />
        GPA: 4.00 / 4.00
      </p>

      <h2 className='left-indent section-title'>Skills</h2>
      <p className='left-indent section-body'>
        <b>Languages:</b> HTML, CSS, JavaScript, Java, Python, C, Swift, SQL <br />
        <b>Technologies:</b> Node.js, React, Express.js, UIKit, NGINX, Amazon EC2, Figma <br />
        <b>Operating Systems:</b> Windows, Linux, macOS, iOS
      </p>

      <h2 className='left-indent section-title'>Coursework</h2>
      <p className='left-indent section-body'>
        Software Engineering, Software Development, Web Development, Database Systems, iOS Application Development, <br />
        Data Structures and Algorithms, Operating Systems, Computer Networking, Security and Data Privacy, <br />
        Theory of Computation, Analysis of Algorithms <br />
      </p>

      <h2 className='left-indent section-title'>Personal</h2>
      <p className='left-indent section-body'>
        <b>Languages:</b> English (Native), Cantonese (Basic), Japanese (Basic) <br />
        <b>Interests:</b> Japanese, Chess, Shōgi, Mahjong
      </p>
    </div>
  );
}