import React, { useState, Fragment } from 'react';
import Infobubble from '../components-within-components/Infobubble';

const SocialIcons = ({ social }) => {
  const [showSnap, setShowSnap] = useState(false);
  const [showInsta, setShowInsta] = useState(false);
  const [showTwitter, setShowTwitter] = useState(false);
  const [showFb, setShowFb] = useState(false);

  const snapchat = social.snapchat;
  const instagram = social.instagram;
  const twitter = social.twitter;
  const facebook = social.facebook;

  return (
    <Fragment>
      {snapchat && (
        <i
          className='fa fa-snapchat'
          onMouseEnter={() => setShowSnap(true)}
          onMouseLeave={() => setShowSnap(false)}
        >
          {showSnap && <Infobubble info={'Användarnamn: ' + snapchat} />}
        </i>
      )}
      {instagram && (
        <i
          className='fa fa-instagram'
          onMouseEnter={() => setShowInsta(true)}
          onMouseLeave={() => setShowInsta(false)}
          onClick={() => window.open(`https://www.instagram.com/${instagram}/`)}
        >
          {showInsta && (
            <Infobubble
              info={`Gå vidare till https://www.instagram.com/${instagram}/`}
            />
          )}
        </i>
      )}
      {twitter && (
        <i
          className='fa fa-twitter'
          onMouseEnter={() => setShowTwitter(true)}
          onMouseLeave={() => setShowTwitter(false)}
          onClick={() => window.open(`https://www.twitter.com/${twitter}/`)}
        >
          {showTwitter && (
            <Infobubble
              info={`Gå vidare till https://www.twitter.com/${twitter}/`}
            />
          )}
        </i>
      )}
      {facebook && (
        <i
          className='fa fa-facebook'
          onMouseEnter={() => setShowFb(true)}
          onMouseLeave={() => setShowFb(false)}
          onClick={() => window.open(`https://www.facebook.com/${facebook}/`)}
        >
          {showFb && (
            <Infobubble
              info={`Gå vidare till https://www.facebook.com/${facebook}/`}
            />
          )}
        </i>
      )}
    </Fragment>
  );
};

export default SocialIcons;
