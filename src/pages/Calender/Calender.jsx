import React from "react";
import "./Calender.scss";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
const Calender = () => {
  return (
    <div className="calender">
      <div className="title d-flex align-items-center justify-content-between">
        <h2>Calender</h2>

        <div className="group d-flex justify-content-end">
          <div class="dropdown m-2">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Toyota
            </button>
            <ul class="dropdown-menu">
              <li>
                <option class="dropdown-item" value="">
                  All
                </option>
              </li>
              <li>
                <option class="dropdown-item" value="New">
                  New
                </option>
              </li>
              <li>
                <option class="dropdown-item" value="Used">
                  Used
                </option>
              </li>
              <li>
                <option class="dropdown-item">Favorite</option>
              </li>
            </ul>
          </div>
          <div class="dropdown m-2">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Time
            </button>
            <ul class="dropdown-menu">
              <li>
                <option class="dropdown-item" value="">
                  All
                </option>
              </li>
              <li>
                <option class="dropdown-item" value="New">
                  New
                </option>
              </li>
              <li>
                <option class="dropdown-item" value="Used">
                  Used
                </option>
              </li>
              <li>
                <option class="dropdown-item">Favorite</option>
              </li>
            </ul>
          </div>
          <div class="dropdown m-2">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Status
            </button>
            <ul class="dropdown-menu">
              <li>
                <option class="dropdown-item" value="">
                  All
                </option>
              </li>
              <li>
                <option class="dropdown-item" value="New">
                  New
                </option>
              </li>
              <li>
                <option class="dropdown-item" value="Used">
                  Used
                </option>
              </li>
              <li>
                <option class="dropdown-item">Favorite</option>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex  ">
        <div className="left">
          {" "}
          <div className="up">
            {" "}
            <FullCalendar
              plugins={[dayGridPlugin, bootstrap5Plugin]}
              initialView="dayGridMonth"
              views={"monthGridYear"}
              themeSystem="bootstrap5"
            />
          </div>
          <div className="down">
            {" "}
            <FullCalendar
              plugins={[timeGridPlugin, bootstrap5Plugin]}
              initialView="timeGridDay"
              views={"monthGridYear"}
              themeSystem="bootstrap5"
            />
          </div>{" "}
        </div>
        <div className="right">
          <FullCalendar
            plugins={[timeGridPlugin, bootstrap5Plugin]}
            initialView="timeGridDay"
            views={"monthGridYear"}
            themeSystem="bootstrap5"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Calender;
