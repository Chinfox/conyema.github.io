import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedln.com/in/conyema',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ChinedumOnyema',
      icon: FaTwitter,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/conyema',
      icon: FaGithub,
    },
  ];

  return (
    <div className="flex justify-center space-x-4 py-6">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
          <span className="sr-only">{link.name}</span>
          <link.icon className="text-3xl" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
