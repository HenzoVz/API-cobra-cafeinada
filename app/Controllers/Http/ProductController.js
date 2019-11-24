'use strict'

const Product = use('App/Models/Product')

class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const { page } = request.get()
    const products = await Product.query()
      .paginate(page)

    return products
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only([
      'name',
      'description',
      'amount',
      'value',
      'file_id'])

    const product = await Product.create({ ...data})

    return product
  }

  async show ({ params, response }) {
    try {
      const product = await Product.findOrFail(params.id)

      return product
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Produto não encontrado' } })
    }
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
    const product = await Product.findOrFail(params.id)
    const data = await request.only([
      'name',
      'description',
      'amount',
      'value',
      'file_id'])

    product.merge(data)

    await product.save()

    return product
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Produto não encontado' } })
    }
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const product = await Product.findOrFail(params.id)

      await product.delete()
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Produto não encontrado' } })
      
    }
  }
}

module.exports = ProductController
