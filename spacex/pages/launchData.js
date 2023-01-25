import { Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import data from "../data/launchData";

export default function Home() {
  return (
    <div>
      <h1>launch Dates</h1>
      <Stack>
        {data.launchDates.map((launchDate) => (
          <Stack key={launchDate.name}>
            <NextLink href={`/launchDate/${launchDate.Mission}`} passHref>
              <Stack>
                <Text>{launchDate.Mission}</Text>
                <Text>{launchDate.Mission}</Text>
                <Text>{launchDate.Mission}</Text>
              </Stack>
            </NextLink>
          </Stack>
        ))}
      </Stack>
    </div>
  );
}
