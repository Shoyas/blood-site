import React from 'react';
import BecomeDonar from './BecomeDonar/BecomeDonar';
import BloodDay from './BloodDay/BloodDay';
import DonarFeedback from './DonarFeedback/DonarFeedback';
import GetInvolvedOne from './GetInvolved/GetInvolvedOne/GetInvolvedOne';
import GetInvolvedTwo from './GetInvolved/GetInvolvedTwo/GetInvolvedTwo';
import MakeImpact from './MakeImpact/MakeImpact';
import ServiceCards from './ServiceCards/ServiceCards';

const Body = () => {
    return (
        <>
           <MakeImpact/>
           <GetInvolvedOne/>
           <GetInvolvedTwo/>
           <ServiceCards/>
           <BloodDay/>
           <DonarFeedback/> 
           <BecomeDonar/>
        </>
    );
};

export default Body;