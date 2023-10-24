/* eslint-disable react/prop-types */
export default function InputSearchNotes ({ onSearch }) {
    const onSearchHandler = (e) => {
        onSearch(e.target.value)
    }
    return (
        <div className="py-6">
            <input 
                type="text" 
                className="block p-3 px-1 md:px-40 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search your notes..."  
                onChange={onSearchHandler}     
            />
        </div>
    )
}