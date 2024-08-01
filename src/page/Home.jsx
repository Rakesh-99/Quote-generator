import axios from "axios";
import { IoSaveOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addQuotes } from "../redux/slice/quoteSlice";
import { useState } from "react";
import toast from "react-hot-toast";


const Home = () => {

    const dispatch = useDispatch();


    const [showQuote, setShowQuote] = useState('');



    const generateQuote = () => {

        const getRandomQuotes = async () => {

            try {

                const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes?');
                if (response) {
                    console.log(response.data);
                    setShowQuote(response.data[0]);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getRandomQuotes();
    }



    // Save quote 
    const saveQuote = () => {
        if (showQuote === '') {
            return;
        } else {
            dispatch(addQuotes(showQuote))
            toast.success('Your quote has been added to list')
        }
    }



    return (
        <div className="container mx-auto px-4 py-8 transition-all">
            <header className="text-center mb-8">
                <p className="text-lg mb-6 border-b">
                    Discover random quotes.
                </p>
                <div className="w-full justify-center flex">

                    <div className="bg-yellow-100 w-1/2 py-2 px-2 relative shadow-md h-52  rounded-md flex transition-all gap-1">
                        <span>📌 </span>
                        <h1 className="text- font-semibold text-start" >
                            {
                                showQuote === '' ?
                                    <>
                                        <div className="">
                                            <h1>Welcom to random quote generator, I hope you are doing good.</h1>
                                        </div>
                                    </>
                                    :
                                    <div className="">
                                        <h1> {`" ${showQuote} "`}</h1>
                                    </div>
                            }
                        </h1>

                        <div className="absolute bottom-0 w-full float-right">

                            {
                                showQuote &&

                                <div
                                    className="flex shadow-md cursor-pointer active:bg-zinc-700 transition-all active:scale-95 justify-center items-center gap-2 rounded-md p-2 m-5 float-right bg-zinc-600 text-white ">
                                    <IoSaveOutline size={20} />
                                    <button onClick={() => saveQuote()} className="font-semibold text-sm shadow-sm">Save quote</button>
                                </div>

                            }

                        </div>

                    </div>
                </div>

            </header>
            <main className="flex flex-col  items-center">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8 w-full max-w-lg">
                    <p className="text-lg mb-4">
                        Click the button below to fetch a random quote
                    </p>


                    <button
                        onClick={() => generateQuote()}
                        className="bg-blue-500 text-white px-4 py-2 active:bg-blue-700 active:scale-95 transition-all rounded hover:bg-blue-600"
                    >
                        Get Random Quote
                    </button>
                </div>

            </main>
        </div>
    );
};

export default Home;
