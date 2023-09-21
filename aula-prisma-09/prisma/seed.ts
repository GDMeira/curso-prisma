import prisma from "../src/database";


async function checkOrCreateFavoriteCustomer() {
    return await prisma.customer.upsert({
        create: {
            firstName: "Geraldo Luiz",
            lastName: "Datena",
            document: "133.245.497-60"
        },
        update: {},
        where: {
            document: "133.245.497-60"
        }
    })
}

async function main() {
    try {
        await checkOrCreateFavoriteCustomer();
        console.log("OK!!!");
        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
}

main();