
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Connect1 = () => {
  return (
    <div
      id="Connect"
      className="bg-gray-900 text-white py-12 px-6 md:px-20 flex flex-col items-center rounded-lg shadow-lg h-auto"
      >
       <h4>© 2022 Deepak Maurya</h4>
      <h3 className="text-2xl md:text-3xl font-semibold mb-6">Check me out on</h3>
      
      <div className="flex gap-6 mb-8">
        <a
          href="https://github.com/mudassir3817" // Replace with your GitHub link
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-gray-700 transition duration-300"
        >
          <FaGithub /> 
        </a>
        <a
          href="https://leetcode.com/u/Mudassir3817/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-500 transition duration-300"
        >
          <SiLeetcode /> 
        </a>
        <a
          href="https://linkedin.com/in/mudassiraousaf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-600 transition duration-300"
        >
          <FaLinkedin /> 
        </a>
      </div>
    </div>
  );
};

export default Connect1;
