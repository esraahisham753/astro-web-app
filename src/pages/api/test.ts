export async function Get({params}) {
    const id = params.id;
    const product = await getProduct(id);

    if (!product) {
        return new Response(null, {
            status: 404,
            statusText: "Product not found"
        });
    }

    return new Response(
        JSON.stringify(product),
        {
            status: 200,
            headers: {
                
            }
        }
    )
}