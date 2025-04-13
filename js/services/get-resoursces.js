// try/catch - xatolik (error) chiqsa uni ushlaydi, ya'ni runtime errorlar uchun ishlatiladi. if esle ga uxshab ketadi.


async function getresoursces() {
   try{
      const response = await fetch("http://localhost:3000/offers");
      return await response.json();
   }catch{
      console.log("API Kelmagan Yoki xato API dan foydalanilgan");
      
   }
}
export default getresoursces;

async function menuresoursces() {
   try{
      const response = await fetch("http://localhost:3000/menu");
      return await response.json();
   }catch{
      console.log("API Kelmagan Yoki xato API dan foydalanilgan");  
   }
}
export { menuresoursces };
