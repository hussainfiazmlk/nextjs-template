'use client'

import {  useGetDashboardDataQuery,useLazyGetAdditionalDataQuery } from "@/lib/slices/dashboard.slice";
import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export default function AboutUs() {
  //Demo for fetch Apis 

  const { 
    data: dashboardData, 
    isLoading: isDashboardLoading, 
    error: dashboardError 
  } = useGetDashboardDataQuery({});

  const [
    getAdditionalData, 
    { data: additionalData, isLoading: isAdditionalLoading, error: additionalError }
  ] = useLazyGetAdditionalDataQuery();

  const handleLoadAdditionalData = () => {
    getAdditionalData({});
  };

  if (isDashboardLoading) {
    return <CircularProgress />;
  }


  return (
   <Box>About Us
    <Button type="button"  onClick={handleLoadAdditionalData}>Check Api</Button>
   </Box>
  );
}
