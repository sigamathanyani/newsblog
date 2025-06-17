import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategorySelection from "./CategorySelection";
import Pagination from "./Pagination";
import BlogCards from "./BlogCards";
import Sidebar from "./Sidebar";
import { countryToCode } from "../utils/countryCode";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // Number of products to show per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {

            let url = `https://newsapi.org/v2/top-headlines?country=&page=${currentPage}&pageSize=${pageSize}&apiKey=a69d935838ae4600b69fbdd247ceee45`;
            if (searchQuery) {
                url += `&q=${searchQuery}`;
            }
            // If a category is selected, add it to the request
            if (selectedCategory) {
                url += `&country=${countryToCode[selectedCategory]}`;
            }else{
                url = `https://newsapi.org/v2/everything?q=all&apiKey=a69d935838ae4600b69fbdd247ceee45`;
            }
            const response = await fetch(url);
            const data = await response.json();
            console.log(countryToCode[selectedCategory]);
            
            console.log("Fetched Blogs:", data.articles);
            
            setBlogs(data.articles || []);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedCategory(searchQuery)
        setCurrentPage(1);
        setActiveCategory(category)
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    // Function to handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
    
    };

    return (
        <div>
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory} />
            </div>

            <div className="mb-6">
                <form onSubmit={handleSearchSubmit} className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery || ''}
                        onChange={handleSearchChange}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-orange-700 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 ">

                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

                <div>

                    <Sidebar />
                </div>
            </div>

            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                blogs={blogs}
                pageSize={pageSize}
            />
        </div>
    );
};

export default BlogPage;
