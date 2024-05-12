import React from 'react'
import SectionTitle from './SectionTitle'
import { ITag } from '@/types/tag'
import Link from 'next/link'

const PopularTagSection = async ({ tags }: { tags: ITag[] }) => {

    return (
        <div className='mt-12'>
            <SectionTitle title='تگ های محبوب' />
            <div className='grid grid-cols-6 gap-1.5 mt-12'>
                {tags.map(tag => (
                    <Link href={`/tag/${tag.href}`}>
                        <div className='h-20 rounded-xl bg-blue-light flex-center flex-col'>
                            <p className="text-base text-gray-300">{tag.title}</p>
                            <p className="text-sm text-gray-300">{tag.titleEn}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PopularTagSection