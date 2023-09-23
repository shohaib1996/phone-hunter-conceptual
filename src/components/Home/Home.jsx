
import { useLoaderData } from 'react-router-dom';
import Phones from '../Phones/Phones';
import Banner from '../../Header/Banner';

const Home = () => {
    const phones = useLoaderData();

    console.log(phones)
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='max-w-screen-xl mx-auto grid grid-cols-3 gap-5 mt-12 mb-12'>
                {
                    phones.map(phone => <Phones key={phone.id} phone={phone}></Phones>)
                }
            </div>
        </div>
    );
};

export default Home;