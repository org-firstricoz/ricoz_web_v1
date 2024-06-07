
import { Link } from 'react-router-dom';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import blogPosts from '../constants/blogPost';

export default function BlogPage() {
  return (
    <div>
      <Navbar/>
      <div className="bg-rz-lategray flex justify-center pt-20 pb-32 text-5xl playfair-display">Our Blog</div>
      <div className="px-8 py-16">
        {blogPosts.map((post) => (
          <div key={post.id} className="mb-12 border-b-2 pb-8">
            <Link to={`/blog/${post.id}`}>
              <h2 className="text-3xl text-black font-bold">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
            <p className="mt-4 text-black">{post.snippet}</p>
            <div className="mt-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
