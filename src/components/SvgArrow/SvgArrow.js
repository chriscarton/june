import React, { Component } from 'react';
import './SvgArrow.scss';

export class SvgArrow extends Component {
    render() {
        return (
            <svg id="SvgArrow">
                <line id="horizontalLine" fill="none" x1="0" y1="16" x2="32" y2="16" />
                <polyline points="16,0 16,16 16,32" fill="none">
                    <animate
                        id="arrowLine"
                        begin="indefinite"
                        attributeName="points"
                        dur="0.5s"
                        from="16,0 16,16 16,32"
                        to="16,0 32,16 16,32"
                        fill="freeze"
                    />
                </polyline>
            </svg>
        )
    }
}

export default SvgArrow
