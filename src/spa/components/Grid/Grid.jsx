import React from 'react';
import { GridItem } from './GridItem.jsx';

import './Grid.scss';

export const Grid = ({ images = [] }) => {
    return <div className="grid">
        {
            images.map((image) => (
                <GridItem image={image} />
            ))
        }
    </div>
}