import { useState } from "react";

function FilmYear({ setDataNew, setShow, data }) {
  const [active, setActive] = useState("");

  const handleClick = (date, e) => {
    setShow(true);
    setDataNew(data.filter((item) => item.date == date));
    setActive(date);
   
  };

  return (
    <div className="col-12 col-lg-1">
      <div
        className="nav nav-pills d-flex align-items-start "
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {data.map((item, index) => {
          const { date, id } = item;
          return (
            <button
              key={id}
              className={
                active == date
                  ? "activeBtn border-0 px-2 m-2 fs-4 fw-bold text-secondary"
                  : " border-0 px-2 m-2 fs-4 fw-bold text-secondary"
              }
              id="v-pills-home-tab"
              type="button"
              role="tab"
              onClick={(e) => handleClick(date, e)}
            >
              {date}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilmYear;
