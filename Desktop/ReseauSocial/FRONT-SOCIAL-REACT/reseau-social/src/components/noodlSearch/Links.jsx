import React from 'react';
import { NavLink } from 'react-router-dom';
import "./noodleGlobal.css"

const links = [
  { url: '/search', text: '🔎 Tout' },
  { url: '/news', text: '📰 Articles' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Vidéos' },
];

export const Links = () => (
  <div className="linkNoodle">
    {links.map(({ url, text }) => (
      <NavLink className='link2' to={url}>{text}</NavLink>
    ))}
  </div>
);
