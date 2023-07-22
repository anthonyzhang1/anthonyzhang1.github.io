/** Displays the About page, which features details about Anthony! */
export default function About() {
  return (
    <div className='about-p page-content'>
      <h1 className='page-title'>About Anthony 🥰</h1>

      {/* Education Section */}
      <h2 className='left-indent section-title'>Education</h2>
      <p className='left-indent section-body'>
        <b>San Francisco State University, California, USA</b> <br />
        Bachelor of Science, Computer Science <br />
        Honors: <i>summa cum laude</i> (GPA: 4.00 / 4.00)
      </p>

      {/* Languages and Technologies Section */}
      <h2 className='left-indent section-title'>Languages and Technologies</h2>
      <p className='left-indent section-body'>
        <b>Languages:</b> HTML, CSS, JavaScript, TypeScript, Java, Python, Swift, C, C++, Haskell, R, SQL, MongoDB <br />
        <b>Technologies:</b> Node.js, React, Express.js, SwiftUI, UIKit, Amazon EC2, NGINX, Figma, Git <br />
        <b>Operating Systems:</b> Windows, macOS, Linux, iOS
      </p>

      {/* Coursework Section */}
      <h2 className='left-indent section-title'>Coursework</h2>
      <p className='left-indent section-body'>
        Software Engineering, Software Development, Web Development, Database Systems, iOS Application Development, <br />
        Operating Systems, Computer Networking, Security and Data Privacy, Theory of Computation, <br />
        Data Structures and Algorithms, Analysis of Algorithms, Linear Algebra, Probability and Statistics
      </p>
    </div>
  );
}