import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";

type RowCardProps = {
  cardType: "Exp." | "Educ.";
  line1Content: string;
  line2Content: string;
};
const RowCard: React.FC<RowCardProps> = ({
  cardType,
  line1Content,
  line2Content,
}) => {
  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{ width: 260, border: "solid 2px black" }}
    >
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          {cardType === "Exp." ? <BadgeIcon /> : <SchoolIcon />}
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          {line1Content}
        </Typography>
        <Typography level="body-sm">{line2Content}</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="neutral"
        sx={{
          px: 0.2,
          writingMode: "vertical-rl",
          justifyContent: "center",
          fontSize: "xs",
          fontWeight: "xl",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderLeft: "1px solid",
          borderColor: "divider",
        }}
      >
        {cardType}
      </CardOverflow>
    </Card>
  );
};

export default RowCard;
