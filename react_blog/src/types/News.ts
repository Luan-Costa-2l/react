export type News = {
    title: string;
    link: string;
    keywords: string[];
    creator: null;
    video_url: null;
    description: string;
    content: null;
    pudDate: string;
    image_url: string | null;
    source_id: string;
    country: string[];
    category: string[];
    language: string;
}
  
export type Props = {
    status: string;
    totalResults: number;
    results: News[];
    nextPage: null;
}