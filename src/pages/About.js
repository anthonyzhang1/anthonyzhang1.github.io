/** Displays the About page, which features details about Anthony! */
export default function About() {
  return (
    <div className='about-p page-content'>
      <h1 className='page-title'>About Anthony 🥰</h1>

      {/* Education Section */}
      <h2 className='left-indent section-title'>Education</h2>
      <p className='left-indent section-body'>
        <b>San Francisco State University, California, USA</b> <br />
        <b>Graduated December 2022</b> <br />
        Bachelor of Science, Computer Science <br />
        Honors: <i>summa cum laude</i> (GPA: 4.00)
      </p>

      {/* Technologies Section */}
      <h2 className='left-indent section-title'>Technologies</h2>
      <p className='left-indent section-body'>
        <b>Web Development:</b> HTML, CSS, JavaScript, Node.js, React, Express.js, Handlebars.js, Figma <br />
        <b>Programming Languages:</b> JavaScript, Java, Python, Swift, C++, C, R <br />
        <b>Databases:</b> SQL (MySQL), MongoDB <br />
        <b>Operating Systems:</b> Windows, macOS, Linux (Ubuntu) <br />
        <b>Miscellaneous:</b> GitHub, Amazon EC2, NGINX
      </p>

      {/* Skills/Coursework Section */}
      <h2 className='left-indent section-title'>Skills/Coursework</h2>
      <p className='left-indent section-body'>
        Software Engineering, Software Development, Web Development, Database Systems, iOS Application Development, <br />
        Operating Systems, Computer Networking, Theory of Computation, Data Structures and Algorithms, <br />
        Linear Algebra, Probability and Statistics
      </p>
    </div>
  );
}