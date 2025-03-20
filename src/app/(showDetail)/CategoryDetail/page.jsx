import React from 'react'
import Image from 'next/image'
import img from "@/assets/images/study.jpg";
const page = () => {
  return (
    <div className="bg-white mt-32 max-h-full p-20 pb-14 rounded-[50px]">
            <div className="flex justify-end relative">
                 <Image
                      alt="cover"
                      width={300}
                      height={350}
                      className="rounded-3xl drop-shadow-xl absolute -top-52"
                      src={img}
                 />
            </div>
            <div className="space-y-5 mt-48">
                 <div className="space-y-3">
                      <h2 className="text-2xl font-medium">Tom &amp; Jerry</h2>
                      <h3 className="text-xl">
                           by
                           <span className="text-deep-teal font-medium capitalize">
                                William Hanna and Joseph Barbera
                           </span>
                      </h3>
                 </div>
                 <p className="text-justify">
                      Tom &amp; Jerry is a beloved animated series that centers around the ongoing rivalry
                      between Tom, a cat, and Jerry, a mouse. The show is primarily known for its slapstick
                      comedy, with Tom constantly attempting (and failing) to catch Jerry, leading to a
                      variety of humorous, chaotic situations. The series debuted in 1940 by MGM
                      (Metro-Goldwyn-Mayer) and quickly became a hallmark of animation with its expressive
                      characters and exaggerated physical humor. Despite the simple premise, Tom &amp;
                      Jerry has become an enduring cultural phenomenon, winning several Academy Awards for
                      animated shorts and creating a lasting legacy in animation history.
                 </p>
            </div>
       </div>
  )
}

export default page
