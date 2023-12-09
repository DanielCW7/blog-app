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
            type: 'array',
            // type: 'text',
            title: 'Content',
            of: [{ type: "block"}]
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail'   
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alt',            
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'name' }
        },
        {
            name: 'avatar',
            type: 'image',
            title: 'Avatar',
            options: { hotspot: true }
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author'
        },
    ]
}

export default blog


// "After MARVEL's success with the infinity saga, it seems as though there aren't many stories left to tell. After some pretty dire stakes with Thanos and destroying an entire universe, there seems like not many other ways one could top that. Since that storyline ended, we've been seeing other stories that happen as a result of the infinity saga. Some movies did land particularly well, while others not so well. Black Widow, Eternals, and Thor: Love and Thunder were a few of the movies that weren't as successful as their predecessors, while movies like Shang-Chi, Spiderman No Way Home, and Guardians of the Galaxy Vol.3 were generally very good. Some of these movies attempt to piggyback off of the success generated by the infinity saga, and some succeeded. However, several movies had little success. A lot of these movies such as these are coming at a time where fans have grown fatigued by the oversaturation of comic book entertainment. Shows like She-Hulk, Secret Invasion, and Ms. Marvel are examples of movies that entered the ring with high expectation, but left fans underwhelmed. It seems like the current state of the MCU primarily is that there's a higher focus on quantity over quality. Now, there have been some good things that have come out of the MCU since Endgame. Still, with the current issues surrounding the next Avengers installment and the general direction of the MCU, they really haven't fully fleshed out where they go from there. Beyond the original Avengers, there are many unexplored places that MARVEL has yet to explore. The X-Men and Fantastic 4 are probably the most likely to be the next targets of MARVEL if they are to continue putting out movies of their beloved characters. Additionally, now that the concept of the multiverse has been brought into existence, there now lies the possibility that they've opened up an endless stream of entertainment possibilities. Establishing an infinite number of different scenarios that can be drawn upon at any time in order to sustain audiences' interest seems like a genius way to prolong both the MCU and DCEU. While it's tactical to have untapped stories to invent from the MCU, they would first have to figure out where to fix their current story, as well as improve the audience engagement. I don't think that the MCU is dead by any means, but they are certainly putting out lower quality entertainment and not giving movies time to be properly written and produced. You used to see only 2 MCU movies come out in a single year, max. These days, we have movies and shows filling in the gaps, which makes me feel overwhelmed. You also didn't need to keep track of multiple movies and shows to keep track of the overall story, not anymore. So, the MARVEL needs to slow down with their entertainment if they truly want their fanbase to stick around. If not, fans are most likely going to get tired of the tangled mess of projects and altogether leave. "


