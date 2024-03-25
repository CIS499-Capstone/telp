"use client"
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { ChartType, Colors } from 'chart.js';
import { fetchIncidentsByTeacher } from '@/app/lib/data_analysis';

Chart.register(Colors);
interface ChartProps {
    data: {
      labels: string[];
      datasets: {
        label: string;
        data: number[];
        fill: boolean,
        borderColor: string,
        tension: number
      }[];
    };
  }

const AreaChart: React.FC <ChartProps> = ({data}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy any existing chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    
    


    chartInstanceRef.current = new Chart(ctx, {
      type: 'line' as ChartType,
      data: data,
      options:{
        plugins:{
            colors:{
                enabled: true
            },
            title: {
                display: true,
                text: 'Incidents by Teacher'
            }
        }
      },
      
    });

    // Cleanup function to destroy the chart instance on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default AreaChart;