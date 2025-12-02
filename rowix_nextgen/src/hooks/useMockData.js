import { useState, useEffect } from 'react';
import { DB } from '../data/mockData.js';


export const useMockData = (dataKey = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate network delay (1 second)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Return specific data section or entire DB
        const result = dataKey ? DB[dataKey] : DB;
        
        setData(result);
      } catch (err) {
        setError(err.message);
        console.error('Mock API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataKey]);

  return { data, loading, error };
};

// Convenience hooks for specific data sections
export const useHeroData = () => useMockData('hero');
export const useStatsData = () => useMockData('stats');
export const useWhyUsData = () => useMockData('whyUs');
export const useServicesData = () => useMockData('services');
export const useWorksData = () => useMockData('works');
export const useTestimonialsData = () => useMockData('testimonials');
export const useFAQData = () => useMockData('faq');
