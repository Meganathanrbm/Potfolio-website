const aboutmeSchema = {
    name:'aboutme',
    title:'AboutMe',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Title',
            type:'string'
        },
        {
            name:'imageurl',
            title:'ImageURL',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
    ]
}

export default aboutmeSchema;
