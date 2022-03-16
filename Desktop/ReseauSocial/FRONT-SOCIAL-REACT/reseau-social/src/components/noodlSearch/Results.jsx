import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../../context/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="searchAll">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="resultsBox">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="texteSearch">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="titreResults ">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="searchAll2">
          
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} target="_blank" key={index} rel="noreferrer" className='resultsBox2'>
              <img className='resultsBox2' src={image?.src} alt={title} loading="lazy" />
              <p className="resultsBox3">{title}</p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className="searchAll">
          {results?.entries?.map(({ id, links, source, title }) => (
            <div key={id} className="idResultNews">
              <a href={links?.[0].href} target="_blank" rel="noreferrer " className="linkNews">
                <p className="titreNews">{title}</p>
              </a>
              <div className="sourceNews">
                <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="searchAll">
          {results?.results?.map((video, index) => (
            <div key={index} className="boxVideo">
              <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      );
    default:
      return 'Error...';
  }
};
