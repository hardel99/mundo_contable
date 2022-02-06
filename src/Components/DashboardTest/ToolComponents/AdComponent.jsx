import React, { Component } from 'react';

export default class AdComponent extends Component {
    omponentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <>
                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-2130798226668586"
                    data-ad-slot="5985840766"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </>
        );
    }
}
