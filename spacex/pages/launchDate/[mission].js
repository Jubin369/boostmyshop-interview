import React, { useEffect, useState } from "react";
import { Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { intervalToDuration } from "date-fns";
import { useRouter } from "next/router";
import data from "../../data/launchData";

export default function ProductScreen() {
  const router = useRouter();
  const { mission } = router.query;
  const launchData = data.launchDates.find((a) => a.Mission === mission);
  const [displayDate, setDisplayDate] = useState(null);

  useEffect(() => {
    let date = intervalToDuration({
      start: new Date(),
      end: new Date(launchData.Date),
    });
    setDisplayDate(date);
  }, [displayDate]);

  if (!launchData) {
    return <div>Launch date Not Found</div>;
  }
  return (
    <div>
      <Text textAlign="center" fontSize="larger" fontWeight="bold" p="30px">
        Upcoming:{launchData?.Mission}
      </Text>
      <Stack
        w="50%"
        m="auto"
        backgroundColor="blue.700"
        color="white"
        p="20px"
        textAlign="center"
      >
        <Stack>
          <Text fontWeight="bold" w="80px" m="auto">
            {displayDate?.years}
          </Text>
        </Stack>
        <Stack pb="20px">
          <Text border="1px" fontWeight="bold" p="5px" w="80px" m="auto">
            Years
          </Text>
        </Stack>
        <Stack>
          <Text fontWeight="bold" w="80px" m="auto">
            {displayDate?.months}
          </Text>
        </Stack>
        <Stack pb="20px">
          <Text border="1px" fontWeight="bold" p="5px" w="80px" m="auto">
            Months
          </Text>
        </Stack>
        <Stack>
          <Text fontWeight="bold" w="80px" m="auto">
            {displayDate?.days}
          </Text>
        </Stack>
        <Stack pb="20px">
          <Text border="1px" fontWeight="bold" p="5px" w="80px" m="auto">
            Dates
          </Text>
        </Stack>
        <Stack>
          <Text fontWeight="bold" w="80px" m="auto">
            {displayDate?.hours}
          </Text>
        </Stack>
        <Stack pb="20px">
          <Text border="1px" fontWeight="bold" p="5px" w="80px" m="auto">
            Hours
          </Text>
        </Stack>
        <Stack>
          <Text fontWeight="bold" w="80px" m="auto">
            {displayDate?.minutes}
          </Text>
        </Stack>
        <Stack>
          <Text border="1px" fontWeight="bold" p="5px" w="80px" m="auto">
            Minutes
          </Text>
        </Stack>
        <Stack>
          <Text fontWeight="bold" w="80px" m="auto">
            {displayDate?.seconds}
          </Text>
        </Stack>
        <Stack>
          <Text border="1px" fontWeight="bold" p="5px" w="80px" m="auto">
            Seconds
          </Text>
        </Stack>
      </Stack>
    </div>
  );
}
