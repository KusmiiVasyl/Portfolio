import {social} from "../data/social-data";

export const Socials = () => {
    return (
        <ul className='flex space-x-6'>
            {social.map((item, index) =>{
                return (
                  <li className='flex justify-center items-center text-cyan-200 hover:text-blue-400 transition-all duration-300'
                      key={index}>
                      <a className='text-base' href={item.href}>
                          {item.icon}
                      </a>
                  </li>
                )
            })}
        </ul>
    )
}