// pages/book.js
import React from 'react';
import img from '@/assets/images/study.jpg'
import Image from 'next/image';
const page = () => {
  return (
    <div className="relative px-10 py-12 max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-4">
        <span className="text-blue-600">Home</span> &gt; <span>Book Categories</span> &gt; <span className="text-red-600">How Do You Live?</span>
      </nav>

      <div className="relative flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="md:w-3/5">
          <h1 className="text-3xl font-bold">How Do You Live?</h1>
          <p className="text-gray-700 font-semibold mb-4">by Black Monster</p>
          <p className="text-gray-600 leading-relaxed">
            "How Do You Live?" (君たちはどう生きるか, Kimitachi wa Dō Ikiru ka) by Genzaburō Yoshino is a philosophical coming-of-age novel ...
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The book isn’t just about a boy growing up; it’s a call to the readers to reflect on their own lives...
          </p>
        </div>

        {/* Image */}
        <div className="md:w-2/5 relative">
          <div className="absolute right-0 top-1/2 md:top-0 w-40 md:w-48 lg:w-56 shadow-lg">
            <Image src={img} alt="How Do You Live?" layout="responsive" width={200} height={300} className="rounded-lg" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default page;