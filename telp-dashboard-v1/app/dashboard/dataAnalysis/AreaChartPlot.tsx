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
            tension: number,
            xAxisID: string
        }[];
    };
}

const AreaChart: React.FC<ChartProps> = ({ data }) => {
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
            options: {
                plugins: {
                    colors: {
                        enabled: true
                    },
                    title: {
                        display: true,
                        text: 'Incidents by Time'
                    }
                },
            
                    responsive: true,
                    scales: {
                        x: {
                            display: false,
                            title: {
                                display: true,
                                text: 'Time',
                                // color: '#911',
                                // font: {
                                //     family: 'Comic Sans MS',
                                //     size: 20,
                                //     weight: 'bold',
                                //     lineHeight: 1.2,
                                // },
                                // padding: { top: 20, left: 0, right: 0, bottom: 0 }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Incident Count',
                                
                            },
                            ticks:{
                                callback(tickValue, index, ticks) {
                                    return parseInt(tickValue);
                                },
                            }
                           
                        }
                    }
                }

            });

        // Cleanup function to destroy the chart instance on unmount
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    });

    return <canvas ref={chartRef}></canvas>;
};

export default AreaChart;