import { Grid, Typography, Button, Container} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import TripCard from "./RouteCard";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  marginBottom:"10px",
  border:"1px solid",
  borderColor:"#C7C8CC" //gray
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1), // Adjust padding as needed
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#747D92",
  left: 0,
}));
const FIconWrapper = styled("div")(({ theme }) => ({
  justifyContent:"center",
  alignItems:"center",
  color: "#C7C8CC",
  position:"absolute",
  right:0,
  display:"flex",
  height:"100%",
  padding: theme.spacing(0, 1)

}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`, // Adjust padding as needed
    paddingRight: `calc(1em + ${theme.spacing(5)})`, // Adjust padding as needed
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

let Pickup = "Pickup";
let Drop = "Drop"

function App() {
  return (
    <>
      {/* -------------------------------------------routes and button------------------------------------------- */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Grid item>
          <Typography
            variant="h6"
            ml={3}
            sx={{ fontWeight: "bold", color: "#161D83" }}
          >
            Routes
          </Typography>
        </Grid>
        <Grid item mr={3}>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" sx={{ backgroundColor: "#161D83" }}>
                Bulk Upload
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ backgroundColor: "#161D83" }}>
                Create New Route
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* ---------------------------------------- side vehicles and map ---------------------------------------- */}
      <Grid container>
        {/* ---------------------------------------------- Left side ---------------------------------------------- */}
        <Grid item xs={3}>
          <Container sx={{ height: "calc(100vh - 90px)", overflowY: "auto" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Route Name"
                inputProps={{ "aria-label": "search" }}
              />
              <FIconWrapper>
                <FilterAltIcon />
              </FIconWrapper>
            </Search>
            <TripCard
              TripName = "Kadapa - Siruguppa"
              pick = {Pickup}
              src = "2039 Mainroad, Kadappa Central"
              dest = "EGS Mainroad, Pinagara, Siruguppa"
              dist = "24 Km"
              time = "2.4 hrs"
             />
             <TripCard
              TripName = "Kadapa - Siruguppa"
              pick = {Drop}
              src = "2039 Mainroad, Kadappa Central"
              dest = "EGS Mainroad, Pinagara, Siruguppa"
              dist = "24 Km"
              time = "2.4 hrs"
             />
              <TripCard
              TripName = "Kadapa - Siruguppa"
              pick = {Drop}
              src = "2039 Mainroad, Kadappa Central"
              dest = "EGS Mainroad, Pinagara, Siruguppa"
              dist = "24 Km"
              time = "2.4 hrs"
             />
              <TripCard
              TripName = "Kadapa - Siruguppa"
              pick = {Drop}
              src = "2039 Mainroad, Kadappa Central"
              dest = "EGS Mainroad, Pinagara, Siruguppa"
              dist = "24 Km"
              time = "2.4 hrs"
             />
              <TripCard
              TripName = "Kadapa - Siruguppa"
              pick = {Drop}
              src = "2039 Mainroad, Kadappa Central"
              dest = "EGS Mainroad, Pinagara, Siruguppa"
              dist = "24 Km"
              time = "2.4 hrs"
             />
              <TripCard
              TripName = "Kadapa - Siruguppa"
              pick = {Drop}
              src = "2039 Mainroad, Kadappa Central"
              dest = "EGS Mainroad, Pinagara, Siruguppa"
              dist = "24 Km"
              time = "2.4 hrs"
             />
             
          </Container>
        </Grid>
        {/* ---------------------------------------------- Right side ---------------------------------------------- */}
        <Grid item xs={9}>
          {/* Your map component goes here */}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
