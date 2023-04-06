import React from 'react';
import { ChartComponent , SeriesCollectionDirective,SeriesDirective,Inject,Legend,Category,StackingColumnSeries, TooltipComponent, Tooltip } from '@syncfusion/ej2-react-charts'
import { ChartsHeader, Stacked as StackedChart } from '../../components';
import { stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({ width,height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="Stack Chart"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={ { border : {width:0 }}}
      tooltip={{ enable:true }}
    >
        <div> i hjhkjlh </div>
    <Inject services = {[Legend,Category,StackingColumnSeries,Tooltip]} />
    </ChartComponent>
  )
}

export default Stacked;