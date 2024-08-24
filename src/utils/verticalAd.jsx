import React, { useEffect } from 'react';

const VerticalAd = () => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-8641483046294023"
            data-ad-slot="5750125591"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default VerticalAd;