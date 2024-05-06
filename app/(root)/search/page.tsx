import React from 'react'

interface SearchProps {
    searchParams: { q: string },

}

const Search = ({ searchParams }: SearchProps) => {
    console.log(searchParams.q);
    return (
        <div></div>
    )
}

export default Search