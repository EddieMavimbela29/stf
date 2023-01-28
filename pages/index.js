import { Fragment, useRef, useState, useEffect  } from 'react'
import { FeaturedPosts, HacksPosts } from '../sections/index';
import { PostCard, CategoriesHacks, Categories,
         PostWidget, PostWidgetHacks, CategoriesSection
        } from '../components';
import { getPosts } from '../services';
import { Layout } from '../components';
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home({ posts }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

   useEffect(() => {
     window.addEventListener('load', openModal);
   }, []);

   useEffect(() => {
     Aos.init({
     duration: 2500,
     delay: 400,
   });

 }, []);

{/*}
 const inputEl = useRef(null);
   // 2. Hold a message in state to handle the response from our API.
   const [message, setMessage] = useState("");

   const subscribe = async (e) => {
     e.preventDefault();

     // 3. Send a request to our API with the user's email address.
     const res = await fetch("/api/subscribe", {
       body: JSON.stringify({
         email: inputEl.current.value,
         name: inputEl.current.value,
         birthday: inputEl.current.value,
         course: inputEl.current.value,
         institution: inputEl.current.value
       }),
       headers: {
         "Content-Type": "application/json"
       },
       method: "POST"
     });

     const { error } = await res.json();

     if (error) {
       // 4. If there was an error, update the message in state.
       setMessage(error);

       return;
     }

     // 5. Clear the input value and show a success message.
     inputEl.current.value = "";
     setMessage("Success! 🎉 You are now subscribed to the newsletter.");
   };
*/}

const [email, setEmail] = useState('')
const [name, setName] = useState('')
const [course, setCourse] = useState('')
const [birthday, setBirthday] = useState('')
const [state, setState] = useState('idle')
const [errorMsg, setErrorMsg] = useState(null)

const subscribe = async (e) => {
  e.preventDefault()
  setState('Loading')

  try {
    const response = await axios.post('/api/subscribe', { email, name, course, birthday })
    console.log(response)
    setState('Success')
    console.log('Success')
    setEmail('')
  } catch (e) {
    console.log(e.response.data.error)
    setErrorMsg(e.response.data.error)
    setState('Error')
  }
}

  return (
  <Layout metaContent="home" title="home">
    <div className="container mx-auto px-10 mb-8">
    <FeaturedPosts />

    <CategoriesSection />





    <div className="container mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                        <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Featured News Post</h3>
                            <p className="text-slate-400 max-w-xl">Search your future opportunity with our categories</p>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
                            <a href="/" className="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
                              All Categories
                              <i className="uil uil-arrow-right align-middle"></i>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 col-span-1">
                          <HacksPosts/>
                        </div>
                        <div className="lg:col-span-4 col-span-1">
                            <div className="sticky top-20">
                                <PostWidgetHacks />
                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                                <ul className="list-none text-center mt-8">
                                    <li className="inline"><a href="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="facebook" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="instagram" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="twitter" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="linkedin" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="github" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="youtube" className="h-4 w-4"></i></a></li>
                                    <li className="inline"><a href="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i data-feather="gitlab" className="h-4 w-4"></i></a></li>
                                </ul>
                                <CategoriesHacks />
                            </div>
                        </div>
                    </div>
    </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

    </div>
</Layout>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
