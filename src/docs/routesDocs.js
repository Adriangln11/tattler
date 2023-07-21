const scheemaDoc = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'The name of the local.',
            example: 'Local Coffee Shop',
        },
        location: {
            type: 'object',
            description:
                'The location object of the local (state, city, street).',
            properties: {
                state: {
                    type: 'string',
                    description: 'State where the restaurant is located.',
                    example: 'California',
                },
                city: {
                    type: 'string',
                    description: 'City where the restaurant is located.',
                    example: 'LA',
                },
                street: {
                    type: 'string',
                    description: 'Street where the restaurant is located.',
                    example: '123 Avenue',
                },
            },
        },
        category: {
            type: 'array',
            description: 'An array of categories the local belongs to.',
            items: {
                type: 'string',
                example: ['Café', 'Restaurant'],
            },
        },
        comments: {
            type: 'array',
            description: 'An array of comments about the local.',
            items: {
                type: 'string',
                example: ['Great coffee!', 'Friendly staff'],
            },
        },
        stars: {
            type: 'array',
            description: 'An array of star ratings given to the local.',
            items: {
                type: 'number',
                example: [4, 5, 3],
            },
        },
        schedules: {
            type: 'object',
            description: 'The schedules object of the local.',
            example: {
                open: '9:00 AM',
                close: '5:00 PM',
            },
        },
        ranking: {
            type: 'number',
            description: 'The ranking of the local.',
            example: 4.5,
        },
    },
}

const newLocalDoc = {
    '/new-local': {
        post: {
            summary: 'Create a new local.',
            tags: ['Locals'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                    description: 'The name of the local.',
                                    example: 'Local Coffee Shop',
                                },
                                location: {
                                    type: 'string',
                                    description:
                                        'The location of the local in the format "state,city,street".',
                                    example:
                                        'California,Los Angeles,Main Street',
                                },
                                stars: {
                                    type: 'string',
                                    description:
                                        'The star ratings of the local as a comma-separated string.',
                                    example: '4,5,3',
                                },
                                category: {
                                    type: 'string',
                                    description:
                                        'The categories of the local as a comma-separated string.',
                                    example: 'Café,Restaurant',
                                },
                                comments: {
                                    type: 'string',
                                    description:
                                        'The comments about the local as a comma-separated string.',
                                    example: 'Great coffee!,Friendly staff',
                                },
                                open: {
                                    type: 'string',
                                    description:
                                        'The opening time of the local.',
                                    example: '9:00 AM',
                                },
                                close: {
                                    type: 'string',
                                    description:
                                        'The closing time of the local.',
                                    example: '5:00 PM',
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Successfully created the local.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: {
                                        type: 'string',
                                        description: 'A success message.',
                                        example: 'Created successfully',
                                    },
                                    data: {
                                        $ref: '#/components/schemas/Local',
                                    },
                                },
                            },
                        },
                    },
                },
                400: {
                    description: 'Bad request. Missing or invalid parameters.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: {
                                        type: 'string',
                                        description: 'An error message.',
                                        example: 'Error creating document',
                                    },
                                },
                            },
                        },
                    },
                },
                409: {
                    description: 'Conflict. The local already exists.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: {
                                        type: 'string',
                                        description: 'A conflict message.',
                                        example:
                                            'Local Coffee Shop already exists',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
}
const editLocalDoc = {
    '/edit-local': {
        put: {
            summary: 'Edit an existing local.',
            tags: ['Locals'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                    description: 'The name of the local.',
                                    example: 'Local Coffee Shop',
                                },
                                location: {
                                    type: 'string',
                                    description:
                                        'The location of the local in the format "country,city,street".',
                                    example:
                                        'United States,New York,Main Street',
                                },
                                stars: {
                                    type: 'string',
                                    description:
                                        'The star ratings of the local as a comma-separated string.',
                                    example: '4,5,3',
                                },
                                category: {
                                    type: 'string',
                                    description:
                                        'The categories of the local as a comma-separated string.',
                                    example: 'Café,Restaurant',
                                },
                                comments: {
                                    type: 'string',
                                    description:
                                        'The comments about the local as a comma-separated string.',
                                    example: 'Great coffee!,Friendly staff',
                                },
                                open: {
                                    type: 'string',
                                    description:
                                        'The opening time of the local.',
                                    example: '9:00 AM',
                                },
                                close: {
                                    type: 'string',
                                    description:
                                        'The closing time of the local.',
                                    example: '5:00 PM',
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Successfully updated the local.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: {
                                        type: 'string',
                                        description: 'A success message.',
                                        example: 'Updated successfully',
                                    },
                                    data: {
                                        $ref: '#/components/schemas/Local',
                                    },
                                },
                            },
                        },
                    },
                },
                404: {
                    description:
                        'Local not found. The local with the given name does not exist.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: {
                                        type: 'string',
                                        description: 'An error message.',
                                        example: 'Local not found',
                                    },
                                },
                            },
                        },
                    },
                },
                400: {
                    description: 'Bad request. Missing or invalid parameters.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: {
                                        type: 'string',
                                        description: 'An error message.',
                                        example: 'Error updating document',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
}
const deleteLocalDoc = {
    '/delete-local': {
        delete: {
            summary: 'Delete a local.',
            tags: ['Locals'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                name: {
                                    type: 'string',
                                    description:
                                        'The name of the local to be deleted.',
                                    example: 'Local Coffee Shop',
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: 'Successfully deleted the local.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: {
                                        type: 'string',
                                        description: 'A success message.',
                                        example: 'Deleted successfully',
                                    },
                                },
                            },
                        },
                    },
                },
                400: {
                    description: 'Bad request. Missing or invalid parameters.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: {
                                        type: 'string',
                                        description: 'An error message.',
                                        example: 'Error deleting document',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
}

module.exports = {
    newLocalDoc,
    scheemaDoc,
    editLocalDoc,
    deleteLocalDoc,
}
