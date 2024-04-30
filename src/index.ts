import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function insertUser(username:string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
    })
    console.log(res);
}
// insertUser("admin1", "123456", "harkirat", "singh")

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUsers(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: {
            email: username
        },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
}

// updateUsers('admin1', {
//     firstName: "aniket",
//     lastName: "sooryavanshi"
// });
    
async function getUser(username: string) {
    try {
        const res = await prisma.user.findUnique({
            where: {
                email: username
            }
        })
        console.log(res);
    } catch(err) {
        console.log("Error while finding the error: ", err);
    }
}

getUser("admin1");
