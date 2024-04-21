import { Grid, useMediaQuery, useTheme } from "@mui/material";
import AccordionDepthPanel from "./AccordianDepthPanel";

const Achievements: React.FC = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));

  return (
    <>
      <Grid
        paddingX={isMobileView ? "10px" : "250px"}
        marginBottom="35px"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <div
          style={{
            fontSize: isMobileView ? "25px" : "60px",
            color: "#514F4F",
            marginBottom: "30px",
          }}
        >
          <b>Achieve</b>ment
        </div>
        <div>
          <AccordionDepthPanel />
        </div>
      </Grid>
    </>
  );
};
export default Achievements;
