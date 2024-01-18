import { BtnMyLocation } from "../components/BtnMyLocation";
import { MapView } from "../components/MapView";
import { ReactLogo } from "../components/ReactLogo";
import { SearchBar } from "../components/SearchBar";

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
