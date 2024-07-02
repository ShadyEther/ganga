// IframeComponent.js
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//   iframeContainer: {
//     position: 'relative',
//     width: '100%',
//     paddingTop: '56.25%', // 16:9 aspect ratio (adjust as needed)
//   },
//   iframe: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     border: 'none',
//   },
// }));

const IframeComponent = ({ src }:any) => {
//   const classes = useStyles();

  return (
    <div >
      <iframe
        // className={classes.iframe}
        src={src}
        title="Embedded Form"
        allowFullScreen
      />
    </div>
  );
};

export default IframeComponent;
