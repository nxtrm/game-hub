import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import UseGameQueryStore from "./store";
import { Outlet } from "react-router-dom";

function App() {
  const { gameQuery, setSearchText, setGenreId, setPlatformId, setSortOrder } =
    UseGameQueryStore();

  return <div></div>;
}

export default App;
