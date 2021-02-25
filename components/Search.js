import {resetIdCounter, useCombobox} from "downshift";
import debounce from "lodash.debounce";
import {DropDown, DropDownItem, SearchStyles} from "./styles/DropDown";
import gql from "graphql-tag";
import {useLazyQuery} from "@apollo/client";
import {useRouter} from "next/dist/client/router";

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    # if ever you want to rename what comes back (by default it will be called data)
    # you can prepend a title to the returned data like I did below
    searchTerms: allProducts(
      where: {
        OR: [
          {name_contains_i: $searchTerm}
          {description_contains_i: $searchTerm}
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search() {
  const router = useRouter();
  const [findItems, {loading, data, error}] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      // this by-passes the cache (as we don't want to store any of these results)
      // it just goes directly to the network.
      fetchPolicy: "no-cache",
    }
  );
  const items = data?.searchTerms || [];
  //   this function ensures that a network request isnt fired for every keystroke but rather once every 350ms
  // the 350ms resets with each keystroke
  const findItemsAfterPause = debounce(findItems, 350);
  // resetId counter prevents errors on the console that talk about mismatched aria id tags from
  // from downshift
  resetIdCounter();

  // comboBox is a package that handles accessability when it comes to search bars
  // Below we are destructuring the particular pieces of combobox we want to use
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    // then we declare the methods we want to use onInputValueChange dictates wht to do when the
    // search bar is typed into.
    onInputValueChange() {
      //   this function ensures that a network request isnt fired for every keystroke but rather once every 350ms
      findItemsAfterPause({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({selectedItem}) {
      router.push({
        pathname: `/product/${selectedItem.id}`,
      });
    },
    itemToString: (item) => "fine choice" || "",
  });
  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: "search",
            placeholder: "Search for a title",
            id: "search",
            className: loading ? "loading" : "",
          })}
        />
      </div>
      {/* here is where the returned data from the search query is rendered */}
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              key={item.id}
              {...getItemProps({item,index})}
              highlighted={index === highlightedIndex}
            >
              <img
                src={item.photo.image.publicUrlTransformed}
                alt={item.name}
                width="50px"
              />
              {item.name}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
}
