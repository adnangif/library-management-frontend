// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BasePage from '../BasePage';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import FetchBookDetails from '../../apiCalls/FetchBookDetails';
import { getGlobalUser } from '../../userManagement';

export default function BookDetailPage() {



    // const [title, setTitle] = useState('')
    // const [author, setAuthor] = useState('')
    // const [description, setDescription] = useState('')
    // const [pyear, setPyear] = useState('')
    // const [edition, setEdition] = useState('')
    // const [availablity, setAvailability] = useState("sdfas")


    // useEffect(() => {
    //     const book1 = {
    //         title: "Introduction to algorithm",
    //         author: "Dr. Somres Bosu",
    //         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    //         provident dolorum id tempora praesentium iusto fuga, magnam cumque reprehenderit.`,
    //         pyear: '2020',
    //         edition: '6th',
    //         availablity: 'Available',
    //     }

    //     setTitle(book1.title)
    //     setAuthor(book1.author)
    //     setDescription(book1.description)
    //     setPyear(book1.pyear)
    //     setEdition(book1.edition)
    //     setAvailability(book1.availablity)

    // }, [])

    function handleOrder() {
        console.log("order handling happens here")
    }



    const { bookid } = useParams()


    const { isPending, error, data } = useQuery({
        queryKey: ["bookDetails", bookid],
        queryFn: async () => await FetchBookDetails(getGlobalUser(), bookid)
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
                        <div className='text-sm text-neutral-400'>Availablity</div>
                        <div className='font-bold text-lg'>{data.availablity}</div>
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
                >Place Order</button>
            </div>
        </BasePage>
    )
}