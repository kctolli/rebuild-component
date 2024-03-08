// @ts-nocheck
import React, 
  { useRef, 
    useState, 
    memo, 
    ReactElement 
  } from 'react';
import axios from 'axios';

import Refresh from './Refresh';
import s from './index.module.css';

/**
 * ReBuild function takes buildUrl and statusUrl as parameters and returns a JSX element.
 *
 * @param {string} buildUrl - The URL for triggering the build
 * @param {string} statusUrl - The URL for checking the build status
 * @return {ReactElement} The Component containing an iframe and a button for triggering a build
 */
const ReBuild = ({buildUrl, statusUrl}: {buildUrl: string, statusUrl: string}): ReactElement => {  
  const [building, setBuilding] = useState(false);
  const statusRef = useRef<HTMLIFrameElement>();

  /**
   * Handle the build process asynchronously.
   *
   * @return {Promise<void>} A Promise that resolves when the build process is complete
   */
  const handleBuild = async () => {
    await axios.post(buildUrl, {});
    statusRef.current.src += '';
    setBuilding(true);

    setTimeout(() => {
      statusRef.current.src += '';
      setBuilding(false);
    }, 30000);
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
      <button onClick={handleBuild} disabled={building}>
        <Refresh className={s.refresh} /> Rebuild
      </button>
    </div>
  );
}

export default memo(ReBuild);
