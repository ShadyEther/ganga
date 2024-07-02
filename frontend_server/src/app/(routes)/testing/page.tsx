"use-client"

import React from 'react';
import axios from 'axios';
import IframeComponent from '../../../components/ui/Header/_auth/IframeComponent';


// async function getForm(){
//     try {
//         const response = await axios.get('http://127.0.0.1:8000/login');
//         return {
//           props: {
//             htmlContent: response.data,
//           },
//         };
//       } catch (error) {
//         console.error('Error fetching form page:', error);
//         return {
//           props: {
//             htmlContent: '<p>Error loading form.</p>',
//           },
//         };
//       }
// }
const FormPage = async ({ htmlContent }:any) => {

    return (
        <>
            <IframeComponent src="http://127.0.0.1:8000/login"/>
        </>
    )
};



export default FormPage;
