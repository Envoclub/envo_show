import React from 'react'
import { SparklineComponent ,Inject , SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  console.log({id},{height},{width},{color},{data},{type},{currentColor})
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={4}
      valueType='Numeric'
      fill={color}
      border={{color:color,width:2}}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible:true,
        format:'Co2{x}:data Co2{y}',
        trackLineSettings:{
          visible:true
        }
      
      }
    }
    >


      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine