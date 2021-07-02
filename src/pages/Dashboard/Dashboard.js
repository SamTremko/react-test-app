import React, { useEffect, useState } from "react";
import { meta, performance } from "../../utils/data-fetcher";
import { deconstructMeta, findMetaEntry } from "../../utils/utilFunctions";
import { Error, Loader, Tile } from "../../components";
import { StyledDashboard } from "./Dashboard.styled";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // allthough the data is local, lets do the fetch properly anyway
  const fetchData = () => {
    setLoading(true);
    try {
      // remove data duplicates with the same "Name"
      const performanceData = [...new Map(performance().map(item => [item["Name"], item])).values()];
      // create metaData array to iterate through
      const metaData = deconstructMeta(meta());
      //enrich performance data with meta data
      const combinedData = performanceData.map((perfEntry) => ({ ...findMetaEntry(perfEntry.Name, metaData), ...perfEntry}));
      setData(combinedData);
    } catch (err) {
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledDashboard>
      {loading ? (
        <Loader>Loading ...</Loader>
      ) : error ? <Error>{error}</Error> : data.map((entry) => !entry.Hidden && <Tile key={entry.Name} entry={entry} />)}
    </StyledDashboard>
  );
};

export default Dashboard;
