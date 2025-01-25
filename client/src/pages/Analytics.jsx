import { useEffect, useState } from "react";
import { PieChart, BarChart, LineChart } from '@opd/g2plot-react';

const Analytics = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pieData, setPieData] = useState(null);
    const [barData, setBarData] = useState(null);
    const [lineData, setLineData] = useState(null);

    const getChartInfo = async(apiLink, setter) => {
        try {
            const res = await fetch(apiLink);
            const fin = await res.json();
            console.log("Fetched data:", fin); 
            setter(fin); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const pieConfig = {
        autoFit: true,
        padding: 'auto',
        radius: 1,
        data: pieData,
        angleField: 'value',
        colorField: 'type',
        color: ['#120F02', '#241E03', '#362C05', '#483B06', '#5B4A08', '#6D590A'], 
        label: { visible: true, type: 'inner' },
        legend: { visible: true }
    };
    const BarConfig = {
        autoFit: true,
        xField: 'Number of guests',
        yField: 'Month',
        smooth: true,
        data: barData,
    };
    const LineConfig = {
        autoFit: true,
        xField: 'Year',
        yField: 'Number of guests',
        smooth: true,
        data: lineData
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        getChartInfo("http://localhost:3000/analytics/pie", setPieData); 
        getChartInfo("http://localhost:3000/analytics/bar", setBarData); 
        getChartInfo("http://localhost:3000/analytics/line", setLineData); 

        return () => clearTimeout(timer); 
    }, []);

    if (isLoading) {
        return (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
                <div className="loader"></div>
            </div>
        );
    }    

    return (
        <section className="layer6 spacer w-screen flex flex-col items-center justify-center px-[15%] py-10 max-[1000px]:px-[7.5%]">
            {/* Charts container */}
            <div className="w-full flex justify-between items-center text-main-light">
                {/* Bar chart */}
                <div className="w-5/12 flex flex-col items-center justify-center">
                    <h2 className="py-10 text-3xl">Number of guests in each month</h2>
                    {barData !== null ? <BarChart {...BarConfig} className="w-[100%] bg-main-dark text-main-dark px-10 py-5 rounded-lg" /> : <p>Data not loaded</p>}
                </div>

                {/* Pie chart */}
                <div className="w-5/12 flex flex-col items-center justify-center">
                    <h2 className="py-10 text-3xl">Guest nationality in percentage</h2>
                    {pieData !== null ? <PieChart {...pieConfig} className="w-[100%] bg-main-dark text-main-dark px-10 py-5 rounded-lg" /> : <p>Data not loaded</p>}
                </div>
            </div>

            {/* line chart div */}
            <div className="w-full py-20 flex flex-col items-center justify-center text-main-light">
                <h2 className="py-10 text-3xl">Number of guests in each year</h2>
                {lineData !== null ? <LineChart {...LineConfig} className="w-[100%] bg-main-dark text-main-dark px-10 py-10 rounded-lg" /> : <p>Data not loaded</p>}
            </div>
        </section>
    );
};

export default Analytics;