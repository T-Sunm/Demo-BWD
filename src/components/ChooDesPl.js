import React,{useState} from 'react'
export default function ChooDesPl({ title, icon, chooseOptions }) {
    const [selected, setselected] = useState('')

    function selectOptionHandler(){
        setselected(title)
        chooseOptions(title)
    }

    return (
        <button className='rounded-[8px] border-[2px] border-colorButtonHeader p-[16px] w-[100%] h-[105px]
        flex flex-col ease-in duration-200 
        mobile:w-[40vw]
        hover:border-[2px] hover:border-black
        '
            style={{
                backgroundColor: title === selected && "#F7F7F7",
                borderColor: title === selected && "black"
            }}
            onClick={selectOptionHandler}
        >
            <div><img src={icon} className='w-[45px] h-[45px]' alt='Iscon' /></div>
            <div className='font-semibold '>{title}</div>
        </button>


    )
}
