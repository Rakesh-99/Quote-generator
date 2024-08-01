import { useState } from "react";
import { useSelector } from "react-redux";



const ShowSavedQuotes = () => {

    const { quotesList } = useSelector((state) => state.quote);

    const [listData, setListData] = useState(quotesList);








    return (
        <>
            <div className="">
                {
                    listData ?

                        <div className="">
                            {
                                listData.map((val, i) => {
                                    // console.log(val.join(' \n'));
                                    return (
                                        <div className="w-full flex justify-center" key={i}>
                                            <h1 className="text-xl bg-yellow-100 m-5 p-5 rounded-md w-96 ">📌{val}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        :

                        <div className="">
                            <h1>No quotes found</h1>
                        </div>
                }
            </div>
        </>
    )
}

export default ShowSavedQuotes;