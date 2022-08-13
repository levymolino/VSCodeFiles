import { useState } from "react";

const FilterBar = ({ onLocationFilter, onDestinationFilter, onDateFilter }) => {
  const [filters, setFilters] = useState({
    destination: "",
    location: "",
    from: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "destination":
        onDestinationFilter(value);
        break;
      case "location":
        onLocationFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      case "to":
        break;
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="location">location</label>
        <input
          type="text"
          className="form-control"
          id="location"
          onChange={handleInput("location")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="destination">destination</label>
        <input
          type="text"
          className="form-control"
          id="destination"
          onChange={handleInput("destination")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={handleInput("to")}
        />
      </div>
    </div>
  );
};

export default FilterBar;
