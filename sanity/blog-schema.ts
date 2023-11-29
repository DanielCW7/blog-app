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
            name: 'content',
            type: 'text',
            title: 'Content'
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt',                     
                }  
            ]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'name' }
        }
    ]
}

export default blog