import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        videoRef.current.play();
      });
    }
  }, [src]);

  return <video ref={videoRef} controls />;
}

export default function HLSStreaming() {
  const {siteConfig} = useDocusaurusContext();
  const apiServerHost = siteConfig.customFields.API_SERVER_HOST;
  return (
    <div>
      <VideoPlayer src={apiServerHost + "/v1/content/video/stream/hls/index.m3u8"} />
    </div>
  );
}
