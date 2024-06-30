import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "../../components/ui/button";

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Time Series (Weekly)",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Time Series (Monthly)",
    lable: "1 Month",
    value: 30,
  },
];
const StockChart = () => {
  const [activeLable, setActiveLable] = useState("1 Day");

  const series = [
    {
      data: [
        [1716606315334, 68815.64466460436],
        [1716609969984, 68726.13871497805],
        [1716613671320, 68743.87758707978],
        [1716616831420, 68696.97429338803],
        [1716620882798, 68603.77919068921],
        [1716624396474, 68790.86585631571],
        [1716627628536, 68816.08783005807],
        [1716631250245, 69073.55340110054],
        [1716635092555, 69377.14519788539],
        [1716638761047, 69060.56125305928],
        [1716642043898, 69083.44269189866],
        [1716645716253, 69005.36551361212],
        [1716649314380, 69018.03004524765],
        [1716652850283, 68879.8403264127],
        [1716656415553, 68931.14146483659],
        [1716660223986, 69058.43556711482],
        [1716663661989, 69205.69972045138],
        [1716667233926, 69175.65607843085],
        [1716670933442, 69103.4914450543],
        [1716674717706, 69160.78533173342],
        [1716678357766, 69212.43529710067],
        [1716682132638, 69227.47513083645],
        [1716685419967, 69151.36220873042],
        [1716689257657, 69163.31272398737],
        [1716692619366, 68894.19465827703],
        [1716696238489, 69044.24042813492],
        [1716699838014, 68966.70450666099],
        [1716703308536, 69151.45869407622],
        [1716706995566, 69118.75862080802],
        [1716710557967, 69313.36213644143],
        [1716714289370, 69144.5906811381],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 450,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLable = (value) => {
    setActiveLable(value);
  };

  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activeLable == item.lable ? "" : "outline"}
            onClick={() => handleActiveLable(item.lable)}
            key={item.lable}
          >
            {item.lable}
          </Button>
        ))}
      </div>

      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          height={450}
          type="area"
        />
      </div>
    </div>
  );
};

export default StockChart;
