import { Link, NavLink } from 'react-router-dom'; // Optional, if using React Router
import { BsChatLeftText } from "react-icons/bs";
import { LuUser } from "react-icons/lu";






const Navbar = () => {



    const navItems = [
        {
            navName: 'Quotes list',
            icon: BsChatLeftText,
            path: '/show-quotes'

        },
        {
            navName: 'About',
            icon: LuUser,
            path: '/about'
        }
    ]


    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-400">Ron Swanson Quotes</Link>
                </div>
                <div className="space-x-4 flex gap-20" >
                    {
                        navItems.map((values, index) => {
                            const { path, navName, icon: Icon } = values;

                            return (
                                <div className="flex items-center gap-2 cursor-pointer" key={index}>
                                    <Icon size={20} />
                                    <NavLink to={path} className='text-sm'>{navName} </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
