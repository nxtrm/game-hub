import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);
  const first = data?.results;

  if (isLoading) return null;

  if (error) throw error;

  return first ? (
    <SimpleGrid paddingY={5} columns={{ base: 1, md: 2 }} spacing={6}>
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
