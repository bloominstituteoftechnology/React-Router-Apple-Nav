import React from 'react';
import Index from './index';

export default props => {
    const { match } = props;
    return (
        <div>
            <Index path={match.path}/>
        </div>
    );
};