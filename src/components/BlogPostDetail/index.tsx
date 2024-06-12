import { useParams } from 'react-router-dom';
import Navbar from "../navbar";
import Footer from "../footer";
import blogPosts from '../../constants/blogPost';


type RouteParams = {
    postId: string;
};

export default function BlogPostDetail() {
    const { postId } = useParams<RouteParams>();

    if (!postId) {
        return <div className="text-black">Post not found</div>;
    }

    const post = blogPosts.find(post => post.id === parseInt(postId, 10));

    if (!post) {
        return (
            <div>
                <Navbar />
                <div className="px-8 py-16">
                    <div className='text-black text-center text-8xl'>Post not found</div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="px-8 py-16">
                <h1 className="text-5xl text-black font-bold mb-4">{post.title}</h1>
                <p className="text-sm text-gray-500">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
                
                
                <div className="flex justify-center my-8">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className=" w-full max-w-full md:max-w-2xl h-80 object-cover rounded"
                    />
                </div>
                
                <p className="mt-8 text-black">{post.description}</p>
                <div className="mt-4">
                    {post.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2">{tag}</span>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
