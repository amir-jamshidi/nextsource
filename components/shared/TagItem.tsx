import { ITag } from '@/types/tag'
import Link from 'next/link'

interface TagItemProps {
    tag: ITag
}

const TagItem = ({ tag }: TagItemProps) => {
    return (
        <Link href={`/tag/${tag.href}`}>
            <span className='dark:bg-gray-300 h-5 flex bg-green-400 font-morabba-light text-sm text-white dark:text-gray-800 rounded px-2'>{tag.title}</span>
        </Link>
    )
}

export default TagItem