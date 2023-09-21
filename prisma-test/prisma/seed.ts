import prisma from "../src/database/database";

async function checkOrCreateDefaultUser() {
    return await prisma.product.upsert({
        create: {
            description: "aoba",
            expirationDate: new Date(),
            label: "testando",
            price: 150
        },
        update: {},
        where: {
            label: "testando",
        }
    })
}

async function main() {
    return checkOrCreateDefaultUser()
}

main()
    .then(async () => {
        console.log("Ok!!!");
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })