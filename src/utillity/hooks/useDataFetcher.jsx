// React
import { useEffect, useState } from "react";
// Third party
import PropTypes from "prop-types";

function useDataFetcher(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error");
        }

        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}

useDataFetcher.propTypes = {
  url: PropTypes.string,
};

export default useDataFetcher;
