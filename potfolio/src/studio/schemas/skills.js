const skillsSchema = {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', title: 'Skill Name', type: 'string' },
              { name: 'imageSrc', title: 'Skill Image', type: 'image', options: { hotspot: true } },
            ],
          },
        ],
      },
    ],
}

export default skillsSchema;
