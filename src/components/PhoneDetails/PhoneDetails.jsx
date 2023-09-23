
import { useLoaderData, useParams } from 'react-router-dom';


const PhoneDetails = () => {
    const phones = useLoaderData();
    const { id } = useParams();
    //    console.log(id);

    const phone = phones.find(phone => phone.id === id);
    //    console.log(phone)
    const { image, phone_name, brand_name} = phone;
    const handleFavorite = () => {
        const favoriteItems = []
        const getPhone = JSON.parse(localStorage.getItem('phones'))
        if (!getPhone) {
            favoriteItems.push(phone)
            localStorage.setItem('phones', JSON.stringify(favoriteItems))
            return alert('Item added')
        } else {
            const isExist = getPhone.find(phone => phone.id === id)
            if (!isExist) {
                favoriteItems.push(...getPhone, phone)
                localStorage.setItem('phones', JSON.stringify(favoriteItems))
                return alert('Item added')
            }else{
                return alert('Duplicate Item')
            }
        }
    }
    // const handleFavorite = () => {
    //     const getPhone = JSON.parse(localStorage.getItem('phones')) || [];
        
    //     const isExist = getPhone.find(favoritePhone => favoritePhone.id === id);
    
    //     if (!isExist) {
    //         getPhone.push(phone);
    //         localStorage.setItem('phones', JSON.stringify(getPhone));
    //         alert('Item added');
    //     } else {
    //         alert('Duplicate Item');
    //     }
    // }
    






    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-12 mb-12 bg-slate-300 text-white p-8'>Phone details</h1>
            <div>
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto mb-12">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {brand_name}
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {phone_name}
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        </p>
                        <a className="inline-block" href="#">
                            <button onClick={handleFavorite}
                                className="bg-pink-500   flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-green-400 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Add to Favorites
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PhoneDetails;