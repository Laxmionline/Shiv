import { useEffect } from 'react';
import './styles.css';

const APP_LINK = 'https://kalyann.site/app/kalyanmatka.apk';
const PROFILE_IMAGE = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect width=%22200%22 height=%22200%22 rx=%22100%22 fill=%22%23e00d2d%22/%3E%3Ctext x=%2250%25%22 y=%2254%25%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22Arial%22 font-size=%2258%22 font-weight=%22700%22%3EK%3C/text%3E%3C/svg%3E';

function trackDownload() {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }
}

function DownloadButton() {
  return (
    <a className="download" href={APP_LINK} onClick={trackDownload}>
      <i className="fa-solid fa-arrow-down" aria-hidden="true" /> DOWNLOAD APP
    </a>
  );
}

function App() {
  useEffect(() => {
    const preventCopy = (event) => event.preventDefault();
    document.addEventListener('contextmenu', preventCopy);
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('dragstart', preventCopy);
    return () => {
      document.removeEventListener('contextmenu', preventCopy);
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('dragstart', preventCopy);
    };
  }, []);

  return (
    <main className="page">
      <div className="logo-wrap">
        <div className="logo-frame">
          <img className="logo" src={PROFILE_IMAGE} alt="Kalyan App logo" draggable="false" />
        </div>
      </div>
      <h1>Kalyan App</h1>
      <p className="desc">
        Download the official <b>Kalyan App</b><br />
        India's Most Fastest Growing App for fast results and smooth experience.
      </p>
      <div className="download-wrap"><DownloadButton /></div>
      <div className="features">
        <div className="card">
          <b><i className="fa-solid fa-bolt-lightning" aria-hidden="true" /> Fastest Results Update</b>
          <p>Instant updates without delay.</p>
        </div>
        <div className="card">
          <b><i className="fa-solid fa-shield" aria-hidden="true" /> Safe &amp; Secure App</b>
          <p>Your data stays protected.</p>
        </div>
        <div className="card">
          <b><i className="fa-solid fa-mobile-screen" aria-hidden="true" /> Simple UI Mobile Friendly</b>
          <p>Smooth on all Android phones.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
