import React, { useEffect, useState } from 'react';
import api from 'axios';
import ILegislator from '../../interfaces/ILegislator';

const LegislatorSummary: React.FC = () => {

    const [data, setData] = useState<ILegislator[]>([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await api.get('http://localhost:3000/legislators/votes');

        setData(response.data);
    }

    return (
        <div className='w-full flex flex-col'>
            <div className='m-auto w-6xl flex-col'>
                <h2 className="mb-2 mt-1 flex text-4xl font-medium leading-tight text-primary">
                    Legislators Summary
                </h2>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">#Id</th>
                                            <th scope="col" className="px-6 py-4">Legislator</th>
                                            <th scope="col" className="px-6 py-4">Supported bills</th>
                                            <th scope="col" className="px-6 py-4">Opposed Bills</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(d => (
                                                <tr className="border-b dark:border-neutral-500" key={d.id}>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{d.id}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.name}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.supportedBillsCount}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.opposedBillsCount}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LegislatorSummary;