import './style.scss'
import blog from '../../assets/png/blogCAA.webp'
import { blogFetch } from './api.js'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const Blog = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        const blogData = async () => {
            try {
                const data = await blogFetch();
                setBlogs(data.response);


            }
            catch (error) {
                console.error(error);
            }
        }
        blogData();
    }, []);
    const { data } = blogs;
    const { posts , subscribeLink} = data || {};
    const { title, link, description, content, image  } = posts || {};



    
    const navigate = useNavigate();
    const readMore = ()=>{
        navigate(window.open(posts?.[0]?.link));
    }
    const subLink = ()=>{
        navigate(window.open(subscribeLink));
    }
    
    return (
        <>

            <div className="blogContainer">
                <h2 className='blogHeading'>Blogs</h2>

                <div className="blogContent">
                    <div className="leftBlogContent">
                        <img src={posts?.[0]?.image} alt="graph" className='blogImg' />
                        <p className='dateBlog'>Jul 29,2026</p>
                        <h3 className='factBlog'>{posts?.[0]?.title}</h3>
                        <div className='paraBlog'>{posts?.[0]?.description}</div> <br />
                        <button className='blogRead' onClick={readMore} >Read More</button>
                    </div>
                    <div className="rightBlogContent">
                        <h3 className='rightHead'>What does belonging feel like?</h3>
                        <div className='blogP'>A quiet exploration of how people in Chandigarh experience home through memories, everyday rituals, and shared spaces.</div> <br />
                        <button className='blogSub' onClick={subLink}>Subscribe to our newsletter</button> <br />
                        <span className='blogDesc'>Check out all our letters on Substack ✨</span>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Blog;