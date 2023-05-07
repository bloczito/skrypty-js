# Shop app
##### Using Express and React

## Installation
1. Clone the repository
2. Run ``` docker compose up -d ```
3. Shop app is running on ``` localhost:3000 ```


## Types
#### Category
```typescript
{
  value: string;
  label: string;
}
```

#### Product
```typescript
{
  id: string;
  name: string;
  price: number;
  category: string;
  description: string | undefined;
  image: string;
}
```

## Endpoints

### Categories

#### GET /categories
Returns all categories as Category[]

#### GET /categories/:value
Based on the value parameter, returns a category as Category

#### POST /categories
Creates a new category. Body:
```typescript
{
  value: string;
  label: string;
}
```

#### PUT /categories/:value
Updates a category. Body:
```typescript
{
  label: string
}
```

#### DELETE /categories/:value
Deletes a category

### Products

#### GET /products?category=:category
If category is provided, returns all products as Product[] filtered by category. Otherwise, returns all products randomly as Product[]

#### POST /products
Creates a new product. Body:
```typescript
{
  name: string;
  price: number;
  category: string;
  description: string | undefined;
  image: string;
}
```

#### GET /products/:id
Returns a product by id as Product

#### PUT /products/:id
Updates a product. Body:
```typescript
{
  name: string | undefined;
  price: number | undefined;
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
}
```

#### DELETE /products/:id
Deletes a product