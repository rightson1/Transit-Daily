import RichText from '../RichText'

const EventBody = ({ post }) => {
    const { blog } = post.fields

    return (

        <div className='max-w-none prose my-5'>
            <RichText content={blog} />
        </div>
    )
}

export default PostBody