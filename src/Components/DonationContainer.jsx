/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import DonationCard from "./DonationCard";


const DonationContainer = ({donations}) => {
    


    return (
        <div className="content_box grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {
                donations?.map((donation) => (<DonationCard key={donation.id} donation={donation} ></DonationCard>))
            }
        </div>
    );
};

export default DonationContainer;