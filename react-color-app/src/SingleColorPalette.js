import React, { useState } from 'react';
import { useParams } from 'react-router';

export default function SingleColorPalette(props) {

    let params = useParams();

    function gatherShades() {
        let shades = [];
        let allColors = props.palette.colors;
    }
    return(
        <div>

        </div>
    );
}
