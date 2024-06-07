export interface BlogPost {
    id: number;
    title: string;
    author: string;
    date: string;
    snippet: string;
    description: string;
    tags: string[];
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of Technology",
        author: "Alice Johnson",
        date: "2024-05-01",
        snippet: "Technology is evolving at a rapid pace, transforming every aspect of our lives...",
        description: "In this article, we explore how technological advancements are shaping our future. From AI and machine learning to quantum computing and beyond, learn about the innovations that are set to redefine our world.",
        tags: ["Technology", "Future", "Innovation"]
    },
    {
        id: 2,
        title: "10 Tips for a Healthy Lifestyle",
        author: "Bob Smith",
        date: "2024-04-15",
        snippet: "Leading a healthy lifestyle doesn't have to be difficult. Here are 10 simple tips to help you stay on track...",
        description: "Discover practical advice and strategies to improve your health and well-being. From nutrition and exercise to mental health and sleep, these tips will guide you towards a healthier lifestyle.",
        tags: ["Health", "Lifestyle", "Tips"]
    },
    {
        id: 3,
        title: "Exploring the World's Most Beautiful Beaches",
        author: "Charlie Davis",
        date: "2024-03-20",
        snippet: "From the pristine sands of the Maldives to the vibrant shores of the Caribbean, discover the world's most breathtaking beaches...",
        description: "Join us on a journey to some of the most stunning beaches around the globe. Whether you're looking for adventure, relaxation, or natural beauty, these beaches have it all.",
        tags: ["Travel", "Beaches", "Adventure"]
    },
    {
        id: 4,
        title: "The Impact of Social Media on Society",
        author: "Danielle Lee",
        date: "2024-02-28",
        snippet: "Social media has drastically changed the way we communicate and interact. Let's explore its impact on modern society...",
        description: "Social media platforms have transformed communication, business, and personal relationships. This article delves into the positive and negative effects of social media on our daily lives and society as a whole.",
        tags: ["Social Media", "Society", "Communication"]
    },
    {
        id: 5,
        title: "A Beginner's Guide to Meditation",
        author: "Emily Brown",
        date: "2024-01-10",
        snippet: "Meditation can help reduce stress and improve mental clarity. Here’s a beginner's guide to get you started...",
        description: "Meditation is a powerful tool for achieving mental and emotional well-being. This guide introduces the basics of meditation, including techniques, benefits, and tips for getting started.",
        tags: ["Meditation", "Mindfulness", "Wellness"]
    }
];

export default blogPosts;
