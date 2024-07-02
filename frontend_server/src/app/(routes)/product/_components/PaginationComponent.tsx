import { Box, Pagination, PaginationItem, Typography } from '@mui/material'
import React, { useState } from 'react'

function PaginationComponent() {

    const [pageval, setPageVal] = useState<Number>(1)


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection:'column',
                    margin:'1%',
                }}
            >
                <Typography variant='h6'>
                    Current Page: {pageval}
                </Typography>
                <Pagination count={100} onChange={(e, v) => { setPageVal(v) }}>
                </Pagination>

            </Box>

        </>
    )
}

export default PaginationComponent

