import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAbout } from '../../services';
import { Loader, Layout } from '../../components';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';

const About = ({ about }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <Layout metaContent={about.metaContent} title={about.title}>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
        {/*   <img
            src={about.aboutImage.url}
            alt=""
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
          */}
        </div>

        <div className="px-4 lg:px-0">
          <h1 className="mb-8 text-3xl font-semibold">{about.title}</h1>
        {/*  <RichText
                  content={about.content.raw.children}
                  renderers={{
                    p: ({ children }) => <p className={`mb-8`}>{children}</p>,
                    h1: ({ children }) => <h1 className={`text-xl font-semibold mb-4`}>{children}</h1>,
                    h3: ({ children }) => <h3 className={`text-xl font-semibold mb-4`}>{children}</h3>,
                    h4: ({ children }) => <h4 className={`text-xl font-semibold mb-4`}>{children}</h4>,
                    blockquote: ({ children }) => <blockquote className={`mb-8 bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.html')] bg-cover bg-no-repeat bg-center my-8 text-white`}>{children}</blockquote>,

                    a: ({ children, href, openInNewTab }) => (
                      <a
                        href={href}
                        target={openInNewTab ? '_blank' : '_self'}
                        style={{ color: 'green' }}
                        className={`transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer`}
                        rel="noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    img: ({ src, altText, height, width  }) => (
                      <Image
                        src={src}
                        alt={altText}
                        width={width}
                        height={height}
                      />
                    ),
                    bold: ({ children }) => <strong>{children}</strong>,
                    italic: ({ children }) => <em>{children}</em>,
                    underline: ({ children }) => <u>{children}</u>,

                  }}
                />
                */}
                <section className="section py-14" id="home">
       <div className="container">
           <div className="lg:flex justify-center">
               <div className="lg:w-2/3 mx-2">
                   <div className="text-center">
                       <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                           We provide a absolute list of Superior digital services.
                       </h1>
                       <p className="text-base text-gray-400">We create digital assets and we're focused on Web Technologies and Design,
                           based on London, United Kingdom. We build creative & professional themes.</p>
                   </div>
               </div>
           </div>
       </div>
   </section>



   <section className="section py-10">
       <div className="container">
           <div className="grid lg:grid-cols-3 gap-8">
               <div>
                   <div className="p-5">
                       <div className="text-5xl text-blue-500">
                           <i className="pe-7s-leaf"></i>
                       </div>
                       <h4 className="uppercase text-base my-3">Branding</h4>

                       <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                   </div>
               </div>

               <div>
                   <div className="p-5">
                       <div className="text-5xl text-blue-500">
                           <i className="pe-7s-helm"></i>
                       </div>
                       <h4 className="uppercase text-base my-3">Highly customizable</h4>

                       <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                   </div>
               </div>

               <div>
                   <div className="p-5">
                       <div className="text-5xl text-blue-500">
                           <i className="pe-7s-airplay"></i>
                       </div>
                       <h4 className="uppercase text-base my-3">Responsive design</h4>

                       <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                   </div>
               </div>

               <div>
                   <div className="p-5">
                       <div className="text-5xl text-blue-500">
                           <i className="pe-7s-coffee"></i>
                       </div>
                       <h4 className="uppercase text-base my-3">User Experience</h4>

                       <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                   </div>
               </div>

               <div>
                   <div className="p-5">
                       <div className="text-5xl text-blue-500">
                           <i className="pe-7s-rocket"></i>
                       </div>
                       <h4 className="uppercase text-base my-3">Optimised for Speed</h4>

                       <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                   </div>
               </div>

               <div>
                   <div className="p-5">
                       <div className="text-5xl text-blue-500">
                           <i className="pe-7s-headphones"></i>
                       </div>
                       <h4 className="uppercase text-base my-3">Dedicated support</h4>

                       <p className="text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                   </div>
               </div>
           </div>
       </div>
   </section>
          <div className="ad-section">
              <blockquote className="mb-4 bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.html')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <div className=" text-xl font-semibold my-6">
                      “ ADVERTISEMENT”
                  </div>
                    <div className=" flex items-center space-x-3">
                      <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                        <span className=" text-xl font-semibold">Ad {about.title}</span>
                    </div>
              </blockquote>
          </div>
          </div>
      </div>
    </Layout>
  );
};

export default About;

export async function getStaticProps() {
  const about = await getAbout();
  return {
    props: {
      about: about
     },
  };
}
