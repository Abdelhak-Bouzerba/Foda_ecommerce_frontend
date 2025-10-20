// Hero Slide data type
export interface HeroSlide {
    id: number;
    image: string;
    headline: string;
    subtext: string;
    ctaText: string;
    ctaLink: string;
}

// Sample slide data - replace with your actual data/API
export const heroSlides: HeroSlide[] = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop&q=80",
        headline: "Summer Collection 2025",
        subtext: "Discover the hottest trends with up to 50% off selected items",
        ctaText: "Shop Now",
        ctaLink: "/shop/summer",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=800&fit=crop&q=80",
        headline: "New Arrivals Just Dropped",
        subtext: "Be the first to wear the latest fashion from top designers",
        ctaText: "Explore Collection",
        ctaLink: "/shop/new-arrivals",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=800&fit=crop&q=80",
        headline: "Exclusive Member Benefits",
        subtext: "Join today and get free shipping on all orders plus early access",
        ctaText: "Join Now",
        ctaLink: "/membership",
    },
    {
        id: 4,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&h=800&fit=crop&q=80",
        headline: "Premium Quality Guaranteed",
        subtext: "Shop with confidence - 30-day returns and lifetime warranty",
        ctaText: "Learn More",
        ctaLink: "/quality-guarantee",
    },
];

export const baseUrl = import.meta.env.VITE_API_URL;
