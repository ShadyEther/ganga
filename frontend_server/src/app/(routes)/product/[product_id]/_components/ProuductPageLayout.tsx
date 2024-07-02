import React from 'react'
import ProductView from './ProductView'

function ProuductPageLayout({ children }: any) {
    return (
        <ProductView
            id={'1'}
            name={'Sneakers'} 
            description={'huehuehehue'} 
            discount={50} 
            price={1499} 
            rating={4} 
            reviews={[
                {
                    user:'shady',
                    comment:'hohoho',
                    rating:3,
                },
                {
                    user:'hairy',
                    comment:'uhuhuhuh',
                    rating:2,
                }

            ]} 
            imageUrl={'/sneakers.jpg'} 
            />
    )
}

export default ProuductPageLayout