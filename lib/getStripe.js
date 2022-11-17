import {loadStripe} from '@stripe/stripe-js'

let stripePromise;

const getStripe = () => {
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51M4kbQSJu2GwpRitbIH3LDcZWEVEtmimC74gisad74P2I8giuSG5MJcs6rFCtRSCRlzxi2nbhKfowy3RVRtG7QWO00UWnpBjax');
    }
    return stripePromise;
}

export default getStripe;