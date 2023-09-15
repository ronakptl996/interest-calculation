import React from "react";

const InterestMonth = ({ interest, tenure, principleAmount }) => {
  return (
    <div className="month-table">
      <table>
        <tr>
          <th>Month</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Balance</th>
        </tr>
        {[...Array(tenure)].map((elementInArray, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{(interest / tenure).toFixed(2)}</td>
            <td>{((interest / tenure) * (index + 1)).toFixed(2)}</td>
            <td>
              {principleAmount +
                +((interest / tenure) * (index + 1)).toFixed(2)}
            </td>
            {/* <div className="" key={index}>
              {" "}
              Whatever needs to be rendered repeatedly... {interest /
                tenure}{" "}
              {(interest / tenure) * (index + 1)}
            </div> */}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default InterestMonth;
