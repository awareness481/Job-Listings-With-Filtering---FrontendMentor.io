import React from 'react';

function SvgFaceit(props) {
  return (
    <svg width={88} height={88} {...props}>
      <defs>
        <linearGradient
          id="faceit_svg__a"
          x1="50%"
          x2="50%"
          y1="3.455%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D961C3" />
          <stop offset="100%" stopColor="#6858FF" />
        </linearGradient>
        <filter
          id="faceit_svg__c"
          width="139.8%"
          height="139.8%"
          x="-19.9%"
          y="-19.9%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation={17.5}
          />
          <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2={-1}
            k3={1}
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0452633304 0"
          />
        </filter>
        <circle id="faceit_svg__b" cx={44} cy={44} r={44} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="url(#faceit_svg__a)" xlinkHref="#faceit_svg__b" />
        <use
          fill="#000"
          filter="url(#faceit_svg__c)"
          xlinkHref="#faceit_svg__b"
        />
        <path
          fill="#FFF"
          d="M41.5 30C50.613 30 58 37.387 58 46.5S50.613 63 41.5 63 25 55.613 25 46.5 32.387 30 41.5 30zm0 7.333a9.167 9.167 0 100 18.334 9.167 9.167 0 000-18.334zM59.5 25a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
        />
      </g>
    </svg>
  );
}

const JobSingleListing = () => {
  return (
    <div class='job flex flex-row w-4/5 h-64 bg-white shadow-lg my-8 mx-auto items-center'>
      <SvgFaceit className='ml-16'/>
      <div className='job__details flex flex-col justify-center ml-4 w-1/2'>
        <h2 className='job__details__title font-bold'>Faceit</h2>
        <h3 className='job__details__position font-bold'>Frontend Developer</h3>
        <div className='job__details__info flex flex-row justify-between w-2/6'>
          <span>1d ago</span>
          <span>Full Time</span>
          <span>Remote</span>
        </div>
      </div>
    </div>
  )
}

export default JobSingleListing;


