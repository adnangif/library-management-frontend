// import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideNavBar from '../sidnav/SideNavBar';
// import { useEffect, useState } from 'react';

export default function BookDetailPage() {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [description,setDescription] = useState('')
    const [ pyear, setPyear] = useState('')
    const [edition,setEdition] = useState('')


    useEffect(()=>{
        const book1 = {
            title:"Introduction to algorithm",
            author:"Dr. Somres Bosu",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Hic, quam impedit? Iste molestiae dolor blanditiis omnis ullam natus quas velit 
            provident dolorum id tempora praesentium iusto fuga, magnam cumque reprehenderit.`,
            pyear:'2020',
            edition:'6th',
        }

        setTitle(book1.title)
        setAuthor(book1.author)
        setDescription(book1.description)
        setPyear(book1.pyear)
        setEdition(book1.edition)

    },[])

    function handleOrder(){
        console.log("order handling happens here")
    }



    // const { bookid } = useParams()

    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='flex h-screen w-full lg:w-5/6 max-w-5xl  overflow-hidden bg-teal-950'>
                <SideNavBar />
                <div className='bg-neutral-800 text-neutral-100 border-2 border-teal-100 rounded-md max-h-full overflow-auto flex-grow md:m-10 p-10 flex flex-col gap-5 justify-center'>
                    <div className='w-48 h-48 bg-blue-300'></div>
                    <div className='flex flex-col'>
                        <div className='text-sm'>Title</div>
                        <div className='font-bold text-lg'>Introduction to Algorithm</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sm'>Author</div>
                        <div className='font-bold tex-lg'>Dr. Somores Bosu</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sm'>Availablity</div>
                        <div className='font-bold text-lg'>Available</div>
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