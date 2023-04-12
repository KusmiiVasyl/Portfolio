import {navigation} from "../data/navigation-data";
import {Link} from 'react-scroll';


export const Menu = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return (
            <li className='text-cyan-50 hover:text-blue-400 cursor-pointer' key={index}>
              <Link to={item.href}
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}