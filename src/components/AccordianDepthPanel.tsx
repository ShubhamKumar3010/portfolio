import { useState } from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";

export default function AccordionDepthPanel() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <AccordionGroup
      className="achievement-accordion"
      variant="outlined"
      transition="0.2s"
      sx={{
        width: "100%",
        borderRadius: "lg",
        [`& .${accordionSummaryClasses.button}:hover`]: {
          bgcolor: "transparent",
        },
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        [`& .${accordionDetailsClasses.content}`]: {
          boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
          [`&.${accordionDetailsClasses.expanded}`]: {
            paddingBlock: "0.75rem",
          },
        },
      }}
    >
      <Accordion
        expanded={expandedIndex === 0}
        onChange={(_, expanded) => setExpandedIndex(expanded ? 0 : null)}
      >
        <AccordionSummary>
          <span className="achievement-summary">
            <span className="achievement-number">01</span> Smart Gaya
          </span>
        </AccordionSummary>
        <AccordionDetails variant="soft">
          <ul>
            <li>
              The SMART GAYA app was selected amongst one of the few start-ups
              of the Start-up Bihar competition, and was considered for
              Incubation.
            </li>
            <li>
              The SMART GAYA APP also got around 1000 active users and more than
              a 500 transactions until now.
            </li>
            <li>It completed its 100 orders within a month.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandedIndex === 1}
        onChange={(_, expanded) => setExpandedIndex(expanded ? 1 : null)}
      >
        <AccordionSummary>
          <span className="achievement-summary">
            <span className="achievement-number">02</span> Smart India Hackathon 2020
          </span>
        </AccordionSummary>
        <AccordionDetails variant="soft">
          <ul>
            <li>Prelims of Smart India Hackathon 2019(Runner Up).</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandedIndex === 2}
        onChange={(_, expanded) => setExpandedIndex(expanded ? 2 : null)}
      >
        <AccordionSummary>
          <span className="achievement-summary">
            <span className="achievement-number">03</span> Football
          </span>
        </AccordionSummary>
        <AccordionDetails variant="soft">
          <ul>
            <li>Represented the School Football team at the State Level.</li>
            <li>Got selected as a Bihar State Footballer.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
