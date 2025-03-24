import React, { useEffect, useState } from 'react';
import api from 'axios'
import IBill from '../../interfaces/IBill';

const BillsSummary: React.FC = () => {
  const [data, setData] = useState<IBill[]>([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await api.get('http://localhost:3000/bills');

        setData(response.data);
    }

    return (
        <div className='w-full flex flex-col'>
            <div className='m-auto w-6xl flex-col'>
                <h2 className="mb-2 mt-1 flex text-4xl font-medium leading-tight text-primary">
                    Bills Summary
                </h2>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Id</th>
                                            <th scope="col" className="px-6 py-4">Bill</th>
                                            <th scope="col" className="px-6 py-4">Supporters</th>
                                            <th scope="col" className="px-6 py-4">Opposers</th>
                                            <th scope="col" className="px-6 py-4">Primary Sponsor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(d => (
                                                <tr className="border-b dark:border-neutral-500" key={d.id}>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{d.id}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.name}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.supportersCount}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.OpposersCount}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{d.primarySponsor}</td>
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
        </div>)
}

export default BillsSummary;