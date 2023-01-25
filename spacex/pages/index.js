import { Stack, Text, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import { compareAsc, format } from "date-fns";

import data from "../data/launchData";

export default function Home() {
  return (
    <div>
      <Text textAlign="center" fontSize="larger" fontWeight="bold" p="30px">
        Upcoming Next launches
      </Text>
      <Stack w="70%" m="auto" backgroundColor="blue.700" color="white" p="20px">
        <SimpleGrid columns={3} textAlign="center">
          <Text borderBottom="1px" fontWeight="bold" py="10px">
            Mission
          </Text>
          <Text borderBottom="1px" fontWeight="bold" py="10px">
            Date
          </Text>
          <Text borderBottom="1px" fontWeight="bold" py="10px">
            Launchpad
          </Text>
          {data.launchDates.map((launchDate) => (
            <>
              <NextLink href={`/launchDate/${launchDate.Mission}`} passHref>
                <Text borderBottom="1px" py="5px">
                  {launchDate.Mission}
                </Text>
              </NextLink>
              <NextLink href={`/launchDate/${launchDate.Mission}`} passHref>
                <Text borderBottom="1px" py="5px">
                  {format(new Date(launchDate.Date), "yyyy-MM-dd")}
                </Text>
              </NextLink>
              <NextLink href={`/launchDate/${launchDate.Mission}`} passHref>
                <Text borderBottom="1px" py="5px">
                  {launchDate.Launchpad}
                </Text>
              </NextLink>
            </>
          ))}
        </SimpleGrid>
      </Stack>
    </div>
  );
}
