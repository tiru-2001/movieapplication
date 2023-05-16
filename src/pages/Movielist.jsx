import React from "react";
import axios from "axios";
import { useEffect } from "react";
import "./movielist.scss";
import Moviecard from "../components/Moviecard";
import { useDispatch, useSelector } from "react-redux";
import { addmovies } from "../reduxfolder/slice";
const Movielist = () => {
  const dispatch = useDispatch();
  const movietext = "Harry";

  const getdata = async () => {
    try {
      let result = await axios.get(
        `http://www.omdbapi.com/?apikey=da979bab&s=${movietext}&type=movie`
      );
      console.log(result);
      dispatch(addmovies(result.data.Search));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  const reduxdata = useSelector((state) => state.movies);
  console.log(reduxdata);
  return (
    <>
      {reduxdata.length !== 0 ? (
        <section className="movielistcontainer">
          {reduxdata.map((val, ind) => {
            return (
              <Moviecard
                key={ind}
                title={val.Title}
                image={val.Poster}
                type={val.Type}
                year={val.Year}
              />
            );
          })}
        </section>
      ) : (
        <section>
          <h1>no data</h1>
        </section>
      )}
    </>
  );
};

export default Movielist;
