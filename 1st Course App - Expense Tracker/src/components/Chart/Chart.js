import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({dataPoints}) => {

  const maxValArr = dataPoints.map(el => el.value);
  const maxVal = Math.max(...maxValArr);

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint, index) => (
        <ChartBar 
            key={index}    
            value={dataPoint.value}
            maxValue={maxVal}
            label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
