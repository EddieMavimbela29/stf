import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';

const PostDetail = ({ post }) => {

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt=""
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {/*
          <div className="intro-section">
                <h4 className="text-md font-semibold mb-4">
                  {post.introTitle}
                </h4>
                <h3 className="text-md font-semibold mb-4">
                  {post.introTitle}
                </h3>
                <p className="mb-8">
                 { post.introP1P1 }
                 <Link href={`/post/${post.slug}`}>
                   <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
                   {post.introP1Link}
                   </span>
                 </Link>
                 <p>
                   { post.introP2P2 }
                 </p>
                </p>

                <p className="mb-8">
                 { post.introP2P1 }
                 <Link href={`/post/${post.slug}`}>
                   <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
                   {post.introP2Link}
                   </span>
                 </Link>
                 <p>
                   { post.introP1P2 }
                 </p>
                </p>
          </div>
          */}

          </div>
          {/*
          <div className="affiliate1-section">
              <h4 className="text-md font-semibold mb-4">
                {post.affiliate1Title}
              </h4>
              <h3 className="text-md font-semibold mb-4">
                {post.affiliate1Title}
              </h3>
              <div className="relative overflow-hidden shadow-md mb-6">
                <img
                  src={post.affiliate1Image.url}
                  alt=""
                  className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
                />
              </div>
              <blockquote className="bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.html')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <div className=" text-xl font-semibold my-6">
                      “ ADVERTISEMENT”
                  </div>
                    <div className=" flex items-center space-x-3">
                      <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                        <span className=" text-xl font-semibold">Ad {post.affiliate1Title}</span>
                    </div>
              </blockquote>
              <p className="mb-8">
               { post.affiliate1Desc1P1 }
               <Link href={`${post.affiliate1OfferLink}`}>
                 <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
                 {post.affiliate1Desc1Link}
                 </span>
               </Link>
               <p>
                 { post.affiliate1Desc1P2 }
               </p>
              </p>

              <p className="mb-8">
               { post.affiliate1Desc2P1 }
               <Link href={`${post.affiliate1OfferLink}`}>
                 <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
                 {post.affiliate1Desc2Link}
                 </span>
               </Link>
               <p>
                 { post.affiliate1Desc2P2 }
               </p>
              </p>
              <p className="mb-8">
               {post.offer1Text}
              </p>
          </div>
          <div className="affiliate2-section">
            <h3 className="text-md font-semibold mb-4">
                {post.affiliate2Title}
              </h3>
              <div className="relative overflow-hidden shadow-md mb-6">
                <img
                  src={post.affiliate2Image.url}
                  alt=""
                  className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
                />
              </div>
              <blockquote className="bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.html')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <div className=" text-xl font-semibold my-6">
                      “ ADVERTISEMENT”
                  </div>
                    <div className=" flex items-center space-x-3">
                      <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                        <span className=" text-xl font-semibold">Ad {post.affiliate2Title}</span>
                    </div>
              </blockquote>
              <p className="mb-8">
               { post.affiliate2Desc1P1 }
               <Link href={`${post.affiliate2OfferLink}`}>
                 <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
                 {post.affiliate2Desc1Link}
                 </span>
               </Link>
               <p>
                 { post.affiliate2Desc1P2 }
               </p>
              </p>

              <p className="mb-8">
               { post.affiliate2Desc2P1 }
               <Link href={`${post.affiliate2OfferLink}`}>
                 <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
                 {post.affiliate2Desc2Link}
                 </span>
               </Link>
               <p>
                 { post.affiliate2Desc2P2 }
               </p>
              </p>
              <p className="mb-8">
               {post.offer2Text}
              </p>
          </div>
          */}
              <RichText
                  content={post.content.raw.children}
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
                        style={{ color: 'pink' }}
                        className={`transition duration-60 ease transform hover:-translate-y-1 inline-block bg-pink-60 text-lg font-medium text-white cursor-pointer`}
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

          <div className="affiliate6-section">
              <h4 className="text-md font-semibold mb-4">
                {post.affiliate6Title}
              </h4>
              <h3 className="text-md font-semibold mb-4">
                {post.affiliate6Title}
              </h3>
              <blockquote className="mb-4 bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.html')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <div className=" text-xl font-semibold my-6">
                      “ ADVERTISEMENT”
                  </div>
                    <div className=" flex items-center space-x-3">
                      <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                        <span className=" text-xl font-semibold">Ad {post.affiliateTitle}</span>
                    </div>
              </blockquote>
              <p className="mb-8">
               { post.affiliate6Desc1P1 }
               <Link href={`${post.affiliate6OfferLink}`}>
                 <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
                 {post.affiliate6Desc1Link}
                 </span>
               </Link>
               <p>
                 { post.affiliate6Desc1P2 }
               </p>
              </p>

              <p className="mb-8">
               { post.affiliate6Desc2P1 }
               <Link href={`${post.affiliate6OfferLink}`}>
                 <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
                 {post.affiliate6Desc2Link}
                 </span>
               </Link>
               <p>
                 { post.affiliate6Desc2P2 }
               </p>
              </p>
          </div>
           {/*
          <div className="conclusion-section">
             <h3 className="text-md font-semibold mb-4">
                { post.conclusionTitle}
            </h3>
            <div className="relative overflow-hidden shadow-md mb-6">
               <img
                 src={post.conclusionImage.url}
                 alt=""
                 className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
               />
            </div>
            <p className="mb-8">
              {post.conclusionP1P1 }
              <Link href={`${post.affiliateBestOfferLink}`}>
              <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
                {post.affiliateBestOfferText}
              </span>
             </Link>
             <p>{ post.conclusionP1P2 }</p>
            </p>

          <p className="mb-8">
            { post.conclusionP2P1 }
            <Link href={`${post.affiliateBestOfferLink}`}>
             <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">
               {post.affiliateBestOfferText}
             </span>
           </Link>
           <p>{ post.conclusionP2P2 } </p>
          </p>
          <p className="mb-8">
             <Link href={`${post.nextPostLink}`}>
               <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium text-white px-8 py-3 cursor-pointer">

               </span>
             </Link>
          </p>
           </div>
          */}
     </div>
    </>
  );
};

export default PostDetail;
