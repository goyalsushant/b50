import { useDebounce } from '../hooks/useDebounce'
import { useAppDispatch } from '../hooks/reduxHooks'
import { fetchProducts } from '../store/slices/productSlice'
import { useEffect, useState } from 'react'

function SearchBar() {
    const [text, setText] = useState('')
    const debounced = useDebounce(text, 500)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts(`keyword=${debounced}`))
    }, [debounced])


    return (
        <input className='input mb-4'
            placeholder='Search Products'
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    )
}

export default SearchBar