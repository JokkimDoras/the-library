import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from 'react-router-dom';


function DetailsPage () {
const { details } = useLoaderData() as DetailsLoaderResult

    return (<div className="space-y-4">
        <h1 className="text-3xl font-bold my-4">
            {details.name}
        </h1>
        <div>
            <h3 className="text-lg font-bold">
                Description
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                {details.description}
            </div>
        </div>

        <div>
            <h3 className="text-lg font-bold">
                License
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                {details.license}
            </div>
        </div>


        <div>
            <h3 className="text-lg font-bold">
                Author
            </h3>
            <div className="p-3 bg-gray-200 rounded">
             <span className="font-bold">  Name: </span> {details.author?.name || 'Name not Found !'} 
                <br/>
                <span className="font-bold">  Email: </span> {details.author?.email || 'Email not Found!'}
            </div>
        </div>

        <div>
            <h3 className="text-lg font-bold">
                Readme
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                {details.readme || 'Not Found!'}
            </div>
        </div>

        <div>
            <h3 className="text-lg font-bold">
                Maintaniner
            </h3>
            <div className="p-3 bg-gray-200 rounded">
            <span className="font-bold">  Name: </span> {details.maintainers?.[0]?.name || 'Not Found'}
                <br/>
                <span className="font-bold">  Email: </span> {details.maintainers?.[1]?.email || 'Not Found'}
            </div>
        </div>


        
        <div>
            <h3 className="text-lg font-bold">
                How to Install
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                {`npm install ${details.name || '---save--name--'}`}
            </div>
        </div>

        <div>
            <h3 className="text-lg font-bold">
                Home Page
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                {details?.homepage || 'Not Found'}
            </div>
        </div>

        <div>
            <h3 className="text-lg font-bold">
                Repository
            </h3>
            <div className="p-3 bg-gray-200 rounded">
             <span className="font-bold">  URL: </span> {details.repository?.url || 'Not Found !'}
               <br/>
               <span className="font-bold">  Type: </span> {details.repository?.type || 'Not Found !'}
            </div>
        </div>

        
    </div>
    )
}

export default DetailsPage;