import React from 'react'
import Hero from './../../assets/ai.jpg'

const Trending = () => {
  return (
    <div className="group relative block max-w-4/6 h-auto shadow-xl rounded-2xl overflow-hidden sm:min-w-4/5 sm:max-h-2/4">
      <a href="#" className=" bg-black">
        <img
          alt=""
          src={Hero}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Developer
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Trending