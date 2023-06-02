import React from 'react';

interface eventStateProps {
    eventStatus: string;
}

const EventState = ({ eventStatus }: eventStateProps) => {
    return (
        <div className="eng-status">
            <span>{eventStatus}</span>
        </div>
    );
};

export default EventState;