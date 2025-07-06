import React from 'react'
import ArticalCard from './ArticalCard';

const Featured = () => {
  return (
    <div>
      <section>
        <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Featured Articles
            </h2>
          </header>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <ArticalCard />
            </li>

            <li>
              <ArticalCard />
            </li>

            <li>
              <ArticalCard />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Featured