import "./autocomplete.css";
import { useContext, useEffect, useState } from "react";
import { useMemo } from "react";
import { SearchContext } from "../context/searchvaluecontext";
export default function Autocomplete({ suggestion, onSelect }) {

  const { setSearchValue, searchValue } = useContext(SearchContext);
  const [renderList, setRenderList] = useState([]);
  const [resultValue, setResultValue] = useState("");
  const [togglePanel, setTogglePanel] = useState(false);

  useEffect(() => {
    setRenderList(suggestion || []);
  }, [suggestion]);

  function searchText(query = "") {
    console.log("search called");
    setSearchValue(query);
    if (query == "") {
      setRenderList(suggestion);
      return;
    }
    setRenderList(
      suggestion.filter((item) =>
        item.country.toLowerCase().includes(query.toLowerCase())
      )
    );
    setTogglePanel(query.length > 0); // Show panel only if input has some text
  }
  const debounced = useMemo(()=> {
    return debounce(searchText, 1000)
}, [suggestion])
function debounce(fn, delay) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(()=> {
            fn.apply(null,args);
        },delay)
    }
}
function throtling(fn, delay) {
    let lastcall =0;
    return function(...args) {
        let now = Date.now();
        if (now  - lastcall > delay) {
            fn.apply(null, args);
            lastcall = now;
        }
    }
}

const throtled = useMemo(()=> {
    return throtling(scrolling, 1000)
}, [suggestion])
function scrolling(event) {
    console.log("scrolled", event);
}


  return (
    <div className="autocomplete">
      {searchValue}
      <div className=" bg-black">
      <input
        value={resultValue}
        autoComplete="off"
        onInput={(event) => {
          const value = event.target.value;
          setResultValue(value);
          debounced(value)
        }}
        id="searchField"
        onFocus={() => setTogglePanel(true)} // show on focus if input not empty
        onBlur={() => setTimeout(() => setTogglePanel(false), 150)} // hide after click outside (delay for click on item)
      />
      {togglePanel} hello
      {togglePanel && renderList.length > 0 && (
        <div onScroll={(event) => {
            throtled(event);
        }} className="suggestion-panel d-block">
          {renderList.map((data, index) => (
            <div
              key={index}
              className="item"
              onClick={(event) => {
                console.log(onSelect);
                if (onSelect) {
                  onSelect(data.country);
                }
                setResultValue(data.country);
                setTogglePanel(false);
              }}
            >
              {data.country}
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
