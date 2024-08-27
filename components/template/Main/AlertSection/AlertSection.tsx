import { getAlerts } from '@/actions/alert.action'
import { InfoRounded } from '@mui/icons-material';
import React from 'react'

const AlertSection = async () => {

    const alerts = await getAlerts();
    if (!alerts.length) return null

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='px-2 lg:px-8 mt-10 flex flex-col gap-y-1 '>
                    {alerts.map((item) => (
                        <div key={item._id} className={`
                        ${item.type === 'SUCCESS' ?     'dark:bg-green-500/5 border dark:border-green-900 bg-green-500 border-green-600' :
                                item.type === 'ERROR' ? 'dark:bg-red-500/5 border dark:border-red-900 bg-red-500 border-red-600' :
                                                        'dark:bg-amber-500/5 border dark:border-amber-800 bg-amber-500 border-amber-600 '} rounded-2xl py-2 px-1.5 gap-x-0.5 text-sm flex items-center`}>

                            <div>
                                <span>
                                    <InfoRounded className='notification-icon' />
                                </span>
                            </div>
                            <div className='flex items-center gap-x-0.5 flex-wrap'>
                                <p className='dark:text-gray-200 text-gray-900'>
                                    {item.title}
                                </p>
                                <p className='dark:text-gray-300 text-gray-800'>
                                    {item.body}
                                </p>
                            </div>
                        </div >
                    ))
                    }
                </div >
            </div>
        </section>
    )
}

export default AlertSection