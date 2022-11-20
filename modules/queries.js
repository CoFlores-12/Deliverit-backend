class queries {
    /**
     * @param schema - The mongoose Schema
     * @param data - The JSON data
     * method Create
     */
    async Create(schema, data) {
        const newDocument = new schema(data)
        return await newDocument.save()
    }

    /**
     * @param schema - The mongoose Schema
     * @param filter - The JSON filter
     * method Read
     */
    async Read(schema, filter) {
        return await schema.find(filter)
    }

    /**
     * @param schema - The mongoose Schema
     * @param filter - The JSON filter
     * @param newData - data to update
     * method Update
     */
     async Update(schema, filter,  newData) {
        return await schema.updateOne(filter, newData, {upsert: false})
    }
    
    /**
     * @param schema - The mongoose Schema
     * @param filter - The JSON filter
     * method Delete
     */
     async Delete(schema, filter) {
        return await schema.deleteOne(filter)
    }
}


module.exports = new queries();