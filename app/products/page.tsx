
import { Suspense } from "react";
import { Container, Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";


interface ProductType {
    _id: string
    title: string
    slug: string
    description: string
    price: number
    image: string
    category?: string
    countInStock: number
}

async function getProducts(): Promise<ProductType[]> {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store", // جلوگیری از کش شدن
    })

    if (!res.ok) throw new Error("Failed to fetch products")
    return res.json()
}


export default async function ProductsPage() {

    return (
        <Suspense fallback={<div>در حال بارگزاری</div>}>
            <ViewProducts />
        </Suspense>
    )
}

async function ViewProducts() {
    const products = await getProducts()

    return (
        <Container>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid sx={{ sm: 6, md: 4 }}>
                        <Card>
                            <CardMedia component="img" height="200" image={product.image} alt={product.title} />
                            <CardContent>
                                <Typography variant="h6">{product.title}</Typography>
                                <Typography variant="body2">{product.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}