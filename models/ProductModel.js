// import Person from "../mongooseModel/Person"
import Product from "../mongooseModel/Product"

export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */

    updateData: async (id, data) => {
        let obj = await Product.findOneAndUpdate({ _id: id }, data, {
            new: true
        })
        return obj
    },
    addNewProduct: async (body) => {
        let obj = new Product(body)
        await obj.save()
        return obj
    },

    getAllProducts: async () => {
        const data = await Product.find()
        return data
    }
}
