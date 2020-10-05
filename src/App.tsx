// LIBS
import "bootstrap";
import Pagination from "rc-pagination";

// REACT
import React, { useState, useEffect } from "react";

// COMPONENTS & STYLED
import "./assets/styles/pagination.css";
import { CardCharacters, CardLocationsEpisodes, NavBar } from "./components";
import { MainContainer, Styles } from "./styles";

// APOLLO
import { useQuery } from "@apollo/client";
import {
  CHARACTERS_QUERY,
  LOCATIONS_QUERY,
  EPISODES_QUERY,
} from "./apollo/queries";

// TYPES
import { Characters, Locations, Episodes } from "./apollo/types";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState("Characters");
  const [input, setInput] = useState("");
  const [pages, setPages] = useState(1);
  const [switchSearch, setSwitchSearch] = useState(true);

  const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handlerFilters = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const value = (e.target as HTMLInputElement).value;
    setFilters(value);
    setSwitchSearch(true);
  };

  const onReset = () => {
    setInput("");
  };

  const search = input.trim();

  const filter = {
    name: switchSearch ? search : "",
    type: !switchSearch ? search : "",
  };

  const filterEpisode = {
    name: switchSearch ? search : "",
    episode: !switchSearch ? search : "",
  };

  const validation = search.length < 3;
  const isCharacters = validation || filters !== "Characters";
  const isLocations = validation || filters !== "Locations";
  const isEpisodes = validation || filters !== "Episodes";

  const {
    loading: loading_characters,
    error: error_characters,
    data: data_characters,
  } = useQuery<{ characters: Characters }>(CHARACTERS_QUERY, {
    variables: { page: currentPage, filter },
    skip: isCharacters,
    fetchPolicy: "cache-and-network",
  });

  const {
    loading: loading_locations,
    error: error_locations,
    data: data_locations,
  } = useQuery<{ locations: Locations }>(LOCATIONS_QUERY, {
    variables: { page: currentPage, filter },
    skip: isLocations,
    fetchPolicy: "cache-and-network",
  });

  const {
    loading: loading_episodes,
    error: error_episodes,
    data: data_episodes,
  } = useQuery<{ episodes: Episodes }>(EPISODES_QUERY, {
    variables: { page: currentPage, filter: filterEpisode },
    skip: isEpisodes,
    fetchPolicy: "cache-and-network",
  });

  const generalData =
    data_characters?.characters ||
    data_locations?.locations ||
    data_episodes?.episodes;

  const generalError = error_characters || error_locations || error_episodes;

  const generalLoading =
    loading_characters || loading_locations || loading_episodes;

  useEffect(() => {
    if (!generalError && !generalLoading) {
      setPages(generalData?.info.pages || 0);
    }
    if (generalError) {
      setPages(0);
      console.log(`error on ${filters}Query`, generalError);
    }
  }, [generalData, generalError, generalLoading, filters, search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const cardsCenter =
    (generalData?.results.length || 0) < 5 && "justify-content-center";

  const errorContent = () => {
    if (generalError?.message === "404: Not Found") {
      return (
        <h2
          className="text-center"
          style={Styles.placeholder}
        >{`No results were found for "${search}"`}</h2>
      );
    }
    return (
      <h2 className="text-center" style={Styles.placeholder}>
        An error has occurred, please try searching again
      </h2>
    );
  };

  const cardsContent = () => {
    if (filters === "Characters") {
      return data_characters?.characters.results.map(
        ({ id, name, type, gender, species, image }) => {
          return (
            <CardCharacters
              name={name}
              type={type}
              gender={gender}
              species={species}
              image={image}
              key={id}
            />
          );
        }
      );
    }
    if (filters === "Locations") {
      return data_locations?.locations.results.map(
        ({ id, name, type, dimension, residents }) => {
          return (
            <CardLocationsEpisodes
              key={id}
              name={name}
              type={type}
              dimension={dimension}
              residents={residents}
            />
          );
        }
      );
    }
    return data_episodes?.episodes.results.map(
      ({ id, name, air_date, episode, characters }) => {
        return (
          <CardLocationsEpisodes
            key={id}
            name={name}
            airDate={air_date}
            episode={episode}
            characters={characters}
            isEpisodes
          />
        );
      }
    );
  };

  const renderContent = () => {
    if (!generalLoading) {
      if (!generalError) {
        if ((generalData?.results.length || 0) > 0) {
          return (
            <div
              className={`d-flex row align-items-center row-cols-1 row-cols-xl-5 ${cardsCenter}`}
            >
              {cardsContent()}
            </div>
          );
        }
        return (
          <h2 className="" style={Styles.placeholder}>
            {`Please search your favourite ${filters
              .slice(0, -1)
              .toLocaleLowerCase()}`}
          </h2>
        );
      }
      return errorContent();
    }
    return (
      <div className="text-center" style={Styles.placeholder}>
        <div className="spinner-border text-light" role="status"></div>
      </div>
    );
  };

  return (
    <div className="App">
      <NavBar
        search={searching}
        value={input}
        filters={handlerFilters}
        onReset={onReset}
        onSwitch={(checked: boolean) => setSwitchSearch(checked)}
        checked={switchSearch}
        episodesSwitch={filters === "Episodes"}
        index={filters}
      />
      <MainContainer className="text-center">
        <h1 className="title text-center">{filters}</h1>
        {renderContent()}
      </MainContainer>
      <Pagination
        className="d-flex justify-content-center fixed-bottom py-2"
        style={Styles.pagination}
        current={currentPage}
        total={pages * 10}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
