import React from 'react'

const ArticalCard = () => {
  return (
    <a href="#" className="block  m-4">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="h-40 w-full object-cover sm:h-80 lg:h-55"
      />

      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        Lorem, ipsum dolor.
      </h3>

      <p className="mt-2 max-w-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        reiciendis sequi ipsam incidunt.
      </p>
    </a>
  );
}

export default ArticalCard