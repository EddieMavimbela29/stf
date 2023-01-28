import React from 'react';
import { getTerms } from '../../services';
import { useRouter } from 'next/router';
import { Loader, Layout } from '../../components';

const Terms = ({ terms }) => {

  return (
    <Layout metaContent={terms.metaContent} title={terms.title}>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="px-4 lg:px-0">
          <h1 className="mb-8 text-3xl font-semibold">{terms.title}</h1>

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

          <div className="ad-section">
              <blockquote className="mb-4 bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.html')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <div className=" text-xl font-semibold my-6">
                      “ ADVERTISEMENT”
                  </div>
                    <div className=" flex items-center space-x-3">
                      <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                        <span className=" text-xl font-semibold">Ad {terms.title}</span>
                    </div>
              </blockquote>

          </div>
      </div>
      </div>
    </Layout>
  );
};

export default Terms;

export async function getStaticProps() {
  const terms = (await getTerms()) || [];
  return {
    props: { terms },
  };
}
