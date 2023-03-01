/* This file handles the About page, which features details about Anthony! */

export default function About() {
  return (
    <div className='about-p page-content'>
      <h1 className='page-title'>About Anthony 🙏</h1>

      <h2 className='left-indent section-title'>Education</h2>
      <p className='left-indent section-body'>
        <strong>San Francisco State University, California, USA</strong> <br />
        <strong>Graduated December 2022</strong> <br />
        Bachelor of Science, Computer Science <br />
        Honours: Summa Cum Laude (GPA: 4.00)
      </p>

      <h2 className='left-indent section-title'>Technologies</h2>
      <p className='left-indent section-body'>
        <strong>Web Development:</strong> HTML, CSS, JavaScript, Node.js, React, Express.js, Amazon EC2, NGINX, Figma <br />
        <strong>Programming Languages:</strong> JavaScript, Java, Python, Swift, C++, C, R <br />
        <strong>Databases:</strong> SQL (MySQL), MongoDB <br />
        <strong>Operating Systems:</strong> Windows, macOS, Linux (Ubuntu) <br />
        <strong>Miscellaneous:</strong> GitHub
      </p>

      <h2 className='left-indent section-title'>Skills/Coursework</h2>
      <p className='left-indent section-body'>
        Software Engineering (front-end and back-end), Web Development, Database Systems, iOS Application Development, <br />
        Operating Systems, Computer Networks, Data Structures and Algorithms, Probability and Statistics
      </p>
    </div>
  );
}