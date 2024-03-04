// @ts-nocheck
import React, { useRef } from 'react';
import axios from 'axios';

import Refresh from './Refresh';
import s from './index.module.css';

/**
 * ReBuild function takes buildUrl and statusUrl as parameters and returns a JSX element.
 *
 * @param {string} buildUrl - The URL for triggering the build
 * @param {string} statusUrl - The URL for checking the build status
 * @return {JSX.Element} The JSX element containing an iframe and a button for triggering a build
 */
export default function ReBuild({buildUrl, statusUrl}: {buildUrl: string, statusUrl: string}) {  
  const statusRef = useRef<HTMLIFrameElement>();

  /**
   * Handle the build process asynchronously.
   *
   * @return {Promise<void>} A Promise that resolves when the build process is complete
   */
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
      <button 
        onClick={handleBuild} 
        className={s.button}
      >
        <Refresh className={s.svg} /> Rebuild
      </button>
    </div>
  );
}
