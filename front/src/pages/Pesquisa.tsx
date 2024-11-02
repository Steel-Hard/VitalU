import { SearchProvider } from "../context/searchContext";
import { FoodSearch } from "../components/FoodSearch/index";
export function Pesquisa() {
  return (
    <SearchProvider>
      <FoodSearch />
    </SearchProvider>
  );
}
