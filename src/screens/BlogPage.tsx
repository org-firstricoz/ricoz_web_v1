import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import blogPosts from "../constants/blogPost";
import toast from "react-hot-toast";
import ChevronSVGBig from "../components/svgs/ChevronSVGBig";

export default function BlogPage() {
  const [expand, setExpand] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email === "" || !email.includes("@")) {
      toast.error("Please Enter a valid Email");
    } else {
      toast.success("Newsletter Subscribed");
      setEmail("");
    }
  };

  const featuredPosts = blogPosts.slice(0, 4);
  const editorsPicks = blogPosts.slice(3, 6);
  const morePosts = blogPosts.slice(6);

  return (
    <div>
      <Navbar />
      <div className="bg-rz-lategray flex justify-center pt-20 pb-32 text-5xl playfair-display">
        Our Blog
      </div>
      <div className="px-8 py-16 text-black">
        <div className="mb-16 playfair-display">
          <h2 className="text-4xl font-bold mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className={`border-8 rouned outline outline-8 border-[#A0FFC7] outline-[#CAFFE0] p-4 bg-white text-black ${
                  index === 0 ? "lg:col-span-2 row-span-2" : ""
                }`}
              >
                <Link to={`/blog/${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full ${
                      index === 0 ? "h-96" : "h-48"
                    } object-cover`}
                  />
                  <h3 className="text-3xl font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    By {post.author} - {post.readTime} min read
                  </p>
                  <p className="mt-4">{post.snippet}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 flex flex-col md:flex-row playfair-display">
        <div className="flex-3 md:mr-4 mb-8 md:mb-0">
  <h2 className="text-4xl font-bold mb-8">Editor's Picks</h2>
  <div className="grid grid-cols-1 gap-8 border-t-4 border-gray-600">
    {editorsPicks.map((post) => (
      <div
        key={post.id}
        className="border-b-4 border-gray-600 p-4 flex flex-col md:flex-row bg-white text-black"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full md:w-80 h-auto object-cover mb-4 md:mb-0 mr-0 md:mr-4"
        />
        <div className="flex-grow grid grid-col content-center">
          <Link to={`/blog/${post.id}`}>
            <p className="text-sm text-gray-700 mt-2">
              By {post.author} - {post.readTime} min read
            </p>
            <h3 className="text-2xl font-bold">{post.title}</h3>
            <p className="mt-4">{post.snippet}</p>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


          <div className="lg:col-span-2 col-span-1 flex-4 md:ml-4 p-8 text-center text-black">
            <div
              onClick={() => setExpand((x) => !x)}
              className="flex justify-between border-b-2 sm:border-none border-white/40"
            >
              <h3 className="text-black text-sm sm:text-xl sm:mb-4">
                Our News Letter
              </h3>
              <div
                className={`sm:hidden flex ${expand ? "rotate-180" : "rotate-0"}`}
              >
                <ChevronSVGBig />
              </div>
            </div>
            {expand && (
              <div className={`sm:hidden flex flex-col gap-4 mt-2 sm:mt-0`}>
                <h4 className="text-sm sm:text-base text-black">
                  Subscribe to our newsletter to get the latest Blogs..
                </h4>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="flex-1 min-w-0 px-4 focus:outline-none placeholder:text-black bg-transparent border border-r-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div
                    className="w-16 h-16 bg-rz-lategray flex justify-center items-center cursor-pointer "
                    onClick={handleSubmit}
                  >
                    GO
                  </div>
                </div>
              </div>
            )}
            <div className={`sm:flex hidden flex-col gap-4`}>
              <h4 className="text-sm sm:text-base">
                Subscribe to our newsletter to get the latest Blogs..
              </h4>
              <div className="flex">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 min-w-0 placeholder:text-black bg-transparent border border-r-0"
                />
                <div
                  onClick={handleSubmit}
                  className="w-16 h-16 cursor-pointer text-white  bg-rz-lategray flex justify-center items-center"
                >
                  GO
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8 playfair-display">
            More Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {morePosts.map((post) => (
              <div
                key={post.id}
                className="border-8 outline outline-8 outline-[#CAFFE0] border-[#A0FFC7] p-4 bg-white text-black"
              >
                <Link to={`/blog/${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover mt-4"
                  />
                  <h3 className="text-2xl font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    By {post.author} - {post.readTime} min read
                  </p>
                  <p className="mt-4">{post.snippet}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
