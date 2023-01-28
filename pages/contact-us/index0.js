import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getContact } from '../../services';
import { Loader, Layout } from '../../components';
import Image from 'next/image';
import { RichText } from '@graphcms/rich-text-react-renderer';

const Contact = ({ contact }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <Layout metaContent={contact.metaContent} title={contact.title}>
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="px-4 lg:px-0">
          <h1 className="mb-8 text-3xl font-semibold">{contact.title}</h1>

              <RichText
                  content={contact.content.raw.children}
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

          <div className="ad-section">
              <blockquote className="mb-4 bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.html')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <div className=" text-xl font-semibold my-6">
                      “ ADVERTISEMENT”
                  </div>
                    <div className=" flex items-center space-x-3">
                      <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                        <span className=" text-xl font-semibold">Ad {contact.title}</span>
                    </div>
              </blockquote>

          </div>
      </div>
      </div>
    </Layout>
  );
};

export default Contact;

export async function getStaticProps() {
  const contact = (await getContact()) || [];
  return {
    props: { contact },
  };
}
