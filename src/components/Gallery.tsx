import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import s1 from "../assets/smartGaya1.jpg";
import s2 from "../assets/smartGaya2.jpg";
import s3 from "../assets/smartGaya3.jpg";
import s4 from "../assets/smartGaya4.jpg";

const Gallery: React.FC = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));
  const imageList = [s1, s2, s3, s4];
  return (
    <>
      <Grid paddingX={isMobileView ? "10px" : "250px"} marginBottom="35px">
        <div
          style={{
            fontSize: isMobileView ? "25px" : "60px",
            color: "#514F4F",
            marginBottom: "30px",
          }}
        >
          <b>Pro</b>ject <b>Gl</b>impse
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Box>
            <ImageList variant="masonry" cols={isMobileView ? 2 : 4} gap={15}>
              {imageList.map((item) => (
                <ImageListItem key={item + 1}>
                  <img
                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=248&fit=crop&auto=format`}
                    alt={item + "_gallery"}
                    loading="lazy"
                    style={{ borderRadius: "10px" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </Grid>
    </>
  );
};

export default Gallery;
