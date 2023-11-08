import { useState } from "react";
import "./App.css";
import Preview from "./Component/Preview";
import fetchData from "./module/fetchData";
import PreviewLoading from "./Component/PreviewLoading";
import ErrorMessage from "./Component/ErrorMessage";
function App() {
  const [state, setstate] = useState();
  const getInfo = async (e) => {
    setstate({ loading: "loading" });
    e.preventDefault();
    const obj = {
      url: e.target[0].value,
    };

    const result = await fetchData(
      import.meta.env.VITE_SERVER_URL + "/api/getDetail",
      obj
    );
    if (result.error) {
      setstate(result);
    } else {
      setstate(result);
    }
  };

  return (
    <>
      <div className="container  pt-5 w-100   " style={{ height: "75vh" }}>
        <h1 className="text-center  fw-bold    ">Youtube Video Downloader</h1>
        <p className="text-center mt-3 text-dark">
          {" "}
          Download Youtube video in Two Click ,Fastest and Easy way
        </p>

        <form
          className="row d-flex justify-content-center mt-4"
          onSubmit={getInfo}
        >
          <input
            type="search"
            className="col-lg-6 col-sm-8 col-11  search-box "
            placeholder="Enter the Youtube video url"
          />
          <input
            type="submit"
            className=" fw-bold  mt-sm-0 mt-4 col-sm-3 search-btn col-6 col-md-3 col-lg-2  ms-1 py-sm-0 py-2  "
            value="Download"
          />
        </form>
        {state ? (
          state.error ? (
            <ErrorMessage text={state.error} />
          ) : state.loading ? (
            <PreviewLoading />
          ) : (
            <Preview
              url={state.url}
              formats={state.formats}
              title={state.title}
              img={state.thumbnail}
            />
          )
        ) : (
          ""
        )}
      </div>
      <footer />
    </>
  );
}

export default App;
