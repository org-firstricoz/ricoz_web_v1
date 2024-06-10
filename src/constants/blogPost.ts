export interface BlogPost {
    id: number;
    title: string;
    author: string;
    date: string;
    snippet: string;
    description: string;
    readTime: number;
    tags: string[];
    image: string; 
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of Technology",
        author: "Alice Johnson",
        date: "2024-05-01",
        snippet: "Technology is rapidly evolving, reshaping all facets of our existence. From AI and Machine Learning to Quantum Computing, these advancements are redefining our world. Blockchain, IoT, and 5G Networks are enhancing digital transactions, connectivity, and creating smart environments. Biotechnology and Renewable Energy are revolutionizing healthcare and energy sectors. Lastly, Autonomous Vehicles, Virtual Reality, and Nanotechnology are creating new experiences and innovations....",
        description: "Technological advancements are shaping our future in exciting ways. Artificial Intelligence and Machine Learning are revolutionizing industries with smart automation and data analysis. Quantum Computing is offering unprecedented computational power and problem-solving capabilities. Blockchain Technology is enhancing security and transparency in digital transactions. The Internet of Things is connecting everyday devices to create smart environments. 5G Networks are accelerating data speeds for improved communication and connectivity. Biotechnology is advancing healthcare with gene editing and personalized medicine. Renewable Energy is driving the shift towards sustainable and clean energy sources. Autonomous Vehicles are transforming transportation with self-driving cars and drones. Virtual Reality is creating immersive experiences for entertainment and education. Lastly, Nanotechnology is enabling innovations in materials science and electronics at a microscopic scale. These technologies are poised to transform our lives, making the future an exciting realm of possibilities.",
        readTime: 5,
        tags: ["Technology", "Future", "Innovation"],
        image: "https://th.bing.com/th/id/OIG1._ZVTPN2V3.zsbIzKaeLW?pid=ImgGn"
    },
    {
        id: 2,
        title: "10 Tips for a Healthy Lifestyle",
        author: "Bob Smith",
        date: "2024-04-15",
        snippet: "Leading a healthy lifestyle doesn't have to be difficult. Here are 10 simple tips to help you stay on track...",
        description: "Discover practical advice and strategies to improve your health and well-being. From nutrition and exercise to mental health and sleep, these tips will guide you towards a healthier lifestyle.",
        readTime: 6,
        tags: ["Health", "Lifestyle", "Tips"],
        image: "https://th.bing.com/th/id/OIG1.7DBHeQKhcnQO_yB32DAu?pid=ImgGn"
    },
    {
        id: 3,
        title: "Exploring the World's Most Beautiful Beaches",
        author: "Charlie Davis",
        date: "2024-03-20",
        snippet: "From the pristine sands of the Maldives to the vibrant shores of the Caribbean, discover the world's most breathtaking beaches...",
        description: "Join us on a journey to some of the most stunning beaches around the globe. Whether you're looking for adventure, relaxation, or natural beauty, these beaches have it all.",
        readTime: 4,
        tags: ["Travel", "Beaches", "Adventure"],
        image: "https://th.bing.com/th/id/OIG4.WA4q9l8l01K4MeKCRKWp?w=1024&h=1024&rs=1&pid=ImgDetMain"
    },
    {
        id: 4,
        title: "The Impact of Social Media on Society",
        author: "Danielle Lee",
        date: "2024-02-28",
        snippet: "Social media has drastically changed the way we communicate and interact. Let's explore its impact on modern society...",
        description: "Social media platforms have transformed communication, business, and personal relationships. This article delves into the positive and negative effects of social media on our daily lives and society as a whole.",
        readTime: 7,
        tags: ["Social Media", "Society", "Communication"],
        image: "https://th.bing.com/th/id/OIG4.wWrSmoLAsNXLCvIilMsL?pid=ImgGn"
    },
    {
        id: 5,
        title: "A Beginner's Guide to Meditation",
        author: "Emily Brown",
        date: "2024-01-10",
        snippet: "Meditation can help reduce stress and improve mental clarity. Here’s a beginner's guide to get you started...",
        description: "Meditation is a powerful tool for achieving mental and emotional well-being. This guide introduces the basics of meditation, including techniques, benefits, and tips for getting started.",
        readTime: 5,
        tags: ["Meditation", "Mindfulness", "Wellness"],
        image: "https://th.bing.com/th/id/OIG4.Xchx9wSsYFUFUycFJrIa?w=1024&h=1024&rs=1&pid=ImgDetMain"
    },
    {
        id: 6,
        title: "Mastering the Art of Cooking",
        author: "Fiona Graham",
        date: "2024-06-07",
        snippet: "Cooking is not just a skill, it's an art form. Unleash your inner chef with these culinary secrets...",
        description: "This article serves as your gateway to the culinary world, offering insights into various cooking techniques, flavor pairings, and kitchen hacks that will elevate your home-cooked meals.",
        readTime: 8,
        tags: ["Cooking", "Culinary Arts", "Recipes"],
        image: "https://th.bing.com/th/id/OIG3.OqUbjrE0DwMYrA.wPNt_?w=1024&h=1024&rs=1&pid=ImgDetMain"
    },
    {
        id: 7,
        title: "The Renaissance of Classical Music",
        author: "George Hayes",
        date: "2024-06-01",
        snippet: "Classical music is experiencing a revival. Discover the timeless beauty of this genre...",
        description: "Explore the rich history and modern interpretations of classical music. Learn about the composers who shaped the genre and the contemporary artists bringing it to new audiences.",
        readTime: 7,
        tags: ["Classical Music", "History", "Culture"],
        image: "https://th.bing.com/th/id/OIG1.FmxoonJSCLC.5bRolFTt?pid=ImgGn"
    },
    {
        id: 8,
        title: "Sustainable Living: A Practical Guide",
        author: "Hannah Scott",
        date: "2024-05-25",
        snippet: "Sustainability is more than a buzzword; it's a lifestyle. Find out how you can make a difference...",
        description: "This guide provides actionable steps towards a more sustainable lifestyle. Covering topics from eco-friendly products to waste reduction, learn how small changes can have a big impact.",
        readTime: 6,
        tags: ["Sustainability", "Environment", "Eco-Friendly"],
        image: "https://th.bing.com/th/id/OIG4.HWKsFJ0ANa3YNZYcawOS?pid=ImgGn"
    },
    {
        id: 9,
        title: "The Secrets of Effective Leadership",
        author: "Ian Jenkins",
        date: "2024-05-18",
        snippet: "Leadership is both an art and a science. Unlock the secrets to becoming a great leader...",
        description: "Whether you're leading a team, a company, or a community, this article outlines the key qualities and strategies of effective leaders and how you can apply them to your own leadership journey.",
        readTime: 7,
        tags: ["Leadership", "Management", "Success"],
        image: "https://th.bing.com/th/id/OIG3.xg3Crs5MAf.0JkWlmAAg?pid=ImgGn"
    },
    {
        id: 10,
        title: "The Wonders of the Universe",
        author: "Julia Knox",
        date: "2024-05-10",
        snippet: "The universe is vast and full of wonders. Embark on an astronomical adventure...",
        description: "From the smallest subatomic particles to the largest galaxies, this article takes you on a tour of the universe. Discover the mysteries of space and what lies beyond our planet.",
        readTime: 9,
        tags: ["Astronomy", "Space", "Science"],
        image: "path/to/image10.jpg"
    }
];

export default blogPosts;
