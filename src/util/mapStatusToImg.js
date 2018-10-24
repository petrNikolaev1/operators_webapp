import React from 'react';
import {Error, AssignmentTurnedIn, Unarchive} from '@material-ui/icons';

import {mapStatusToNum} from "@/util/api";

export default (status) => {
    switch (mapStatusToNum(status)) {
        case 0:
            return <Error className='pending'/>;
        case 1:
            return <Unarchive className='approved'/>;
        case 2:
            return <AssignmentTurnedIn className='fulfilled'/>;
        default:
            return <Error className='pending'/>;
    }
};
