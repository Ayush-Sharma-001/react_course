// import React from 'react'

// export default function About() {
//   return (
//       <div className="py-16 bg-white">
//           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//               <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//                   <div className="md:5/12 lg:w-5/12">
//                       <img
//                           src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
//                           alt="image"
//                       />
//                   </div>
//                   <div className="md:7/12 lg:w-6/12">
//                       <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//                             You Just Study and leave everything to us
//                       </h2>
//                       <p className="mt-6 text-gray-600">
//                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
//                           accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
//                           aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
//                       </p>
//                       <p className="mt-4 text-gray-600">
//                           Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
//                           Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
//                       </p>
//                   </div>
//               </div>
//           </div>
//       </div>
//   );
// }

import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-700 md:px-12 xl:px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              className="w-full "
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Unlock Your Learning Potential
            </h2>
            <p className="text-base md:text-lg mb-4">
            Welcome to SAJ, your premier destination for self-study and concentrated learning. At SAJ, we're committed to revolutionizing the way individuals approach their educational journey. Whether you're a student seeking to supplement your traditional classroom learning, a professional aiming to upskill, or a lifelong learner eager to explore new horizons, our platform offers a wealth of resources tailored to your needs.
            </p>
            <p className="text-base md:text-lg mb-4">
              Our platform offers a comprehensive range of courses designed to suit your learning needs. With expert instructors and interactive learning resources, you can unlock your full potential and achieve your educational goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
