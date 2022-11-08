class queries {
    //TODO: to complete CRUD
    /**
     * @param schema - The mongoose Schema
     * @param data - The JSON data
     * method Create
     */
     async insertInToDB(schema, data) {
        const newDocument = new schema(data)
        return await newDocument.save()
    }

    /**
     * @param schema - The mongoose Schema
     * @param filter - The JSON filter
     * method Read
     */
    async getFromDB(schema, filter) {
        return await schema.find(filter)
    }

    //TODO: create method for Update
    //TODO: create method for Delete
}


module.exports = new queries();