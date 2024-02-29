// import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideNavBar from '../sidnav/SideNavBar';
// import { useEffect, useState } from 'react';

export default function BookDetailPage() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [pyear, setPyear] = useState('')
    const [edition, setEdition] = useState('')
    const [availablity, setAvailability] = useState("sdfas")


    useEffect(() => {
        const book1 = {
            title: "Introduction to algorithm",
            author: "Dr. Somres Bosu",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            provident dolorum id tempora praesentium iusto fuga, magnam cumque reprehenderit.`,
            pyear: '2020',
            edition: '6th',
            availablity: 'Available',
        }

        setTitle(book1.title)
        setAuthor(book1.author)
        setDescription(book1.description)
        setPyear(book1.pyear)
        setEdition(book1.edition)
        setAvailability(book1.availablity)

    }, [])

    function handleOrder() {
        console.log("order handling happens here")
    }



    // const { bookid } = useParams()

    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='flex h-screen w-full lg:w-5/6 max-w-5xl  overflow-hidden bg-teal-950'>
                <SideNavBar />
                <div className='bg-neutral-800 text-neutral-100 border-2 border-teal-100 rounded-md max-h-full overflow-auto flex flex-col gap-5 flex-grow md:m-10 p-5  justify-center'>
                    <div className='flex justify-between'>
                        <div className='min-w-48 h-48 bg-blue-300'></div>
                        <div className='p-10 pt-0 flex-grow overflow-y-hidden'>{description}</div>
                    </div>
                    <div className='flex gap-20'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col'>
                                <div className='text-sm text-neutral-400'>Title</div>
                                <div className='font-bold text-lg'>{title}</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-sm text-neutral-400'>Author</div>
                                <div className='font-bold tex-lg'>{author}</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-sm text-neutral-400'>Availablity</div>
                                <div className='font-bold text-lg'>{availablity}</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col'>
                                <div className='text-sm text-neutral-400'>Publish Year</div>
                                <div className='font-bold text-lg'>{pyear}</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-sm text-neutral-400'>Edition</div>
                                <div className='font-bold tex-lg'>{edition}</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={handleOrder}
                            className='px-10 py-1 bg-teal-700 hover:bg-teal-800 border border-teal-950'
                        >Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}