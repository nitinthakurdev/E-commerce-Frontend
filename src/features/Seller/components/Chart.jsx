import React from 'react'
import {Chart as ChartJS ,defaults} from "chart.js/auto"
import {Bar,Doughnut,Line} from "react-chartjs-2"


defaults.maintainAspectRatio = false
defaults.responsive = true

const Chart = () => {

    const revenue = [
        {
          "label": "Jan",
          "revenue": 64854,
          "cost": 32652
        },
        {
          "label": "Feb",
          "revenue": 54628,
          "cost": 42393
        },
        {
          "label": "Mar",
          "revenue": 117238,
          "cost": 50262
        },
        {
          "label": "Apr",
          "revenue": 82830,
          "cost": 64731
        },
        {
          "label": "May",
          "revenue": 91208,
          "cost": 41893
        },
        {
          "label": "Jun",
          "revenue": 103609,
          "cost": 83809
        },
        {
          "label": "Jul",
          "revenue": 90974,
          "cost": 44772
        },
        {
          "label": "Aug",
          "revenue": 82919,
          "cost": 37590
        },
        {
          "label": "Sep",
          "revenue": 62407,
          "cost": 43349
        },
        {
          "label": "Oct",
          "revenue": 82528,
          "cost": 45324
        },
        {
          "label": "Nov",
          "revenue": 56979,
          "cost": 47978
        },
        {
          "label": "Dec",
          "revenue": 87436,
          "cost": 39175
        }
      ]
  return (
    <div className='px-20 py-2 bg-white' >
        <h2 className='text-2xl font-bold text-gray-500 py-4' >Welcome To Brand Seller Account </h2>
        <p className='  pb-5' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi quae incidunt natus facilis iure vero officiis minus vel ratione.</p>
        <div className='bg-slate-100 h-[20rem] w-full  rounded-xl px-3 py-2 ' >
            <Line
            data={{
                labels:revenue.map((data)=>data.label),
                datasets:[
                    {label:"Revenue",
                        data:revenue.map((item)=>item.revenue),
                        backgroundColor:"#064FF0",
                        borderColor:"#064FF0"
                    },
                    {
                        label: "Cost",
                        data: revenue.map((data) => data.cost),
                        backgroundColor: "#FF3030",
                        borderColor: "#FF3030",
                      },
                ]
            }}
            />
        </div>
        <div className='flex justify-between w-full py-7' >
            <div className='w-[45%] h-[20rem] bg-slate-100 py-3 px-3 rounded-xl' >
                <Bar
                data={{
                    labels:["A","B","C"],
                    datasets:[
                        {
                            label:"Revenue",
                            data:[200,300,400],
                            borderRadius:5
                        },
                        {
                            label:"Loss",
                            data:[100,98,200],
                            borderRadius:5
                        },
                    ]
                }} 
                />
            </div>
            <div className='w-[45%] h-[20rem] bg-slate-100 py-3 px-3 rounded-xl' >
            <Doughnut
                data={{
                    labels:["A","B","C"],
                    datasets:[
                        {
                            label:"Count",
                            data:[200,300,400],
                            borderRadius:5
                        }
                    ]
                }} 
                />
            </div>
        </div>
    </div>
  )
}

export default Chart