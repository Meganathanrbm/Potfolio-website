export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instragram',
      type: 'string',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    },
    {
      name: 'leetcode',
      title: 'Leetcode',
      type: 'string',
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'ImageURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
}
