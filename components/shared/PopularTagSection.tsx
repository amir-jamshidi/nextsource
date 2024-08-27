import React from 'react'
import SectionTitle from './SectionTitle'
import { ITag } from '@/types/tag'
import Link from 'next/link'

const PopularTagSection = async ({ tags }: { tags: ITag[] }) => {

    return (
        <div className='mt-12'>
            <SectionTitle isShowMore={false} title='تگ های محبوب' />
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-1.5 mt-12'>
                {tags.map(tag => (
                    <Link key={tag._id} href={`/tag/${tag.href}`}>
                        <div className='h-20 rounded-xl bg-blue flex-center flex-col'>
                            <p className="text-base text-700-300">{tag.title}</p>
                            <p className="text-sm text-700-300">{tag.titleEn}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PopularTagSection