import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

class RadarChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.props.data.labels = this.props.labels;
    // console.log("here", data.labels);

    return (
      <div className="radar-chart-container">
        <div className="home-logo-container">Vantage Point</div>
        <div className="radar-chart-results">
          <Radar data={this.props.data} options={this.props.chartOptions} />
        </div>
      </div>
    );
  }
}

export default RadarChart;
