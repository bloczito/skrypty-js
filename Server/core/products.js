const CATEGORY = require("./categories");

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const PRODUCTS = [{
    id: 1,
    name: 'Koszulka 1',
    price: 100,
    category: "TSHIRT",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/e24b03d53a714675a6ced6dd68125818/757070488a5b46b8838e282a1654f019.jpg?imwidth=1800'
}, {
    id: 2,
    name: 'Koszulka 2',
    price: 110,
    category: "TSHIRT",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/ee056d3c605a454da207e1d72aa69bb0/c51b243d91ae49ccb65bf2c4999796b0.jpg?imwidth=1800'
}, {
    id: 3,
    name: 'Koszulka 3',
    price: 120,
    category: "TSHIRT",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/ee31e1e161f4439e96f572ab6814ab99/a54eb4bca6ed4e9e8983bdd7fa45aecb.jpg?imwidth=1800'
}, {
    id: 4,
    name: 'Koszulka 4',
    price: 130,
    category: "TSHIRT",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/b61b700b0f723c16bf5e4ac55a0c1ab0/13e42c70ad7545a1a1eebf0228f24edc.jpg?imwidth=1800'
}, {
    id: 5,
    name: 'Koszulka 5',
    price: 140,
    category: "TSHIRT",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/e361c1c9d14844ea8db37b66a5eba272/93d9590b88554226a36812b8f635b697.jpg?imwidth=1800'
}, {
    id: 6,
    name: 'Koszulka 6',
    price: 150,
    category: "TSHIRT",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/44f9037a71ad4e40a679b2608a96bee7/7f62c797a3864b9081f1e07748af2eb5.jpg?imwidth=1800'
}, {
    id: 7,
    name: 'Spodnie 1',
    price: 200,
    category: "PANTS",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/091b7adf751a326689ceedc9f7745dbd/e3291d3c83d94eca8e7fb4145855dd98.jpg?imwidth=1800'
}, {
    id: 8,
    name: 'Spodnie 2',
    price: 210,
    category: "PANTS",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/c4e7e591a8f44985a6a6915f4d16d159/82768aca0584456dbf8e36369d2e41ec.jpg?imwidth=1800'
}, {
    id: 9,
    name: 'Spodnie 3',
    price: 220,
    category: "PANTS",
    description: description,
    image: 'https://img01.ztat.net/outfit/ad5d4226a58c137c2d22eb40fa99c11c/391daf1eb40849ecbd85d890cb8970ba.jpg?imwidth=1800'
}, {
    id: 10,
    name: 'Spodnie 4',
    price: 230,
    category: "PANTS",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/7c540d06a70b49569f594c1f75848290/cee0188346d446d1ba1d1cbdca9fd7a8.jpg?imwidth=1800'
}, {
    id: 11,
    name: 'Spodnie 5',
    price: 240,
    category: "PANTS",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/080e1f3169c8495e98619fad1bf5bfac/bc83f99c275141dbb337038f628c6da3.jpg?imwidth=1800'
}, {
    id: 12,
    name: 'Spodnie 6',
    price: 250,
    category: "PANTS",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/09b203c2fb513647acda448ea59425e5/3318e7553d5a4b9788b8a792d29f5c17.jpg?imwidth=1800'
}, {
    id: 13,
    name: 'Bluza 1',
    price: 300,
    category: "HOODIE",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/447cdb7d801a442eaf5ee02f1a9e58be/4b2c3a93b6854bb58267acd44ecdb3dc.jpg?imwidth=1800'
}, {
    id: 14,
    name: 'Bluza 2',
    price: 310,
    category: "HOODIE",
    description: description,
    image: 'https://img01.ztat.net/article/spp-media-p1/b784041cf23a498cab8bc0cc50ec91c7/5f007ade7d474dea908cbd848fe0267d.jpg?imwidth=1800'
}]


module.exports = PRODUCTS;
