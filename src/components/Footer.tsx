import { Avatar, Box, Chip, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

function Footer() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));
  return (
    <Box padding={5} color={"#514F4F"} marginBottom={5}>
      <h4 style={{ fontFamily: "unset" }}>Let's Connect and share ideas.</h4>
      <div
        style={{
          fontSize: isMobileView ? "25px" : "60px",
          marginBottom: "10px",
        }}
      >
        <b>C</b>ontact <b>Me</b>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Chip
          avatar={
            <Avatar
              alt="Shubham"
              src={
                "https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831590218/linkedin_logo?e=1721865600&v=beta&t=uJfd-zV0N17fvc-dapl7ie1fZr_1L2QHDBIcbFCPVBc"
              }
            />
          }
          label="Linkedin"
          variant="outlined"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/shubham-kumar-6aa852171/",
              "_blank"
            );
          }}
        />
        <Chip
          avatar={
            <Avatar
              alt="Shubham"
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAV1BMVEVHcEzZUUXXd2/z9PTeU0fZbmbo5+f0+vrx8vLbQjPaSz7WTkHotLHBOyzDTkPAOCjhhX7ZeHHEo6DqzMrFxcS8cGrae3Ti4uLMdm/p6urQ1NS8OSrl5eWBeqqfAAAAHXRSTlMAc5qd//z//////6Pxof3//+n////y6P/z//9ysazRhhoAAADtSURBVHgB1ZJXgoMwDERTXEUH7wo5uf85Y4mOyQEyCXXevC9uP5L74/klj7v0SmljXRZrtAcmCqWULzPClt4DFDOgIEmyeUrFQM0ES85zgEYAqGtgonUzYp3Mfd3MAHQ9OwAGIewgNYS/FfjHMC4S61rpx4A7gDD0MEkG4B76iDRugEEMQXuWeFDgdYhoTgCG2INYeJ76DEhEksA0R5MbmIi99zxHk+I2oJsAjDEGnvPekMsMTMiF97Qz+MWAfJ33RDlgnKNZQFcAOWJC/FdAaoWQPgcM1zNBR+DFgHTLfwe85KMsHu/LPCrufyEfyewjNsxN1fgAAAAASUVORK5CYII="
              }
            />
          }
          label="Gmail"
          variant="outlined"
          onClick={() => {
            window.open("mailto:shubham8969305655@gmail.com", "_blank");
          }}
        />
      </div>
      <div>Copyright © 2024 Shubham Kumar. All Rights Reserved.</div>
    </Box>
  );
}

export default Footer;
