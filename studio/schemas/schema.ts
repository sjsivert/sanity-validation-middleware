// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      title: 'User',
      name: 'user',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
          validation: (Rule) => Rule.required().max(50),

        },
        { 
          title: 'Email',
          name: 'email',
          type: 'string',
          validation: (Rule) => Rule.required().max(50).email(),

        },
        {
          title: 'Password',
          name: 'password',
          type: 'string',
          validation: (Rule) => Rule.required().max(50).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        },
        {
          title: 'Password Confirmation',
          name: 'passwordConfirmation',
          type: 'string',
          validation: (Rule) => Rule
          .required()
          .max(50)
          .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
          .custom((value, context) => {
            if (value !== context.parent.password) {
              return 'Passwords do not match'
            }
            return true
          }, 'Passwords do not match'),
        },
        {
          title: 'Phone Number',
          name: 'phoneNumber',
          type: 'string',
          validation: (Rule) => Rule.required().regex(/^(?:\+47)?[2-9]\d{7}$/),
        }
      ]
    }
  ]),
})
