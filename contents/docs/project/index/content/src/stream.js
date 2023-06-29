import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Streaming() {
  const {siteConfig} = useDocusaurusContext();
  const apiServerHost = siteConfig.customFields.API_SERVER_HOST;
  return (
    <div>
      <video controls width={'100%'}>
        <source src={apiServerHost + "/v1/content/video/stream/html5/sample.mp4"} type="video/mp4"/>
      </video>
    </div>
  );
}