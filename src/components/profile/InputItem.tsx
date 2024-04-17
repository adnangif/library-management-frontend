interface propTypes {
    data: any;
    title: string;
}

export default function InputItem({ data, title }: propTypes) {
    return (
        <div className='flex flex-col gap-2 flex-grow w-3/4'>
            <div>{title}</div>
            <input readOnly={true} value={data}
                className='outline-none border rounded-md focus:bg-neutral-600 bg-neutral-800 p-2'
            ></input>
        </div>
    )
}