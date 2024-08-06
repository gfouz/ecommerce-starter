const BlogIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 4v16H4V4h16m2-2H2v20h20V2z' />
    <circle cx='7' cy='7' r='1' />
    <circle cx='17' cy='7' r='1' />
    <circle cx='7' cy='17' r='1' />
    <circle cx='17' cy='17' r='1' />
  </svg>
);

const ColorfulBlogIcon = ({ color = '#f1f1f1' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 4v16H4V4h16m2-2H2v20h20V2z' />
    <circle cx='7' cy='7' r='1' fill={color} />
    <circle cx='17' cy='7' r='1' fill={color} />
    <circle cx='7' cy='17' r='1' fill={color} />
    <circle cx='17' cy='17' r='1' fill={color} />
  </svg>
);

const AboutIcon = ({ color = '#f1f1f1', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10' />
    <line x1='12' y1='16' x2='12' y2='12' />
    <line x1='12' y1='8' x2='12' y2='8' />
  </svg>
);

const EditIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 20h9' />
    <path d='M9 16l2 2 4-4' />
    <circle cx='18' cy='5' r='3' />
    <circle cx='6' cy='19' r='2' />
  </svg>
);
const LoginIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 12H4M4 12l6-6m0 12l-6-6' />
    <path d='M13 18v-5H8v-2h5V6l6 6-6 6z' />
  </svg>
);

const RegisterIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='4' width='18' height='16' rx='2' ry='2' />
    <path d='M16 11h4m-2-2h2m-2 4h2' />
  </svg>
);

const CreateIcon = ({ color = '#f1f1f1', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
  >
    <path d='M12 20h9' />
    <path d='M15 17.5l4.5-4.5-4.5-4.5' />
    <path d='M4 4h8v8H4z' />
  </svg>
);
const DeleteIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M3 6h18M8.6 10l-1.3 10h8l-1.3-10M12 18v-8' />
  </svg>
);
const PostIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
    <line x1='12' y1='8' x2='12' y2='16' />
    <line x1='8' y1='12' x2='16' y2='12' />
  </svg>
);
const ContactIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 2v20H2V2h20zm-2 2H4v16h16V4z' />
    <path d='M16 7h4M16 11h4M16 15h4M8 7h4m0 4h4m0 4h4' />
  </svg>
);
const UpdateIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 12h-4l3-3m-2 5h-9a7 7 0 1 1 0-14h11' />
  </svg>
);
const DashboardIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='4' width='18' height='16' rx='2' ry='2' />
    <line x1='12' y1='4' x2='12' y2='20' />
    <line x1='3' y1='12' x2='21' y2='12' />
  </svg>
);

export {
  DashboardIcon,
  UpdateIcon,
  ContactIcon,
  PostIcon,
  DeleteIcon,
  CreateIcon,
  RegisterIcon,
  LoginIcon,
  EditIcon,
  AboutIcon,
  BlogIcon,
  ColorfulBlogIcon,
};

export const CoffeeIcon = () => (
  <svg
    width='31'
    height='31'
    viewBox='0 0 350 350'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g
      id='g10'
      transform='matrix(1.3333333,0,0,-1.4971751,713.59618,709.74589)'
    >
      <g
        id='g14'
        style={{ fill: '#f9f9f9' }}
        transform='matrix(1.54623,0,0,1.3781592,-808.36542,13.439783)'
      >
        <g id='g16' clipPath='url(#clipPath20)' style={{ fill: '#f9f9f9' }}>
          <g
            id='g22'
            transform='translate(280.2303,220.1602)'
            style={{ fill: '#f9f9f9' }}
          >
            <path
              d='M 0,0 C -4.887,-6.287 -9.918,-12.763 -11.116,-25.385 H -58.924 C -60.122,-12.763 -65.153,-6.287 -70.04,0 -75.536,7.071 -81.203,14.361 -82.152,33.704 H 12.112 C 11.163,14.361 5.496,7.071 0,0 m 22.72,21.887 h 1.349 c 6.516,0 11.818,-5.302 11.818,-11.818 0,-6.517 -5.302,-11.818 -11.818,-11.818 h -10.64 c 3.754,5.458 7.395,12.484 9.291,23.636 m 1.349,-35.454 c 13.033,0 23.636,10.603 23.636,23.636 0,13.033 -10.603,23.635 -23.636,23.635 h -0.131 c 0.085,1.88 0.131,3.846 0.131,5.909 v 5.909 H -94.109 v -5.909 c 0,-27.904 8.172,-38.418 14.738,-46.865 4.11,-5.288 7.503,-9.661 8.556,-18.133 h -32.748 V -37.202 H 33.523 v 11.817 H 0.775 c 0.626,5.037 2.079,8.627 4.019,11.818 z m -70.907,74.452 c 0,3.259 2.651,5.909 5.909,5.909 h 35.454 c 9.774,0 17.726,7.953 17.726,17.727 0,9.774 -7.952,17.727 -17.726,17.727 h -11.818 c -3.258,0 -5.909,2.65 -5.909,5.909 v 5.909 H -35.02 v -5.909 c 0,-9.775 7.952,-17.727 17.727,-17.727 h 11.818 c 3.258,0 5.908,-2.651 5.908,-5.909 0,-3.258 -2.65,-5.909 -5.908,-5.909 h -35.454 c -9.774,0 -17.727,-7.952 -17.727,-17.727 v -5.909 h 11.818 z'
              style={{
                fill: '#f9f9f9',
                fillOpacity: 1,
                fillRule: 'nonzero',
                stroke: 'none',
              }}
              id='path24'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
