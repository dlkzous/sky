import React from 'react';

/**
 * @namespace DetailedView
 */

/**
 * Function that returns a generic component for displaying tabluar data
 * @function DetailedView
 * @params {object} props - React Component props
 * @author Kushal D'Souza
 * @memberOf DetailedView
 */
const DetailedView = (props) => {
  const { data } = props;
  const keys = Object.keys(data[0]);
  // loop through keys of the object and render the header row
  const renderHeaderColums = () => {
    const columns = keys.map((key, index) => {
      const keyString = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;
      return (
        <th key={index} data-field="{keyString}">{keyString}</th>
      );
    });
    return columns;
  };
  // loop through content and render the remaining rows
  const renderRows = () => {
    const rows = data.map((row, rowIndex) => {
      const columns = keys.map((key, columnIndex) =>
        (
        <td key={columnIndex}>{row[key]}</td>
        ));
      return (
        <tr key={rowIndex} >
          {columns}
        </tr>
      );
    });
    return rows;
  };
  return (
    <table className="striped">
      <thead>
        <tr>
        {renderHeaderColums()}
        </tr>
      </thead>

      <tbody>
      {renderRows()}
      </tbody>
    </table>
  );
};

DetailedView.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default DetailedView;
