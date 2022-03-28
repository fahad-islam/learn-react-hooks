import React from 'react'

const Navbar = () => {
  let navbar_links = [
      { name: 'useState hook' },
      { name: 'useCallBack hook' },
      { name: 'useEffect hook' },
      { name: 'useContext hook' },
      { name: 'useImperativeHandle hook' },
      { name: 'useLayoutEffect hook' },
      { name: 'useMemo hook' },
      { name: 'useReducer hook' },
      { name: 'useRef hook' },
      { name: 'useCustom hook' },
    ]
  return (
    <div className="border-r-2 border-slate-900 py-4 px-2">
      <div className="text-whitepx-5 flex h-full flex-col">
        <span className="mx-10 w-max bg-slate-900 p-2 px-4 text-xl font-extrabold text-slate-100 shadow-[5px_5px] shadow-red-500">
          Use Hook
        </span>
        <div className="mt-12 flex w-full flex-col items-center flex-grow">
          {navbar_links.map((item) => (
            <div className="w-full text-center text-slate-900">
              <span className="w-full cursor-pointer text-center text-sm underline">
                <span className="text-black">→</span> {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full text-center">
            <span className="text-xs">@created by</span>
            <a href="https://github.com/fahad-islam" className="pl-1 text-xs font-bold">fahad-islam</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
