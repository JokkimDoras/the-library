import type { HomeLoaderResult } from './homeLoader';
import { useLoaderData,Link } from 'react-router-dom';

function HomePage () {
    const { featuredPackages} = useLoaderData() as HomeLoaderResult;
 const renderedPackages = featuredPackages.map((p) => {
    return <div key={p.name} className='flex flex-col justify-between gap-3 border rounded shadow p-4'>
        <div className='flex flex-col gap-1 border-b border-gray-400'>
            <div className='font-bold text-center'>{p.name}</div>
            <div className='text-sm text-gray-500'>{p.description}</div>
            <div className='text-sm text-gray-500'>{p.maintainers.length} Maintainers</div>
        </div>
        <Link to={`/packages/${p.name}`} className='border rounded border-gray-900 text-center bg-black text-white'>
        View
         </Link>
    </div>
 })

return <div className='container py-12 space-y-8'>
    <div className='space-y-6 text-center'>
        <h1 className='text-6xl font-bold'>
            The NPM Registry
        </h1>
        <p className='mx-auto max-w-[600px] text-pink-500 font-bold '>
        All your npm packages in one place 
        </p>
        <p className='mx-auto max-w-[600px] text-gray-500 font-bold '>
        The NPM Registry is a powerful platform built to help developers search, explore, and analyze JavaScript packages from the npm ecosystem.
With a clean and responsive interface, you can easily find detailed information about libraries — including their description, author, license, repository, and maintainers.
Whether you're building a new project or exploring existing tools, this platform makes discovering the right npm package faster and easier than ever.        </p>
        <div className='mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4'>
            {renderedPackages}

        </div>
    </div>
    </div>
}

export default HomePage;