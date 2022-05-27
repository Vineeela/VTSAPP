// import React, { useState, useEffect } from "react";
// import "./PanicStatus.css";

// //Expenses for the month

// const data = [
//   { name: "Jan", expense: 40 },
//   { name: "Feb", expense: 20 },
//   { name: "Mar", expense: 60 },
//   { name: "Apr", expense: 43 },
//   { name: "May", expense: 56 },
//   { name: "June", expense: 30 },
//   { name: "July", expense: 55 },
//   { name: "Aug", expense: 100 },
//   { name: "Sep", expense: 60 },
//   { name: "Oct", expense: 45 },
//   { name: "Nov", expense: 15 },
//   { name: "Dec", expense: 10 },
// ];

// function Chartss() {
//   const [expensesData] = useState(data);
//   const [namesData] = useState(data);
//   const maxExpense = 130;
//   const chartHeight = maxExpense + 20;
//   const barWidth = 20;
//   const barMargin = 15;
//   const numberofBars = expensesData.length;
//   let width = numberofBars * (barWidth + barMargin);

//   // Calculate highest expense for the month
//   const calculateHighestExpense = (data) =>
//     data.reduce((acc, cur) => {
//       const { expense } = cur;
//       return expense > acc ? expense : acc;
//     }, 0);

//   const [highestExpense] = useState(
//     calculateHighestExpense(data)
//   );

//   useEffect(() => {
//     console.log(JSON.stringify(expensesData));
//     console.log(highestExpense);
//   });

//   useEffect(() => {
//     console.log(JSON.stringify(namesData));
//     console.log(namesData);
//   });

//   return (
//     <>
//       <Chart height={chartHeight} width={width}>
//         {expensesData.map((data, index) => {
//           const barHeight = data.expense;
//           return (
//             <Bar
//               key={data.name}
//               x={index * (barWidth + barMargin)}
//               y={chartHeight - barHeight}
//               width={barWidth}
//               height={barHeight}
//               expenseName={data.name}
//             />
            
        

//           );
//         })}
//       </Chart>
//     </>
//   );
// }

// const Chart = ({ children, width, height }) => (
//   <svg
//     viewBox={`0 0 ${width} ${height}`}
//     width="66%"
//     height="20%"
//     preserveAspectRatio="xMidYMax meet"
//   >
//     {children}
//   </svg>
// );
// const Bar = ({ x, y, width, height, expenseName, highestExpense }) => (
//   <>
//     <rect
//       x={x}
//       y={y}
//       width={width}
//       height={height}
//       fill={highestExpense === height ? `blue` : `blue`}
//     />
//     <text x={x + width / 2} y={y - 3}>
//       {/* {highestname === height ? `${Name}: ${height}` : `${height}`} */}
//     </text>
//   </>
// )


// export default Chartss;



import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Hearts',
    value: 4000,

  },
  {
    name: 'Clubs',
    value: 3000,
 
  },
  {
    name: 'Diamonds',
    value: 2000,
  
  },
  {
    name: 'Spades',
    value: 2780,

  },
  
];

function Chartss() {
  
  const CustomIcon = (props) => {
    const {x,y,payload} = props

    if(payload.value==='Clubs')
    return (
      <svg  x={x} y={y} width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 1a3.25 3.25 0 0 0-3.25 3.25c0 .186 0 .29.016.41.014.12.045.27.12.527l.19.665-.692-.028a3.25 3.25 0 1 0 2.357 5.334.5.5 0 0 1 .844.518l-.003.005-.006.015-.024.055a21.893 21.893 0 0 1-.438.92 22.38 22.38 0 0 1-1.266 2.197c-.013.018-.02.05.001.09.01.02.021.03.03.036A.036.036 0 0 0 5.9 15h4.2c.01 0 .016-.002.022-.006a.092.092 0 0 0 .029-.035c.02-.04.014-.073.001-.091a22.875 22.875 0 0 1-1.704-3.117l-.024-.054-.006-.015-.002-.004a.5.5 0 0 1 .838-.524c.601.7 1.516 1.168 2.496 1.168a3.25 3.25 0 1 0-.139-6.498l-.699.03.199-.671c.14-.47.14-.745.139-.927V4.25A3.25 3.25 0 0 0 8 1zm2.207 12.024c.225.405.487.848.78 1.294C11.437 15 10.975 16 10.1 16H5.9c-.876 0-1.338-1-.887-1.683.291-.442.552-.88.776-1.283a4.25 4.25 0 1 1-2.007-8.187 2.79 2.79 0 0 1-.009-.064c-.023-.187-.023-.348-.023-.52V4.25a4.25 4.25 0 0 1 8.5 0c0 .14 0 .333-.04.596a4.25 4.25 0 0 1-.46 8.476 4.186 4.186 0 0 1-1.543-.298z"/>
    </svg>
    )

    if(payload.value==='Hearts')
    return (
      <svg  x={x} y={y} width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
     <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
    </svg>
    )

    if(payload.value==='Diamonds')
    return (
      <svg  x={x} y={y} width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
     <path d="M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468zM6.848.613a1.39 1.39 0 0 1 2.304 0l4.56 6.468a1.61 1.61 0 0 1 0 1.838l-4.56 6.468a1.39 1.39 0 0 1-2.304 0L2.288 8.92a1.61 1.61 0 0 1 0-1.838L6.848.613z"/>

    </svg>
    )

    if(payload.value==='Spades')
    return (
      <svg  x={x} y={y} width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0a.5.5 0 0 1 .429.243c1.359 2.265 2.925 3.682 4.25 4.882.096.086.19.17.282.255C14.308 6.604 15.5 7.747 15.5 9.5a4 4 0 0 1-5.406 3.746c.235.39.491.782.722 1.131.434.659-.01 1.623-.856 1.623H6.04c-.845 0-1.29-.964-.856-1.623.263-.397.51-.777.728-1.134A4 4 0 0 1 .5 9.5c0-1.753 1.192-2.896 2.539-4.12l.281-.255c1.326-1.2 2.892-2.617 4.251-4.882A.5.5 0 0 1 8 0zM3.711 6.12C2.308 7.396 1.5 8.253 1.5 9.5a3 3 0 0 0 5.275 1.956.5.5 0 0 1 .868.43c-.094.438-.33.932-.611 1.428a29.247 29.247 0 0 1-1.013 1.614.03.03 0 0 0-.005.018.074.074 0 0 0 .024.054h3.924a.074.074 0 0 0 .024-.054.03.03 0 0 0-.005-.018c-.3-.455-.658-1.005-.96-1.535-.294-.514-.57-1.064-.664-1.507a.5.5 0 0 1 .868-.43A3 3 0 0 0 14.5 9.5c0-1.247-.808-2.104-2.211-3.38L12 5.86c-1.196-1.084-2.668-2.416-4-4.424-1.332 2.008-2.804 3.34-4 4.422l-.289.261z"/>

    </svg>
    )
    

    return (
      <svg  x={x} y={y} width="26" height="26" fill="red" viewBox="0 0 16 16">
      <path d="M8 1a3.25 3.25 0 0 0-3.25 3.25c0 .186 0 .29.016.41.014.12.045.27.12.527l.19.665-.692-.028a3.25 3.25 0 1 0 2.357 5.334.5.5 0 0 1 .844.518l-.003.005-.006.015-.024.055a21.893 21.893 0 0 1-.438.92 22.38 22.38 0 0 1-1.266 2.197c-.013.018-.02.05.001.09.01.02.021.03.03.036A.036.036 0 0 0 5.9 15h4.2c.01 0 .016-.002.022-.006a.092.092 0 0 0 .029-.035c.02-.04.014-.073.001-.091a22.875 22.875 0 0 1-1.704-3.117l-.024-.054-.006-.015-.002-.004a.5.5 0 0 1 .838-.524c.601.7 1.516 1.168 2.496 1.168a3.25 3.25 0 1 0-.139-6.498l-.699.03.199-.671c.14-.47.14-.745.139-.927V4.25A3.25 3.25 0 0 0 8 1zm2.207 12.024c.225.405.487.848.78 1.294C11.437 15 10.975 16 10.1 16H5.9c-.876 0-1.338-1-.887-1.683.291-.442.552-.88.776-1.283a4.25 4.25 0 1 1-2.007-8.187 2.79 2.79 0 0 1-.009-.064c-.023-.187-.023-.348-.023-.52V4.25a4.25 4.25 0 0 1 8.5 0c0 .14 0 .333-.04.596a4.25 4.25 0 0 1-.46 8.476 4.186 4.186 0 0 1-1.543-.298z"/>
    </svg>
    )
    
  }
 
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
      
              <XAxis dataKey="name" tick={<CustomIcon/>}/>
              <YAxis />
              <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}


export default Chartss;