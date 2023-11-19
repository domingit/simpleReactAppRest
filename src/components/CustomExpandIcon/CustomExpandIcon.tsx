import React from 'react';

import Box from '@mui/material/Box';

const CustomExpandIcon: React.FC = () => {
    return (
      <Box
        sx={{
          ".Mui-expanded & > .collapsIconWrapper": {
            display: "none"
          },
          ".expandIconWrapper": {
            display: "none"
          },
          ".Mui-expanded & > .expandIconWrapper": {
            display: "block"
          },
          pointerEvents: "auto",
          "& .MuiAccordionSummary-expandIconWrapper": {
            transition: "none",
            "&.Mui-expanded": {
              transform: "none",
            },
          },
        }}
      >
        <div className="expandIconWrapper opened">- opened</div>
        <div className="collapsIconWrapper closed">+ closed</div>
      </Box>
    );
  };

  export default CustomExpandIcon;