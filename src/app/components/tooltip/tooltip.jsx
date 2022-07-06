import React from 'react';
import ReactTooltip from 'react-tooltip';

const CustomTooltip = ({
    idTooltip,
    placeTooltip,
    nameTooltip
}) => {
    return(
    <ReactTooltip id={idTooltip} place={placeTooltip} effect="solid">
             {nameTooltip}
    </ReactTooltip>
    )
}
export default CustomTooltip;