import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { actionLoadGraph, actionAddGraph } from "../actions/actions";
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";

export const App = () => {
  const dispath = useDispatch();
  const loadInfo = () => {
    dispath(actionLoadGraph());
  };
  const addGraph = type => {
    dispath(actionAddGraph(type));
  };
  const { graphs, isFetching, error } = useSelector(state => state);
  console.log(graphs);
	useEffect(() => {
    loadInfo();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="pieCharts">
          {graphs.map(
		  graph => ((graph.graph_type.graph_type==='pie' || graph.graph_type==='pie') && <PieChart key={graph.id} data={graph.data} />
		  ))}
		  
        </div>
        <div className="barCharts">
          {graphs.map(
            graph =>(
              (graph.graph_type.graph_type === "bar" || graph.graph_type==='bar') &&
                <BarChart key={graph.id} data={graph.data} />
              )
          )}
        </div>
      </div>
      <Loader visible={isFetching} type="Circles"></Loader>
      <span className="error">{error}</span>
      <div className="buttons">
        <button
          className="add_button"
          disabled={isFetching}
          onClick={() => addGraph("pie")}
        >
          Add pie graph
        </button>
        <button
          className="add_button"
          disabled={isFetching}
          onClick={() => addGraph("bar")}
        >
          Add bar graph
        </button>
      </div>
    </div>
  );
};
