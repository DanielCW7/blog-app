const project = {
    name: 'project',
    title: 'Projects',
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
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail',
            option: {hotspot: true}
        }
    ]
}

export default project