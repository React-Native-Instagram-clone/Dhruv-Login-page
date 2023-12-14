import React, { useRef, useState } from "react";
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
    <div className="bg-pink-400 min-h-[100vh] flex flex-col justify-center items-center gap-5">
      <div>
        // <h1 className="font-bold text-lg mb-2 mt-10 text-center">Item Nos</h1>
        // <div className="flex gap-5">
        //   {allItemNos.map((val) => (
        //     <button
        //       className="bg-white px-1"
        //       onClick={() => setItemNos([...itemNos, val])}
        //     >
        //       {val}
        //     </button>
        //   ))}
        // </div>
        // <h1 className="font-bold text-lg mb-2 mt-10 text-center">
        //   Sorting Nos
        // </h1>
        // <div className="flex gap-5">
        //   {allSortingNos.map((val) => (
        //     <button
        //       className="bg-white px-1"
        //       onClick={() => setSortingNos([...sortingNos, val])}
        //     >
        //       {val}
        //     </button>
        //   ))}
        // </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">Color</h1>
        <div className="flex gap-5">
          {allColor.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setColor([...color, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">Carat</h1>
        <div className="flex gap-5">
          {allCarat.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setCarat([...carat, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">clarity</h1>
        <div className="flex gap-5">
          {allClarity.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setClarity([...clarity, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">Shape</h1>
        <div className="flex gap-5">
          {allShape.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setShape([...shape, val])}
            >
              {val}
            </button>
          ))}
        </div>
        // <h1 className="font-bold text-lg mb-2 mt-10 text-center">cut</h1>
        // <div className="flex gap-5">
        //   {allCut.map((val) => (
        //     <button
        //       className="bg-white px-1"
        //       onClick={() => setCut([...cut, val])}
        //     >
        //       {val}
        //     </button>
        //   ))}
        // </div>
        // <h1 className="font-bold text-lg mb-2 mt-10 text-center">
        //   Fluorescence
        // </h1>
        // <div className="flex gap-5">
        //   {allFluorescence.map((val) => (
        //     <button
        //       className="bg-white px-1"
        //       onClick={() => setFluorescence([...fluorescence, val])}
        //     >
        //       {val}
        //     </button>
        //   ))}
        // </div>
        // <h1 className="font-bold text-lg mb-2 mt-10 text-center">
        //   Measurement
        // </h1>
        // <div className="flex gap-5">
        //   {allMeasurement.map((val) => (
        //     <button
        //       className="bg-white px-1"
        //       onClick={() => setMeasurement([...measurement, val])}
        //     >
        //       {val}
        //     </button>
        //   ))}
        // </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">Polish</h1>
        <div className="flex gap-5">
          {allPolish.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setPolish([...polish, val])}
            >
              {val}
            </button>
          ))}
        </div>
        // <h1 className="font-bold text-lg mb-2 mt-10 text-center">Symmetry</h1>
        // <div className="flex gap-5">
        //   {allSymmetry.map((val) => (
        //     <button
        //       className="bg-white px-1"
        //       onClick={() => setSymmetry([...symmetry, val])}
        //     >
        //       {val}
        //     </button>
        //   ))}
        // </div>
        // <h1 className="font-bold text-lg mb-2 mt-10 text-center">AuctionNos</h1>
        // <div className="flex gap-5">
        //   {allAuctionNos.map((val) => (
        //     <button
        //       className="bg-white px-1"
        //       onClick={() => setAuctionNos([...auctionNos, val])}
        //     >
        //       {val}
        //     </button>
        //   ))}
        // </div>
        // <h1 className="font-bold text-lg mb-2 mt-10 text-center">lab</h1>
        // <div className="flex gap-5">
        //   {allLabs.map((val) => (
        //     <button
        //       className="bg-white px-1"
        //       onClick={() => setLab([...lab, val])}
        //     >
        //       {val}
        //     </button>
        //   ))}
        // </div>
        // <h1 className="font-bold text-lg mb-2 mt-10 text-center">
        //   DollarPrice
        // </h1>
        // <div className="flex gap-5">
        //   {allDollarPrice.map((val) => (
        //     <button
        //       className="bg-white px-1"
        //       onClick={() => setDollarPrice([...dollarPrice, val])}
        //     >
        //       {val}
        //     </button>
        //   ))}
        // </div>
      </div>
      <div className="ag-theme-quartz h-[50vh] w-[80vw]">
        <AgGridReact
          rowData={rowData.filter((row) => condition(row))}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          onGridReady={({ api }) => setGridApi(api)}
        />
      </div>
      <button
        className="bg-white px-5 py-2 rounded-lg font-bold text-lg"
        onClick={() => gridApi.exportDataAsCsv()}
      >
        Export
      </button>
    </div>
  );
};

export default GridExample;
