import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
          {/* <-----------------------------------Table Filed------------------------------------> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>
                <input type="text" placeholder="Search Filed" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sandeep</td>
            <td>25</td>
            <td>Kolkata</td>
            <td>
              <button>Edid</button>
            </td>
            <td>
              <button>Remove</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Anurag</td>
            <td>26</td>
            <td>Allahabad</td>
            <td>
              <button>Edid</button>
            </td>
            <td>
              <button>Remove</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Aishwariya</td>
            <td>23</td>
            <td>Kerla</td>
            <td>
              <button>Edid</button>
            </td>
            <td>
              <button>Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
     {/* <-----------------------------------Table Input Document Filed------------------------------------> */}
    <table>
        <td>
            <input type="text" placeholder="Nmae" />
            <input type="text" placeholder="Age" />
            <input type="text" placeholder="City" />
        </td>
        <td>
            <button>Add</button>
            <button>Edit</button>
        </td>
    </table>
    </div>
  );
};

export default Home;
