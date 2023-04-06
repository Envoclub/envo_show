import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,Inject,PieSeries } from '@syncfusion/ej2-react-charts';
import { accData } from '../../data/dummy';

const Pie = () => {
  return (
    <AccumulationChartComponent
      height='420px'
      width='400'
      tooltip={{ enable:true }}
    >
      <Inject services={[PieSeries]} ></Inject>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective type="Pie" dataSource={accData} xName="x" yName="y"></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie