import React, {useState} from 'react';
import {TiTick} from 'react-icons/ti'
import MapLocate from './Map/MapLocate';

function Step4CHome() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='w-full h-screen'>
      <div className='px-6 sm:px-52 md:px-44 lg:px-52 xl:px-96 mt-[80px]'>
        <div className='mb-6'>
          <h1 className='font-sans text-2xl ml-2 md:ml-0 md:text-4xl font-semibold text-[#222222] mb-4'>
            Confirm your address
          </h1>
          <p className='font-sans text-sm ml-2 md:ml-0 md:text-lg text-[#717171]'>
            Your address is only shared with guests after they’ve made a
            reservation.
          </p>
        </div>

        <label className='w-full relative' htmlFor='countryCode'>
          <p className='absolute top-[-18px] left-[12px] text-[#717171] text-sm'>
            Country/Region
          </p>
          <select
            className='w-full min-h-[56px] border-[#717171] outline-none m-0 pt-[26px] pr-[36px] pb-[10px] pl-[12px] bg-transparent rounded-md focus:ring-0 focus:border-black focus:border-2 overflow-y-scroll'
            name='countryCode'
            id='countryCode'
            // size='12'
          >
            <option value='AF'>Afghanistan - AF</option>
            <option value='AF'>Afghanistan - AF</option>
            <option value='AL'>Albania - AL</option>
            <option value='AL'>Albania - AL</option>
            <option value='DZ'>Algeria - DZ</option>
            <option value='AS'>American Samoa - AS</option>
            <option value='AD'>Andorra - AD</option>
            <option value='AO'>Angola - AO</option>
            <option value='AI'>Anguilla - AI</option>
            <option value='AG'>Antigua &amp; Barbuda - AG</option>
            <option value='AG'>Antigua &amp; Barbuda - AG</option>
            <option value='AR'>Argentina - AR</option>
            <option value='AM'>Armenia - AM</option>
            <option value='AW'>Aruba - AW</option>
            <option value='AU'>Australia - AU</option>
            <option value='AU'>Australia - AU</option>
            <option value='AT'>Austria - AT</option>
            <option value='AZ'>Azerbaijan - AZ</option>
            <option value='BS'>Bahamas - BS</option>
            <option value='BH'>Bahrain - BH</option>
            <option value='BD'>Bangladesh - BD</option>
            <option value='BB'>Barbados - BB</option>
            <option value='BY'>Belarus - BY</option>
          </select>
        </label>

        <div className='rounded-md border-[#717171] mt-6 w-full border-[1px]'>
          <div className='w-full rounded-tr-md rounded-tl-md border-[#717171] border-b-[1px]'>
            <input
              type='text'
              placeholder='Address line 1'
              className='w-full rounded-md border-none h-[50px] focus:ring-1 focus:ring-black'
            />
          </div>
          <div className='w-full rounded-tr-md rounded-tl-md border-[#717171] border-b-[1px]'>
            <input
              type='text'
              placeholder='Address line 2 (if applicable)'
              className='w-full rounded-md border-none h-[50px] focus:ring-1 focus:ring-black'
            />
          </div>
          <div className='w-full rounded-tr-md rounded-tl-md border-[#717171] border-b-[1px]'>
            <input
              type='text'
              placeholder='Address line 3 (if applicable)'
              className='w-full rounded-md border-none h-[50px] focus:ring-1 focus:ring-black'
            />
          </div>
          <div className='w-full rounded-tr-md rounded-tl-md border-[#717171] border-b-[1px]'>
            <input
              type='text'
              placeholder='Address line 4 (if applicable)'
              className='w-full rounded-md border-none h-[50px] focus:ring-1 focus:ring-black'
            />
          </div>
          <div className='w-full rounded-tr-md rounded-tl-md border-[#717171] border-b-[1px]'>
            <input
              type='text'
              placeholder='City/village (if applicable)'
              className='w-full rounded-md border-none h-[50px] focus:ring-1 focus:ring-black'
            />
          </div>
          <div className='w-full rounded-tr-md rounded-tl-md border-[#717171] border-b-[1px]'>
            <input
              type='text'
              placeholder='Country/province/territory (if applicable)'
              className='w-full rounded-md border-none h-[50px] focus:ring-1 focus:ring-black'
            />
          </div>
          <div className='w-full border-[#717171]'>
            <input
              placeholder='Post code (if applicable)'
              type='text'
              className='w-full rounded-md border-none h-[50px] focus:ring-1 focus:ring-black'
            />
          </div>
        </div>

        <hr className='my-8 ' />

        <div className='w-full mb-[20px]'>
          <div className='w-full flex items-center mb-4'>
            <div>
              <h4 className='text-[16px] font-semibold pb-1'>
                Show your specific location
              </h4>
              <p className='text-sm text-[#717171]'>
                Make it clear to guests where your place is located. We'll only
                share your address after they've made a reservation.{' '}
                <a href='' className='underline'>
                  Learn more
                </a>
              </p>
            </div>

            <div className='pl-3'>
              <button
                onClick={() => setToggle((prev) => !prev)}
                aria-checked='false'
                aria-labelledby='pin-type-toggle-label'
                aria-describedby='pin-type-toggle-description'
                role='switch'
                type='button'
                className={`${
                  toggle ? 'bg-black' : 'bg-[#b0b0b0]'
                } rounded-[32px] h-8 w-12 min-w-[48px] relative cursor-pointer`}
              >
                <div
                  className={`${
                    toggle ? 'right-[-1px] border-black' : 'left-[-1px] border-[#b0b0b0]'
                  } top-[1px] absolute bg-white h-[30px] w-[30px] rounded-[50%] border-2 flex items-center justify-center`}
                >
                  {toggle && <TiTick />}
                </div>
              </button>
            </div>
          </div>
          <MapLocate />
        </div>
      </div>

      <div className='w-ful h-[80px]'></div>
    </div>
  );
}

export default Step4CHome;
