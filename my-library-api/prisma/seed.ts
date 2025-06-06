// prisma/seed.ts
import { PrismaClient } from '../generated/prisma'; // Adjust the import path if needed
const prisma = new PrismaClient();

// ... Your seed logic here

async function main() {
  // Create Books
  await prisma.book.createMany({
    data: [
      { code: 'JK-45', title: 'Harry Potter', author: 'J.K Rowling', stock: 1 },
      { code: 'SHR-1', title: 'A Study in Scarlet', author: 'Arthur Conan Doyle', stock: 1 },
      { code: 'TW-11', title: 'Twilight', author: 'Stephenie Meyer', stock: 1 },
      { code: 'HOB-83', title: 'The Hobbit, or There and Back Again', author: 'J.R.R. Tolkien', stock: 1 },
      { code: 'NRN-7', title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis', stock: 1 }
    ]
  });

  // Create Members
  await prisma.member.createMany({
    data: [
      { code: 'M001', name: 'Angga' },
      { code: 'M002', name: 'Ferry' },
      { code: 'M003', name: 'Putri' }
    ]
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
