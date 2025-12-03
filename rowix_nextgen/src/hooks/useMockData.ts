import { useState, useEffect } from 'react';
import { DB } from '../data/mockData';
import { 
  UseMockDataReturn, 
  Stat, 
  Reason, 
  Service, 
  HeaderData, 
  HeroData, 
  Work, 
  Testimonial, 
  FAQItem, 
  FooterData 
} from '../types';

/**
 * Custom hook to simulate API data fetching with realistic delay
 * Mimics real backend behavior for impressive demo
 */
export const useMockData = <T>(dataKey: keyof typeof DB | null = null): UseMockDataReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate network delay (1 second)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Return specific data section or entire DB
        const result = dataKey ? DB[dataKey] : DB;
        
        setData(result as T);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
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
export const useHeaderData = () => useMockData<HeaderData>('header');
export const useHeroData = () => useMockData<HeroData>('hero');
export const useStatsData = () => useMockData<Stat[]>('stats');
export const useWhyUsData = () => useMockData<Reason[]>('whyUs');
export const useServicesData = () => useMockData<Service[]>('services');
export const useWorksData = () => useMockData<Work[]>('works');
export const useTestimonialsData = () => useMockData<Testimonial[]>('testimonials');
export const useFAQData = () => useMockData<FAQItem[]>('faq');
export const useFooterData = () => useMockData<FooterData>('footer');
