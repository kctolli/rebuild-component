import React, { useRef } from 'react';
import axios from 'axios';

import Refresh from './Refresh';

/**
 * ReBuild function takes buildUrl and statusUrl as parameters and returns a JSX element.
 *
 * @param {string} buildUrl - The URL for triggering the build
 * @param {string} statusUrl - The URL for checking the build status
 * @return {JSX.Element} The JSX element containing an iframe and a button for triggering a build
 */
function ReBuild({buildUrl, statusUrl}: {buildUrl: string, statusUrl: string}) {  
  const statusRef = useRef<HTMLIFrameElement>();

  const handleBuild = async () => {
    await axios.post(buildUrl, {});
    // @ts-ignore
    statusRef.current.src += '';
  }

  return (
    <div>
      <iframe 
        ref={statusRef}
        src={statusUrl} 
        height="20" 
        width="120" 
        frameBorder="0"
      />
      <br />
      <button onClick={handleBuild}>
        <Refresh /> Rebuild
      </button>
    </div>
  );
}

export default ReBuild;
