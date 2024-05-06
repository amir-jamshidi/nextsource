import { ITag } from '@/types/tag'
import Link from 'next/link'

interface TagItemProps {
    tag: ITag
}

const TagItem = ({ tag }: TagItemProps) => {
    return (
        <Link href={tag.href}>
            <span className='bg-gray-300 text-gray-800 text-sm rounded px-2'>{tag.title}</span>
        </Link>
    )
}

export default TagItem