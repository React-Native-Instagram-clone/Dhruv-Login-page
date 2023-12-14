import React, { useRef, useState, useId } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {
  rowData,
  allItemNos,
  allSortingNos,
  allLabs,
  allColor,
  allCarat,
  allClarity,
  allShape,
  allCut,
  allFluorescence,
  allMeasurement,
  allPolish,
  allSymmetry,
  allAuctionNos,
  allDollarPrice,
} from "../constants/Data";
const GridExample = () => {
  const [gridApi, setGridApi] = useState([]);
  const [itemNos, setItemNos] = useState([]);
  const [sortingNos, setSortingNos] = useState([]);
  const [lab, setLab] = useState([]);
  const [color, setColor] = useState([]);
  const [carat, setCarat] = useState([]);
  const [clarity, setClarity] = useState([]);
  const [shape, setShape] = useState([]);
  const [cut, setCut] = useState([]);
  const [fluorescence, setFluorescence] = useState([]);
  const [measurement, setMeasurement] = useState([]);
  const [polish, setPolish] = useState([]);
  const [symmetry, setSymmetry] = useState([]);
  const [auctionNos, setAuctionNos] = useState([]);
  const [dollarPrice, setDollarPrice] = useState([]);

  const id = useId();

  const resetFilters = () => {
    setItemNos([]);
    setSortingNos([]);
    setLab([]);
    setColor([]);
    setCarat([]);
    setClarity([]);
    setShape([]);
    setCut([]);
    setFluorescence([]);
    setMeasurement([]);
    setPolish([]);
    setSymmetry([]);
    setAuctionNos([]);
    setDollarPrice([]);
  };

  const colDefs = [
    { field: "itemNos" },
    { field: "sortingNos" },
    { field: "lab" },
    { field: "color" },
    { field: "carat" },
    { field: "clarity" },
    { field: "shape" },
    { field: "cut" },
    { field: "fluorescence" },
    { field: "measurement" },
    { field: "polish" },
    { field: "symmetry" },
    { field: "auctionNos" },
    { field: "dollarPrice" },
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true,
    animateRows: true,
  };

  const condition = (row) =>
    (!lab.length || lab.includes(row.lab)) &&
    (!itemNos.length || itemNos.includes(row.itemNos)) &&
    (!sortingNos.length || sortingNos.includes(row.sortingNos)) &&
    (!color.length || color.includes(row.color)) &&
    (!carat.length || carat.includes(row.carat)) &&
    (!shape.length || shape.includes(row.shape)) &&
    (!clarity.length || clarity.includes(row.clarity)) &&
    (!cut.length || cut.includes(row.cut)) &&
    (!fluorescence.length || fluorescence.includes(row.fluorescence)) &&
    (!measurement.length || measurement.includes(row.measurement)) &&
    (!polish.length || polish.includes(row.polish)) &&
    (!symmetry.length || symmetry.includes(row.symmetry)) &&
    (!auctionNos.length || auctionNos.includes(row.auctionNos)) &&
    (!dollarPrice.length || dollarPrice.includes(row.dollarPrice));

  return (
    <div className="bg-[#1b203d] min-h-[100vh] flex flex-col justify-center items-center gap-1">
      <div>

        <h1 className="font-bold text-lg mb-2 mt-10 text-center capitalize text-blue-500">Color</h1>
        <div className="p-4 grid grid-cols-12 gap-1">
          {allColor.map((val, index) => (
            <div key={index} className="contents">
              <input type="checkbox" id={`checkbox-color-${index}`} className="hidden peer" />
              <label
                className="bg-white px-1 hover:bg-green-600 peer-checked:bg-green-500  transition-all duration-300 ease-in-out"
                onClick={() => setColor([...color, val])}
                htmlFor={`checkbox-color-${index}`}
              >
                {val}
              </label>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center capitalize text-blue-500">Carat</h1>
        <div className="p-4 grid grid-cols-12 gap-1">
          {allCarat.map((val, index) => (
            <div key={index} className="contents">
              <input type="checkbox" id={`checkbox-carat-${index}`} className="hidden peer" />
              <label
                className="bg-white px-1 hover:bg-green-600 peer-checked:bg-green-500  transition-all duration-300 ease-in-out"
                onClick={() => setCarat([...carat, val])}
                htmlFor={`checkbox-carat-${index}`}
              >
                {val}
              </label>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center capitalize text-blue-500">cut</h1>
        <div className="p-4 grid grid-cols-12 gap-1">
          {allCut.map((val, index) => (
            <div key={index} className="contents">
              <input type="checkbox" id={`checkbox-cut-${index}`} className="hidden peer" />
              <label
                className="bg-white px-1 hover:bg-green-600 peer-checked:bg-green-500  transition-all duration-300 ease-in-out"
                onClick={() => setCut([...cut, val])}
                htmlFor={`checkbox-cut-${index}`}
              >
                {val}
              </label>
            </div>

          ))}
        </div>

        <div className="grid grid-cols-3">
          <div>
            <h1 className="font-bold text-lg mb-2 mt-10 text-center capitalize text-blue-500">Shape</h1>
            <div className="p-4 grid grid-cols-11 gap-1">
              {allShape.map((val, index) => (
                <div key={index} className="contents">
                  <input type="checkbox" id={`checkbox-shape-${index}`} className="hidden peer" />
                  <label
                    className="bg-white px-1 hover:bg-green-600 peer-checked:bg-green-500  transition-all duration-300 ease-in-out"
                    onClick={() => setShape([...shape, val])}
                    htmlFor={`checkbox-shape-${index}`}
                  >
                    {val}
                  </label>
                </div>
                ))}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-2 mt-10 text-center capitalize text-blue-500">Polish</h1>
            <div className="p-4 grid grid-cols-4 gap-1">
              {allPolish.map((val, index) => (
                <div key={index} className="contents">
                  <input type="checkbox" id={`checkbox-polish-${index}`} className="hidden peer" />
                  <label
                    className="bg-white px-1 hover:bg-green-600 peer-checked:bg-green-500  transition-all duration-300 ease-in-out"
                    onClick={() => setPolish([...polish, val])}
                    htmlFor={`checkbox-polish-${index}`}
                  >
                    {val}
                  </label>
                </div>
                
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-2 mt-10 text-center capitalize text-blue-500">clarity</h1>
            <div className="p-4 grid grid-cols-10 gap-1">
              {allClarity.map((val, index) => (
                <div key={index} className="contents">
                  <input type="checkbox" id={`checkbox-clarity-${index}`} className="hidden peer" />
                  <label
                    className="bg-white px-1 hover:bg-green-600 peer-checked:bg-green-500  transition-all duration-300 ease-in-out"
                    onClick={() => setClarity([...clarity, val])}
                    htmlFor={`checkbox-clarity-${index}`}
                  >
                    {val}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ag-theme-quartz h-[50vh] w-[80vw]">
        <AgGridReact
          rowData={rowData.filter((row) => condition(row))}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          onGridReady={({ api }) => setGridApi(api)}
        />
      </div>
      <div className="flex justify-center my-4">
        <button
          className="bg-white px-5 py-2 rounded-lg font-bold text-lg mr-4"
          onClick={() => gridApi.exportDataAsCsv()}
        >
          Export
        </button>
        <button
          className="bg-white px-5 py-2 rounded-lg font-bold text-lg"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default GridExample;
