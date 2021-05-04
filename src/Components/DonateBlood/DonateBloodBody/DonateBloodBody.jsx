import React from 'react';
import BloodDonation from '../BloodDonation/BloodDonation';
import BloodRequirement from '../BloodRequirement/BloodRequirement';

const DonateBloodBody = () => {
    return (
        <>
            <BloodRequirement/>
            <BloodDonation/>   
        </>
    );
};

export default DonateBloodBody;