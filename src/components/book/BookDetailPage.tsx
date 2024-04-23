// import { useParams } from 'react-router-dom';
import BasePage from '../BasePage';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import FetchBookDetails from '../../apiCalls/FetchBookDetails';
import { getGlobalUser } from '../../userManagement';
import { addToCart, exists, CartItem } from '../../cartManagement';
import { ToastContainer, toast } from 'react-toastify';

export default function BookDetailPage() {

    function handleOrder() {
        const item: CartItem = {
            book_id: data.book_id,
            title: data.title,
            author: data.author,
            info_id: data.info_id,
        }
        if (exists(item) == false) {
            addToCart(item)
            toast.success("Successfully Added this book to Cart")
        } else {
            toast.error("This book was already added to the Cart")
        }


    }



    const { infoid } = useParams()


    const { isPending, error, data } = useQuery({
        queryKey: ["bookDetails", infoid],
        queryFn: async () => await FetchBookDetails(getGlobalUser(), infoid)
    })


    if (isPending) return (
        <BasePage>
            <div>Loading...</div>
        </BasePage>
    )

    if (error) return (
        <BasePage>
            <div>An error has occurred:  {error.message}</div>
        </BasePage>
    )

    return (
        <BasePage>
            <ToastContainer />
            <div className='flex justify-between'>
                <div className='min-w-48 h-48 bg-blue-300'></div>
                <div className='p-10 pt-0 flex-grow overflow-y-hidden'>{data.description}</div>
            </div>
            <div className='flex gap-20 w-full'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col'>
                        <div className='text-sm text-neutral-400'>Title</div>
                        <div className='font-bold text-lg'>{data.title}</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sm text-neutral-400'>Author</div>
                        <div className='font-bold tex-lg'>{data.author}</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sm text-neutral-400'>Availability</div>
                        <div className='font-bold text-lg'>{data.is_available ? "Available" : "Not Available"}</div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col'>
                        <div className='text-sm text-neutral-400'>Publish Year</div>
                        <div className='font-bold text-lg'>{data.publication_year}</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sm text-neutral-400'>Edition</div>
                        <div className='font-bold tex-lg'>{data.edition}</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button onClick={handleOrder}
                    className='px-10 py-1 bg-teal-700 hover:bg-teal-800 border border-teal-950'
                >Add To Cart</button>
            </div>
        </BasePage>
    )
}