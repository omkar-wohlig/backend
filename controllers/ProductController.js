import ProductModel from "../models/ProductModel"

const router = Router()
router.post("/addProducts", async (req, res) => {
    try {
        const data = await ProductModel.addNewProduct(req.body)
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

router.get("/allProducts", async (req, res) => {
    try {
        const data = await ProductModel.getAllProducts()
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    async (req, res) => {
        try {
            const data = await PersonModel.getOne(req.params.id)
            res.json(data)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    }
)
router.post("/create", async (req, res) => {
    try {
        const data = await PersonModel.saveData(req.body)
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})
router.put("/:id", async (req, res) => {
    try {
        const data = await ProductModel.updateData(req.params.id, req.body)
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const data = await PersonModel.deleteData(req.params.id)
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})
export default router
