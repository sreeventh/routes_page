import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RouteIcon from '@mui/icons-material/Route';



const TripCard = (props) => {
    let pcolor;
    // #7BA4FF
    if(props.pick === "Pickup"){
      pcolor = "#7BA4FF"
    }else{
      pcolor = "#FFB000"
    }
    return (
        <Card sx={{border:"1px solid", borderColor:"#C7C8CC", marginBottom:"10px"}}>
            <CardContent>
                <Box display="flex" justifyContent={"space-between"}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        {props.TripName}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ bgcolor: pcolor, borderRadius: "50px" }}
                    >
                        {props.pick}
                    </Button>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <LocationOnIcon sx={{color:"#747D92"}} />
                    <Typography variant="body1" color="textSecondary" ml={1} sx={{color:"#747D92"}} >
                        {/* 2039 Mainroad, Kadappa Central */}
                        {props.src}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                    <LocationOnIcon sx={{color:"#747D92"}} />
                    <Typography variant="body1" color="textSecondary" ml={1} sx={{color:"#747D92"}} >
                        {/* EGS Mainroad, Pinagara, Siruguppa */}
                        {props.dest}
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    mb={2}
                    justifyContent={"space-between"}
                >
                    <Box display={"flex"}>
                        <RouteIcon sx={{color:"#747D92"}} />
                        <Typography variant="body1" ml={1} mr={1} sx={{color:"#747D92"}}>
                            {/* 24 Km */}
                            {props.dist}
                        </Typography>

                    </Box>

                    <Box display={"flex"}>
                        <AccessTimeIcon sx={{color:"#747D92"}} />
                        <Typography variant="body1" ml={1} sx={{color:"#747D92"}}>
                            {/* 2.4 hrs */}
                            {props.time}
                        </Typography>
                    </Box>
                    <Button variant="outlined" color="error">
                        Details
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TripCard;
