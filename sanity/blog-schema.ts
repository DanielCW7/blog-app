const blog = {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'topic',
            type: 'string',
            title: 'Topic'
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author'
        },
        {
            name: 'date',
            type: 'date',
            title: 'Date'
        },
        {
            name: 'brief',
            type: 'text',
            title: 'Brief'
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [{ type: "block"}]
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail',
        }
    ]
}

export default blog