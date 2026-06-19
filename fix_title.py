import re

with open("src/components/SpcxIpoVisualizer.jsx", "r") as f:
    content = f.read()

# 1. Add imports to @mui/material
mui_import_end = content.find('} from "@mui/material";')
if mui_import_end == -1:
    print("Could not find @mui/material import")
    exit(1)

content = content[:mui_import_end] + "  Button,\n  Accordion,\n  AccordionSummary,\n  AccordionDetails,\n" + content[mui_import_end:]

# Add icons
icons_import = """import ShowChartIcon from "@mui/icons-material/ShowChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import TuneIcon from "@mui/icons-material/Tune";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";"""

content = content.replace(
    'import ShowChartIcon from "@mui/icons-material/ShowChart";\nimport TimelineIcon from "@mui/icons-material/Timeline";\nimport TuneIcon from "@mui/icons-material/Tune";',
    icons_import
)

# Replace <Share /> with <ShareIcon />
new_title_block = """      {/* ──────── Title Section ──────── */}
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Typography variant="h4" component="h1">
              SPCX IPO & Index Inclusion Dynamics
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            startIcon={<ShareIcon />}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }}
          >
            Share
          </Button>
        </Grid>
      </Grid>
      <Accordion sx={{ mb: 4 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="explanation-content"
          id="explanation-header"
        >
          <Typography variant="h6">About This Tool</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            Understand the competing forces of supply and demand following the massive SPCX initial public offering.
          </Typography>
        </AccordionDetails>
      </Accordion>"""

hero_start = content.find('      {/* ──────── Hero Header ──────── */}')
hero_end = content.find('      {/* ──────── Concept Cards ──────── */}')
if hero_start == -1 or hero_end == -1:
    print("Could not find Hero Header")
    exit(1)

hero_content = content[hero_start:hero_end]
content = content.replace(hero_content, new_title_block + "\n\n")

cards_start = content.find('      {/* ──────── Concept Cards ──────── */}')
cards_end = content.find('      {/* ──────── Dashboard Section ──────── */}')
if cards_start == -1 or cards_end == -1:
    print("Could not find Concept Cards")
    exit(1)

cards_content = content[cards_start:cards_end]

# Remove the original Concept Cards block
content = content.replace(cards_content, "")

# Find Timeline section and insert Concept Cards right above it
timeline_start = content.find('      {/* ──────── Timeline ──────── */}')
if timeline_start == -1:
    print("Could not find Timeline")
    exit(1)

new_cards_block = """      {/* ──────── Key Market Forces ──────── */}
      <SectionHeader icon={<TrendingUpIcon />}>
        Key Market Forces
      </SectionHeader>

""" + cards_content.strip() + "\n\n"

content = content[:timeline_start] + new_cards_block + content[timeline_start:]

with open("src/components/SpcxIpoVisualizer.jsx", "w") as f:
    f.write(content)

print("Success!")
