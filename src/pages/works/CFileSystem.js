import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

/** Displays the C File System work page, which contains a cover image, links, a description of the application,
 *  and multiple images with captions. */
export default function CFileSystem() {
  return (
    <div className='c-file-system-p work-p page-content'>
      <h1 className='page-title'>C File System</h1>
      <img className='cover' src='/images/works/c-file-system/cover.png' alt="C File System" />

      {/* GitHub repository link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/C-File-System' target="_blank" rel="noopener noreferrer">
          https://github.com/anthonyzhang1/C-File-System
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        This is a basic file system that can create a volume, create and maintain a free space management system,
        initialize a root directory and maintain directory information, create, read, write, and delete files,
        display info, and so on.
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        The C File System was written entirely in C. <br />
        The C File System was created for my university's Operating Systems course in Fall 2021,
        where I worked on the project with 3 other students. <br /><br />

        The following Linux commands are supported:&nbsp;<wbr />
        <strong>cd</strong>, <strong>cp</strong>, <strong>exit</strong>, <strong>history</strong>,&nbsp;<wbr />
        <strong>ls</strong>, <strong>mv</strong>, <strong>pwd</strong>, <strong>rm</strong>. <br /><br />

        Other supported commands: <br />
        <strong>cp2l</strong> - Copies a file from the C file system to the Linux file system. <br />
        <strong>cp2fs</strong> - Copies a file from the Linux file system to the C file system. <br />
        <strong>help</strong> - Prints out a list of supported commands. <br />
        <strong>md</strong> - Makes a new directory. This is the same as Linux's <strong>mkdir</strong> command.
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>

      {/* Make new directory command image */}
      <CaptionedImage
        altText='Making a new directory'
        caption="'md' is used to make a new directory."
        imagePath='/images/works/c-file-system/new-directory.png'
      />

      {/* Change directory command image */}
      <CaptionedImage
        altText='Changing directory'
        caption={
          `'cd' is used to change the current working directory. \
          We started at the root directory (indicated with the '/' character) and changed the directory to /newDir.`
        }
        imagePath='/images/works/c-file-system/change-directory.png'
      />

      {/* File transfer (cp2fs/cp2l) image */}
      <CaptionedImage
        altText='Transferring files between Linux and the C file system'
        caption={
          `The left part of the image with a white background is the Linux file system; the right is the C file system.

          We copy the file 'ogey-rrat.txt' to the C file system with 'cp2fs' and name it 'copied-ogey-rrat.txt'.
          We then copy 'copied-ogey-rrat.txt' to the Linux file system with 'cp2l' and name it 'new-ogey-rrat.txt'.

          This demonstrates how files can be transferred between the Linux file system and the C file system. \
          Renaming the files is optional.`
        }
        imagePath='/images/works/c-file-system/file-transfer.png'
      />

      {/* Move command image */}
      <CaptionedImage
        altText='Moving and renaming files/directories'
        caption={
          `'mv' is used to move a file or directory to another directory. It is also used to rename files and directories.
          We use 'ls' to show that 'copied-ogey-rrat.txt' was successfully renamed and moved to 'newDir'.`
        }
        imagePath='/images/works/c-file-system/move.png'
      />

      {/* Copy command image */}
      <CaptionedImage
        altText='Copying files'
        caption="'cp' is used to copy files."
        imagePath='/images/works/c-file-system/copy.png'
      />

      {/* Remove command image */}
      <CaptionedImage
        altText='Deleting files'
        caption="'rm' is used to delete files and empty directories."
        imagePath='/images/works/c-file-system/remove.png'
      />

      <p className='page-last-updated'>Page Last Updated: March 04, 2023</p>
    </div>
  );
}