const BarDataVisits = [
    {name:"Sun", Test: 30},
    {name:"Mon", Test: 44},
    {name:"Tue", Test: 55},
    {name:"Wed", Test: 69},
    {name:"Thu", Test: 60},
    {name:"Fri", Test: 75},
    {name:"Sat", Test: 70},
  ]
  
  const pieData = [
    { name: 'Test 1', value: 500, color:"#fca5a5" },
    { name: 'Test 2', value: 500, color: "#7dd3fc" },
    { name: 'Test 3', value: 500, color: "#86efac" },
    { name: 'Test 4', value: 500, color: "#fdba74" },
  ];
  
  
  const BigChartData = [
    {
      name: 'January',
      Test1: 2000,
      Test2: 2400,
      Test3: 1000,
    },
    {
      name: 'February',
      Test1: 3000,
      Test2: 1098,
      Test3: 2210,
    },
    {
      name: 'March',
      Test1: 1000,
      Test2: 2300,
      Test3: 2290,
    },
    {
      name: 'April',
      Test1: 2780,
      Test2: 3908,
      Test3: 2000,
    },
    {
      name: 'May',
      Test1: 1890,
      Test2: 4800,
      Test3: 2181,
    },
    {
      name: 'June',
      Test1: 2390,
      Test2: 3800,
      Test3: 2500,
    },
    {
      name: 'July',
      Test1: 3490,
      Test2: 4300,
      Test3: 2100,
    },
  ];
  
  const LineData = [
    { name: 'Jan', Test1: 2600, Test2: 2100 },
    { name: 'Feb', Test1: 4800, Test2: 2900 },
    { name: 'Mar', Test1: 5700, Test2: 3400 },
    { name: 'Apr', Test1: 4100, Test2: 2300 },
    { name: 'May', Test1: 6900, Test2: 4200 },
    { name: 'Jun', Test1: 7200, Test2: 4000 },
    { name: 'Jul', Test1: 5800, Test2: 3500 }
  ]
  
  const Radardata = [
    {
      subject: 'Test1',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Test2',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Test3',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Test4',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Test5',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Test6",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  
  const stackedData = [
    {
      name: 'Page A',
      Test: 4000,
      Test2: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      Test: 3000,
      Test2: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      Test: 2000,
      Test2: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      Test: 2780,
      Test2: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      Test: 1890,
      Test2: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      Test: 2390,
      Test2: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      Test: 3490,
      Test2: 4300,
      amt: 2100,
    },
  ];
  
  const data01 = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 45, y: 100 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 100, y: 250 },
  ];
  const data02 = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 120, y: 190 },
  ];
  
  const composedData = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];
  
  const pnData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: -2000,
      pv: -9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: -1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: -3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  export {pnData, composedData, data02, data01,stackedData, Radardata, LineData, BigChartData, pieData, BarDataVisits}