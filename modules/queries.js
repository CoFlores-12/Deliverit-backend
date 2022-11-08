class queries {
    /**
     * @param schema - The mongoose Schema
     * @param filter - The JSON filter
     */
    async getFromDB(schema, filter) {
        return await schema.find(filter)
    }

    /**
     * @param schema - The mongoose Schema
     * @param data - The JSON data
     */
     async insertInToDB(schema, data) {
        const newDocument = new schema(data)
        return await newDocument.save()
    }
}


module.exports = new queries();